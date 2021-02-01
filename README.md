# Trianafy
Projecto express.js en node.js, mongoose y mongodb desarrollado sobre una aplicación web que consiste en la implementación de una Api en función con el modelo REST que gestiona en los datos de un servidor estilo Spotify sobre música denominada "Trianafy".

## Crear un archivo .env en la carpeta src con los siguientes datos:
```
ENV = development
DEBUG = true
HOST = localhost
PORT = nPortExample
TIMEZONE = Europe/Amsterdam
DB_URI = mongodb://localhost:nPort/BBDDNameExample
JWT_SECRET=JwTSecretKey
BCRYPT_ROUNDS=12
JWT_LIFETIME=1d
JWT_ALGORITHM=HS256
```

La BBDD creará en la conexión a MongoDb *Una nueva colección gracias al /BBDDNameExample denominado por nosotros*.

## *Debemos de comprobar toda la API con Postman (Como recomendación).* 

## Debemos registrarnos y logearnos para adquirir un token en la API y poder hacer uso de ella.

> Hecho por Adrián Díaz.
