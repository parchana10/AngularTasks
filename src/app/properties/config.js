/*
* All the permission for any roles should be added below with route and nav text 
*/
const APPCONSTANT = {
  permission: [
    {
        "id":"MANAGE_USER",
        "route": "/manage-user",
        "navText":"Manage User"
    },
    {
        "id":"ADD_CREDIT",
        "route": "/add-credit",
        "navText":"Add User"
    },
    {
        "id":"DEDUCT_CREDIT",
        "route": "/deduct-credit",
        "navText":"Deduct Credit"
    },
    {
        "id":"VIEW PRODUCTS",
        "route": "/view-products",
        "navText":"View Products"
    },
    {
        "id":"SEARCH PRODUCTS",
        "route": "/search-products",
        "navText":"Search Products"
    }
  ]
}

exports.APPCONSTANT = APPCONSTANT;