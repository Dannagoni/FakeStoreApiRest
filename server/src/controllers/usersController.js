const User = require("../models/usersModel")

const postUser = async (req, res) => {
    try {
      const { name, role, email, password, avatar } = req.body;
  
      const newUser = new User({
        name,
        role,
        email,
        password,
        avatar,
      });
  
      const savedUser = await newUser.save();
  
      res.status(200).json(savedUser);
    } catch (error) {
      console.error("Error al crear el producto:", error);
      res.status(500).json({ error: "Error al crear el producto" });
    }
  };

const getAllUsers = async (req,res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const getUserById = async (req, res) => {
    try {
        const {id} = req.params
        const UserById = await User.findById(id)
        if(!UserById)
        return res.status(404).json({error: `Id ${id} not found` })
        res.status(200).json(UserById)
     } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const getUserByName = async (req, res) => {
    try {
        const { name } = req.query;

        const userByName = await Product.find({ name: { $regex: new RegExp(name, 'i') } });

        if (!userByName || userByName.length === 0) {
            return res.status(404).json({ error: `The name ${name} not found` });
        }

        res.status(200).json(userByName);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const { name, role, email, password, avatar } = req.body;
        if (!name || !role || !email || !password || !avatar) {
            return res.status(400).json({ message: "Please provide all required fields." });
        }

        const { id } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, role, email, password, avatar },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async(req,res) => {
    try {
        const {id} = req.params
        const deleteUser = await User.findByIdAndDelete(id)
        if(!deleteUser)
        return res.status(404).json("User not found")
        res.status(200).json({message: "User deleted successfully",deleteUser})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    postUser,
    getAllUsers,
    getUserById,
    getUserByName,
    updateUser,
    deleteUser,
}