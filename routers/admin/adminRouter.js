import { Router } from "express";

import addCategoryForm from "./routes/addCategoryForm.js";
import createCategory from "./routes/createCategory.js";
import readCategories from "./routes/readCategories.js";
import loadCategoryToEdit from "./routes/loadCategoryToEdit.js";
import updateCategory from "./routes/updateCategory.js";
import deleteCategory from "./routes/deleteCategory.js";

import readPosts from "./routes/readPosts.js";
import addPostForm from "./routes/addPostForm.js";
import createPost from "./routes/createPost.js";

const adminRouter = Router();

adminRouter.get('/', (req, res) => {
  res.render('admin/index');
});

adminRouter.get('/categories', readCategories);
adminRouter.get('/categories/add', addCategoryForm);
adminRouter.post('/categories/new', createCategory);
adminRouter.get('/categories/edit/:id', loadCategoryToEdit);
adminRouter.post('/categories/update/:id', updateCategory);
adminRouter.get('/categories/delete/:id', deleteCategory);

adminRouter.get('/posts', readPosts);
adminRouter.get('/posts/add', addPostForm);
adminRouter.post('/posts/new', createPost);

export default adminRouter;