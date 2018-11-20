const save = include("app/product/actions/save-action");
const update = include("app/product/actions/update-action");
const findOne = include("app/product/actions/find-one-action");
const remove = include("app/product/actions/remove-action");
const search = include("app/product/actions/search-action");
const list = include("app/product/actions/list-action");
const paginate = include("app/product/actions/paginate-action");
const count = include("app/product/actions/count-action");


module.exports = {
  save,
  update,
  findOne,
  remove,
  search,
  list,
  paginate,
  count
}