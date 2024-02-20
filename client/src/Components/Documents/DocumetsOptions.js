const DocumentsOptions = [
  {
    id: 1,
    name: "Products",
    submenus: {
      getAllProducts: {
        title: "Get all products",
        description: "Descripción de getAllProducts",
        endpoint: "[GET] http://localhost:9000/api/products",
        output: "",
      },
      getAllProductsById: {
        title: "Get a Single product",
        description: "Descripción de getAllProductsById",
        endpoint:
          "[GET] http://localhost:9000/api/products/65bd1d1b763577f85ed03988",
        output: "",
      },
      createProduct: {
        title: "Create a product",
        description: "Descripción de createProduct",
        endpoint: "[POST] http://localhost:9000/api/products",
        input: "",
        output: "",
      },
      updateProduct: {
        title: "Update a product",
        description: "Descripción de updateProduct",
        endpoint: "[PUT] http://localhost:9000/api/products",
        input: "",
        output: "",
      },
      deleteProducts: {
        title: "Delete a product",
        description: "Descripción de deleteProducts",
        endpoint:
          "[DELETE] http://localhost:9000/api/products/65bd1d1b763577f85ed03988",
        output: "",
      },
    },
    description: "Descripción de Products",
  },
  {
    id: 2,
    name: "Categories",
    submenus: {
      getAllCategories: {
        title: "Get all categories",
        description: "Descripción de getAllCategories",
        endpoint: "[GET] http://localhost:9000/api/categories",
        output: "",
      },
      getASingleCategory: {
        title: "Get a single category",
        description: "Descripción de getASingleCategory",
        endpoint:
          "[GET] http://localhost:9000/api/categories/65bd4e1668ec5a22521d207b",
        output: "",
      },
      createCategory: {
        title: "Create a category",
        description: "Descripción de createCategory",
        endpoint: "[POST] http://localhost:9000/api/categories",
        input: "",
        output: "",
      },
      updateProduct: {
        title: "Update a category",
        description: "Descripción de updateProduct",
        endpoint: "[PUT] http://localhost:9000/api/categories",
        input: "",
        output: "",
      },
      deleteCategory: {
        title: "Delete a category",
        description: "Descripción de deleteCategory",
        endpoint:
          "[DELETE] http://localhost:9000/api/categories/65bd4e1668ec5a22521d207b",
        output: "",
      },
    },
    description: "Descripción de Categories",
  },
  {
    id: 3,
    name: "Users",
    submenus: {
      getAllUsers: {
        title: "Get all users",
        description: "Descripción de getAllUsers",
        endpoint: "[GET] http://localhost:9000/api/users",
        output: "",
      },
      getASingleUser: {
        title: "Get a single user",
        description: "Descripción de getASingleCategory",
        endpoint:
          "[GET] http://localhost:9000/api/users/65bd4e1668ec5a22521d207b",
        output: "",
      },
      createUser: {
        title: "Create user",
        description: "Descripción de createUser",
        endpoint: "[POST] http://localhost:9000/api/users",
        input: "",
        output: "",
      },
      updateUser: {
        title: "Update user",
        description: "Descripción de updateUser",
        endpoint: "[PUT] http://localhost:9000/api/users",
        input: "",
        output: "",
      },
      deleteUser: {
        title: "Delete user",
        description: "Descripción de deleteUser",
        endpoint:
          "[DELETE] http://localhost:9000/api/users/65bd4e1668ec5a22521d207b",
        output: "",
      },
      checkTheEmail: {
        title: "Delete a category",
        description: "Descripción de deleteCategory",
        endpoint:
          "[DELETE] http://localhost:9000/api/users/65bd4e1668ec5a22521d207b",
        output: "",
      },
    },
    description: "Descripción de Users",
  },
  {
    id: 4,
    name: "Filters",
    submenus: {
      filterByName: {
        title: "Filter by name",
        description: "Descripción de filterByName",
        endpoint:"",
        output: "",
        
      },
      filterByCategory: {
        title: "Filter by category",
        description: "Descripción de filterByCategory",
        endpoint:"",
        output: "",
      },
      filterByprice: {
        title: "Filter by price",
        description: "Descripción de filterByprice",
        endpoint:"",
        output: "",
      },
      filterByPriceRange: {
        title: "Filter by price Range",
        description: "Descripción de filterByPriceRange",
        endpoint:"",
        output: "",
      },
    },
    description: "Descripción de Users",
  },
  {
    id: 5,
    name: "Schemas",
    submenus: {
      Schemas: {
        title: "Schemas",
        description: "Descripción de Schemas",
      },
    },
    description: "Descripción de Users",
  },
];

export default DocumentsOptions;
