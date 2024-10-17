import selectAllCategories from "../queries/selectAllCategories.js";

export default function addPostForm(req, res) {
  selectAllCategories(req, res, 'admin/add-posts', { name: 'asc' });
}