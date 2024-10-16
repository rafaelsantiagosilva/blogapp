import mongoose from "mongoose";
import CategorySchema from "../../../models/CategorySchema.js";

export default function updateCategory(req, res) {
  const Category = mongoose.model('categories', CategorySchema);

  Category.findByIdAndUpdate(req.params.id, req.body).then(() => {
    req.flash('success_msg', 'Categoria atualizada com sucesso!');
  }).catch((err) => {
    req.flash('error_msg', 'Erro ao atualizar categoria');
    console.error(err);
  }).finally(() => {
    res.redirect('/admin/categories');
  });
}