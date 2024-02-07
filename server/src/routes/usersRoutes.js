const express = require('express');
const { postUser, getAllUsers, getUserById, getUserByName, updateUser, deleteUser } = require('../controllers/usersController');
const userRouter = express.Router();

userRouter.post('/users', postUser)
userRouter.get('/users', getAllUsers)
userRouter.get('/users/:id', getUserById)
userRouter.get('/users', getUserByName)
userRouter.put('/users', updateUser)
userRouter.delete('/users/:id', deleteUser)



module.exports = userRouter;
