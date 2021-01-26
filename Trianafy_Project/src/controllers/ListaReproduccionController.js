import { Cancion } from '../models/Cancion';
import { CancionRepository, cancionRepository } from '../repository/CancionRepository';
import { ListaReproduccionRepository, listaReproduccionRepository } from '../repository/ListaReproduccionRepository';

const ListaReproduccionController = {


    allSongsOfLista : (req, res) => {
        console.log(listaReproduccionRepository.encontrarPorId(req.params.id));
        res.json(listaReproduccionRepository.encontrarPorId(req.params.id));
    },

    VerCancionPorIdLista : (req, res) => {
        let lista = listaReproduccionRepository.encontrarPorId(req.params.id1);
        if(!(lista === undefined)){
            let song = lista.encontrarPorId(req.params.id2);

            if (!(song === undefined)) {
                res.json(song);
            } else {
                res.sendStatus(404);
            }
        } else {

                res.sendStatus(404);

        }
        
    },

    nuevaCancionALista : (req, res) => {

        let comprobar = true;

        let lista = listaReproduccionRepository.encontrarPorId(req.params.id1);

        let song = cancionRepository.encontrarPorId(req.params.id2);

        console.log(song);

        if(song === undefined || lista === undefined){

            res.sendStatus(404);

        } else {

            console.log(lista.getCanciones);
            if(lista.getCanciones.length > 0){
                for(let i = 0; i < lista.getCanciones.length; i++){
                    if(song.getId == lista.getCanciones[i].getId){
                        comprobar = false;
                    }
                }
            }

            console.log(comprobar);

            if(comprobar){
                lista.getCanciones.push(song);
                res.sendStatus(200);
            } else {
                res.sendStatus(400);
            }


        }
    },

    eliminarCancionDeLista: (req, res) => {
        let lista = listaReproduccionRepository.encontrarPorId(req.params.id1);

        let song = cancionRepository.encontrarPorId(req.params.id2);
        console.log(req.params.id1);
        console.log(req.params.id2);

        if(lista === undefined)
            res.sendStatus(404);
        
        else {
            lista.getCanciones.splice(lista.encontrarPorId(song.getId));
            res.sendStatus(204);
        }
    }
}

export {
    ListaReproduccionController
}