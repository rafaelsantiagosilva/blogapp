import mongoose from "mongoose";
import CategorySchema from "../../../models/CategorySchema.js";

export default function readCategories(req, res) {
  const Category = mongoose.model('categories', CategorySchema);

  Category.find().lean().sort({ date: 'desc' }).then((categories) => {
    res.render('admin/categories', {
      categories
    })
  }).catch((err) => {
    req.flash('error_msg', 'Erro ao carregar categorias');
    res.redirect('/admin');
    console.error(err);
  });
}