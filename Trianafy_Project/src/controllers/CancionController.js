
//PARA EMPLEAR MODO TRADICIONAL : import { Cancion } from '../models/Cancion';
import { ListaReproduccion } from '../models/ListaReproduccion';
import {cancionRepository} from '../repository/CancionRepository';
import {listaReproduccionRepository} from '../repository/ListaReproduccionRepository';


const CancionController = {


    allSongs : async (req, res) => {
        const data = await cancionRepository.encontrarTodos();
        res.json(data);
    },

    cancionPorId : async (req, res) => {
        let song = await cancionRepository.encontrarPorId(req.params.id);
        
        if (song != undefined) {
            res.json(song);
        } else {
            res.sendStatus(404);
        }
        
    },

    nuevaCancion : async (req, res) => {

        let cancionCreada = null;

        if(req.body.title == null || req.body.title == undefined || req.body.title == ""){

            res.status(400).send("Bad request");

        } else {

            let cancionCreada = await cancionRepository.agregarCancion({
                title: req.body.title,
                album: req.body.album,
                year: req.body.year,
                artist : req.body.artist
            });
            res.status(201).json(cancionCreada);
        }
    },

    editarCancion: async (req, res) => {
        let cancionModificada = await cancionRepository.editarCancion(req.params.id, {
            title: req.body.title,
            album: req.body.album,
            year: req.body.year,
            artist : req.body.artist
        });

        if (cancionModificada == undefined)
            res.sendStatus(404);
        else   
            res.status(200).json(cancionModificada);
    },

    eliminarCancion: async (req, res) => {
        await cancionRepository.eliminarCancion(req.params.id);

        let lengthAnterior = 0;

        let listas = await listaReproduccionRepository.encontrarTodos();

        for(let i = 0; i < listas.length; i++){

            lengthAnterior = listas[i].canciones.length;

            for(let j = 0; j < listas[i].canciones.length; j++){
                if(lengthAnterior > listas[i].canciones.length){
                    j = 0;
                    lengthAnterior = listas[i].canciones.length;
                }
                if(listas[i].canciones[j]._id.equals(req.params.id)){
                    listas[i].canciones.splice(listas[i].canciones.indexOf(listas[i].canciones[j]), 1);
                }
            }

            await listaReproduccionRepository.editarLista(listas[i]._id, listas[i]);
        }


        res.sendStatus(204);
    }
}

export {
    CancionController
}