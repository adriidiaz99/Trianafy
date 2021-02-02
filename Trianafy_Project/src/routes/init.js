import { Router } from 'express';
import { cancionRepository} from '../repository/CancionRepository';
import { listaReproduccionRepository} from '../repository/ListaReproduccionRepository';
import { usuarioRepository} from '../repository/UserRepository';
import { token } from '../services/passport';

const router = Router();

    router.post('', async (req, res) => {

        let listaC = await cancionRepository.encontrarTodos();
        let listaR = await listaReproduccionRepository.encontrarTodos();
        let listaU = await usuarioRepository.encontrarTodos();

        if(listaC.length == 0 && listaR.length == 0 && listaU.length == 0){

            await usuarioRepository.agregarUsuario({
                "username" : "musicoficial",
                "email" : "musico@gmail.com",
                "password": "1234"
            });

            await cancionRepository.agregarCancion({
                "title" : "Bulería",
                "album" : "Bisbal Edition",
                "year" : 2005,
                "artist" : "David Bisbal"
            });

            await cancionRepository.agregarCancion({
                "title" : "Amor prohibido",
                "album" : "The revenge",
                "year" : 2020,
                "artist" : "José curripiti"
            });

            await cancionRepository.agregarCancion({
                "title" : "La curiosidad",
                "album" : "El Reggaeton no es instructivo",
                "year" : 2021,
                "artist" : "AAnuel"
            });

            await cancionRepository.agregarCancion({
                "title" : "Music Box",
                "album" : "Relapse",
                "year" : 2009,
                "artist" : "Eminem"
            });

            listaU = await usuarioRepository.encontrarTodos();
            listaC = await cancionRepository.encontrarTodos();

            await listaReproduccionRepository.agregarLista({
                "name" : "Verano hits 2020",
                "description" : "@musicoficial os trae el nuevo programa",
                "propietary" : listaU[0].id,
                canciones : [
                    listaC[0].id
                ]
            });

            res.sendStatus(200);


        } else {
            res.sendStatus(400);
        }







    });


export default router;