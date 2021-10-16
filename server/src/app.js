//import dependency
import express from 'express';
import dotenv from 'dotenv';
/* import path from 'path'; */
dotenv.config();


//import from app
import route from './routes/index.js';
import * as db from './config/db/index.js';

//app port req.body router db static files
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
route(app);
db.connect();
/* app.use(express.static(path.join(__dirname, 'public'))); */

app.listen(PORT, () =>
    console.log(`App listening on port ${PORT}`)
);