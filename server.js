import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
import userRouter from './routers/user/userRouter.js';
import adminRouter from './routers/admin/adminRouter.js';
import session from 'express-session';
import connectFlash from 'connect-flash';

configDotenv();

const app = express();

const { APP_HOST, APP_PORT, DB_HOST, DB_PORT } = process.env;

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(connectFlash());

app.use((req, res, next) => {
  // res.locals: variáveis que podem ser acessadas em todas as views
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

app.use(express.static(path.join(process.cwd(), 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('hbs', engine({ defaultLayout: 'main', extname: 'hbs' }));
app.set('view engine', 'hbs');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/blogapp`)
  .then(() => {
    console.log('> Database connected');
  })
  .catch((err) => {
    console.error('> Error at connection with database: \n', err);
  });

app.use(userRouter);
app.use('/admin', adminRouter);

app.listen(APP_PORT, () => {
  console.log(`> Server started at http://${APP_HOST}:${APP_PORT}`);
});