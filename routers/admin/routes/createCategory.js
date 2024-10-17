import mongoose from "mongoose";
import CategorySchema from "../../../models/CategorySchema.js";

export default function createCategory(req, res) {
  const errors = [];

  if (!req.body.name || typeof (req.body.name) === undefined || req.body.name == null)
    errors.push({ text: "Nome inválido" });

  if (!req.body.slug || typeof (req.body.slug) === undefined || req.body.slug == null)
    errors.push({ text: "Slug inválido" });

  if (req.body.name.length < 2)
    errors.push({ text: "Nome da categoria muito curto" });

  if (errors.length > 0) {
    res.render('admin/add-categories', { errors });
    return;
  }

  const Category = new mongoose.model("categories", CategorySchema);

  const newCategory = new Category({
    name: req.body.name,
    slug: req.body.slug,
  });

  newCategory
    .save()
    .then(() => {
      req.flash("success_msg", "Categoria criada com sucesso!");
      res.redirect("/admin/categories");
    })
    .catch((err) => {
      req.flash("error_msg", "Erro ao salvar categoria! Tente novamente mais tarde");
      console.log(err);
    });
}