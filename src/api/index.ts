import express from 'express';
import cors from 'cors';
import path from 'path';
import 'reflect-metadata';
import dbConnect from './database/dbConnect';
const app = express();
require('dotenv').config();

// routes import

import films from './routes/Films';
import favorites from './routes/Favorites';

// basic middlewares, CORS - accepts requests from all origin

app.use(cors());
app.use('/', express.static(path.join(__dirname, 'static')));
app.use(express.json());

// routes handling

app.use('/films', films);
app.use('/favorites', favorites);

// db settings

const db = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// db connection and server listener

dbConnect(db).then(() => {
  app.listen(process.env.PORT, async () => {
    console.log(`Server is listening on port ${process.env.PORT}...`);
  });
});
