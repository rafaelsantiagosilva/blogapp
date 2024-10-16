import mongoose from "mongoose";
import CategorySchema from "../../../models/CategorySchema.js";

export default function loadCategoryToEdit(req, res) {
  const { id } = req.params;

  const Category = mongoose.model('categories', CategorySchema);

  Category.findById(id).lean().then((category) => {
    res.render('admin/edit-category', {
      category,
      id
    });
  }).catch((err) => {
    req.flash('error_msg', 'Erro ao carregar categoria');
    res.redirect('/admin/categories');
    console.error(err);
  });
}