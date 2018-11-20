const accountModule = include("app/account/module");
const clientModule = include("app/client/module");
const discountModule = include("app/discount/module");
const invoiceModule = include("app/invoice/module");
const productModule = include("app/product/module");
const purchaseModule = include("app/purchase/module");
const routeModule = include("app/route/module");
const saleModule = include("app/sale/module");
const sellerModule = include("app/seller/module");
const storeModule = include("app/store/module");
const warehouseModule = include("app/warehouse/module");

module.exports = [
  accountModule,
  clientModule,
  discountModule,
  invoiceModule,
  productModule,
  purchaseModule,
  routeModule,
  saleModule,
  sellerModule,
  storeModule,
  warehouseModule,
];