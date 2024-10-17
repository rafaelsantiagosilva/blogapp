import selectAllCategories from "../queries/selectAllCategories.js";

export default function readCategories(req, res) {
  selectAllCategories(req, res, 'admin/categories', { date: 'desc' });
}