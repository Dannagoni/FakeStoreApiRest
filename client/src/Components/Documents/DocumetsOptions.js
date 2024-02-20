const DocumentsOptions = [
    {   
        id: 1,
        name: 'Products',
        submenus: {
            getAllProducts: {
                title: "getAllProducts",
                description: "Descripción de getAllProducts"
            },
            getAllProductsById: {
                title: "get a Single Product",
                description: "Descripción de getAllProductsById"
            },
            deleteProducts: {
                title: "deleteProducts",
                description: "Descripción de deleteProducts"
            }
        },
        description: 'Descripción de Products'
    },
    {   
        id: 2,
        name: 'Categories',
        submenus: {
            getAllCategories: {
                title: "getAllCategories",
                description: "Descripción de getAllCategories"
            },
            getAllCategoriesById: {
                title: "getAllCategoriesById",
                description: "Descripción de getAllCategoriesById"
            },
            deleteCategories: {
                title: "deleteCategories",
                description: "Descripción de deleteCategories"
            }
        },
        description: 'Descripción de Categories'
    },
    {   
        id: 3,
        name: 'Users',
        submenus: {
            getAllUsers: {
                title: "getAllUsers",
                description: "Descripción de getAllUsers"
            },
            getAllUsersById: {
                title: "getAllUsersById",
                description: "Descripción de getAllUsersById"
            },
            deleteUsers: {
                title: "deleteUsers",
                description: "Descripción de deleteUsers"
            }
        },
        description: 'Descripción de Users'
    },
    {   
        id: 4,
        name: 'Filters',
        submenus: {
            filterByName: {
                title: "filterByName",
                description: "Descripción de filterByName"
            },
            filterByCategory: {
                title: "filterByCategory",
                description: "Descripción de filterByCategory"
            },
            filterByPriceRange: {
                title: "filterByPriceRange",
                description: "Descripción de filterByPriceRange"
            }
        },
        description: 'Descripción de Users'
    },
    {   
        id: 5,
        name: 'Schemas',
        submenus: {
            Schemas: {
                title: "Schemas",
                description: "Descripción de Schemas"
            }
        },
        description: 'Descripción de Users'
    }
];

export default DocumentsOptions;