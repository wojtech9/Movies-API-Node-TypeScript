import express from 'express';
import cors from 'cors';
import path from 'path';
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

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

// server listener

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
