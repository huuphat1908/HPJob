//import dependency
import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
dotenv.config();


//import from app
import route from './routes/index.js';
import * as db from './config/db/index.js';

//simple config
const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
route(app);
db.connect();

//listening port
app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);