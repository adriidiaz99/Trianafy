
import { Cancion } from '../models/Cancion';
import {CancionRepository, cancionRepository} from '../repository/CancionRepository';

const CancionController = {


    allSongs : (req, res) => {
        console.log(cancionRepository.encontrarTodos()[0]);
        res.json(cancionRepository.encontrarTodos());
    },

    cancionPorId : (req, res) => {
        let song = cancionRepository.encontrarPorId(req.params.id);
        if (song != undefined) {
            res.json(song);
        } else {
            res.sendStatus(404);
        }
        
    },

    nuevaCancion : (req, res) => {

        let cancionCreada = null;

        console.log(req.body);

        if(req.body.title == null || req.body.title == undefined || req.body.title == ""){

            res.status(400).send("Bad request");

        } else {

            cancionCreada = cancionRepository.agregarCancion(new Cancion(req.body.id, req.body.title, req.body.year, req.body.artist, req.body.album));
            res.status(201).json(cancionCreada);
        }
    },

    editarCancion: (req, res) => {
        console.log(req.params.id);
        let cancionModificada = cancionRepository.editarCancion(new Cancion(req.params.id, req.body.title, req.body.year, req.body.artist, req.body.album));
        if (cancionModificada == undefined)
            res.sendStatus(404);
        else   
            res.status(200).json(cancionModificada);
    },

    eliminarCancion: (req, res) => {
        if(cancionRepository.eliminarCancion(req.params.id)){
            res.sendStatus(204);
        } else {
            res.sendStatus(404);
        }
    }
}

export {
    CancionController
}