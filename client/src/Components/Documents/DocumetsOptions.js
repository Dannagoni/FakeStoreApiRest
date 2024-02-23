const DocumentsOptions = [
  {
    id: 1,
    name: "Products",
    submenus: {
      getAllProducts: {
        title: "Get all products",
        description: "Access the compilation of 200 products via the /products endpoint.",
        metodo_http:"[GET]",
        endpoint: "http://localhost:9000/api/products",
        output: "",
      },
      getAllProductsById: {
        title: "Get a Single product",
        description: "Descripción de getAllProductsById",
        metodo_http:"[GET]",
        endpoint:
          "http://localhost:9000/api/products/65bd1d1b763577f85ed03988",
        output: "",
      },
      createProduct: {
        title: "Create a product",
        description: "Descripción de createProduct",
        metodo_http:"[POST]",
        endpoint: "http://localhost:9000/api/products",
        input: "",
        output: "",
      },
      updateProduct: {
        title: "Update a product",
        description: "Descripción de updateProduct",
        metodo_http:"[PUT]",
        endpoint: "http://localhost:9000/api/products",
        input: "",
        output: "",
      },
      deleteProducts: {
        title: "Delete a product",
        description: "Descripción de deleteProducts",
        metodo_http:"[DELETE]",
        endpoint:
          "http://localhost:9000/api/products/65bd1d1b763577f85ed03988",
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
        metodo_http:"[GET]",
        endpoint: "http://localhost:9000/api/categories",
        output: "",
      },
      getASingleCategory: {
        title: "Get a single category",
        description: "Descripción de getASingleCategory",
        metodo_http:"[GET]",
        endpoint:
          "http://localhost:9000/api/categories/65bd4e1668ec5a22521d207b",
        output: "",
      },
      createCategory: {
        title: "Create a category",
        description: "Descripción de createCategory",
        metodo_http:"[POST]",
        endpoint: "http://localhost:9000/api/categories",
        input: "",
        output: "",
      },
      updateProduct: {
        title: "Update a category",
        description: "Descripción de updateProduct",
        metodo_http:"[PUT]",
        endpoint: "http://localhost:9000/api/categories",
        input: "",
        output: "",
      },
      deleteCategory: {
        title: "Delete a category",
        description: "Descripción de deleteCategory",
        metodo_http:"[DELETE]",
        endpoint:
          "http://localhost:9000/api/categories/65bd4e1668ec5a22521d207b",
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
        metodo_http:"[GET]",
        endpoint: "http://localhost:9000/api/users",
        output: "",
      },
      getASingleUser: {
        title: "Get a single user",
        description: "Descripción de getASingleCategory",
        metodo_http:"[GET]",
        endpoint:
          "http://localhost:9000/api/users/65bd4e1668ec5a22521d207b",
        output: "",
      },
      createUser: {
        title: "Create user",
        description: "Descripción de createUser",
        metodo_http:"[POST]",
        endpoint: "http://localhost:9000/api/users",
        input: "",
        output: "",
      },
      updateUser: {
        title: "Update user",
        description: "Descripción de updateUser",
        metodo_http:"[PUT]",
        endpoint: "http://localhost:9000/api/users",
        input: "",
        output: "",
      },
      deleteUser: {
        title: "Delete user",
        description: "Descripción de deleteUser",
        metodo_http:"[DELETE]",
        endpoint:
          "http://localhost:9000/api/users/65bd4e1668ec5a22521d207b",
        output: "",
      },
      checkTheEmail: {
        title: "Delete a category",
        description: "Descripción de deleteCategory",
        metodo_http:"[DELETE]",
        endpoint:
          "http://localhost:9000/api/users/65bd4e1668ec5a22521d207b",
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
        metodo_http:"[GET]",
        endpoint:"",
        output: "",
        
      },
      filterByCategory: {
        title: "Filter by category",
        description: "Descripción de filterByCategory",
        metodo_http:"[GET]",
        endpoint:"",
        output: "",
      },
      filterByprice: {
        title: "Filter by price",
        description: "Descripción de filterByprice",
        metodo_http:"[GET]",
        endpoint:"",
        output: "",
      },
      filterByPriceRange: {
        title: "Filter by price Range",
        description: "Descripción de filterByPriceRange",
        metodo_http:"[GET]",
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
