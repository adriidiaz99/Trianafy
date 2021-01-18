import "dotenv/config";
import cors from "cors";
import bodyParser from 'body-parser';
import express from "express";
import {v4 as uuidv4} from 'uuid';

import models from './models';
import routes from './routes';


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);