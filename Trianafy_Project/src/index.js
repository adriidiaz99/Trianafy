// Imports de librerías
import "dotenv/config";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import morganBody from "morgan-body";
import mongoose from "mongoose";

// Imports de componentes del API
import routes from './routes';
import passport from './services/passport';

// Instanciación de la aplicación de Express
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

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
app.use('/users' , routes.user);
app.use('/auth', routes.auth);
app.use('/init', routes.init);


mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
  
  if (err) {
    console.log(`Error de conexión a la base de datos: ${JSON.stringify(err)}`);
  } else {
    console.log(`Conexión correcta a la base de datos en la URI ${process.env.DB_URI}`);
    app.listen(process.env.PORT, () =>
      console.log(
        `¡Aplicación de ejemplo escuchando en el puerto ${process.env.PORT}!`
      )
    );
  }

});