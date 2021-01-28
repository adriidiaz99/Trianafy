// Imports de librerías
import "dotenv/config";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import morganBody from "morgan-body";

// Imports de componentes del API
import models from './models';
import routes from './routes';

// Instanciación de la aplicación de Express
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'))
morganBody(app);


/*app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});*/

app.use('/songs', routes.songs);
app.use('/lists', routes.listsOfSongs);
app.use('/lists', routes.lists);

app.listen(process.env.PORT, () =>
  console.log(
    `¡Aplicación de ejemplo escuchando en el puerto ${process.env.PORT}!`
  )
);