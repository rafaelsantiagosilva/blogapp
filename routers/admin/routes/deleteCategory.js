import mongoose from "mongoose";
import CategorySchema from "../../../models/CategorySchema.js";

export default function deleteCategory(req, res) {
  const Category = mongoose.model("categories", CategorySchema);

  Category.findByIdAndDelete(req.params.id).then(() => {
    req.flash("success_msg", "Categoria excluída com sucesso!");
  }).catch((err) => {
    req.flash("error_msg", "Erro ao excluir categoria");
    console.error(err);
  }).finally(() => {
    res.redirect("/admin/categories");
  });
}