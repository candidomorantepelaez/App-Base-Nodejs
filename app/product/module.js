const routes = include("app/product/routes");

module.exports = {
  name: "products",
  routes,
  tables: ["products"]
}
