const productActions = include("app/product/actions");

const productRoutes = [
  {
    url: "/product",
    method: "post",
    action: productActions.save
  }, {
    url: "/product/:id",
    method: "put",
    action: productActions.update,
  }, {
    url: "/product/:id",
    method: "get",
    action: productActions.findOne,
  }, {
    url: "/product/:id",
    method: "delete",
    action: productActions.remove,
  }, {
    url: "/products/search",
    method: "post",
    action: productActions.search,
  }, {
    url: "/products/list",
    method: "get",
    action: productActions.list,
  }, {
    url: "/products/paginate",
    method: "post",
    action: productActions.paginate,
  }, {
    url: "/products/count",
    method: "get",
    action: productActions.count,
  },
];

module.exports = productRoutes;