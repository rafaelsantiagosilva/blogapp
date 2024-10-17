import mongoose from "mongoose";
import CategorySchema from "../../../models/CategorySchema.js";

export default function selectAllCategories(req, res, view, sortCondition) {
  const Category = mongoose.model('categories', CategorySchema);

  Category.find().lean().sort(sortCondition)
    .then((categories) => {
      res.render(view, { categories })
    })
    .catch((err) => {
      req.flash('error_msg', 'Erro ao carregar categorias');
      res.redirect('/admin');
      console.error(err);
    });
}