import { Router } from "express";
import createCategory from "./routes/createCategory.js";
import readCategories from "./routes/readCategories.js";
import loadCategoryToEdit from "./routes/loadCategoryToEdit.js";
import updateCategory from "./routes/updateCategory.js";
import deleteCategory from "./routes/deleteCategory.js";

const adminRouter = Router();

adminRouter.get('/', (req, res) => {
  res.render('admin/index');
});

adminRouter.get('/posts', (req, res) => {
  res.render('admin/posts');
});

adminRouter.get('/categories/add', (req, res) => {
  res.render('admin/add-categories');
});

adminRouter.get('/categories', readCategories);
adminRouter.post('/categories/new', createCategory);
adminRouter.get('/categories/edit/:id', loadCategoryToEdit);
adminRouter.post('/categories/update/:id', updateCategory);
adminRouter.get('/categories/delete/:id', deleteCategory);

export default adminRouter;