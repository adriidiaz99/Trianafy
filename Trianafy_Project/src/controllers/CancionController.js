
import { Cancion } from '../models/Cancion';
import {CancionRepository, cancionRepository} from '../repository/CancionRepository';


const CancionController = {


    allSongs : async (req, res) => {
        const data = await cancionRepository.encontrarTodos();
        res.json(data);
    },

    cancionPorId : async (req, res) => {
        let song = await cancionRepository.encontrarPorId(req.params.id);

        console.log(song);
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
        await cancionRepository.eliminarCancion(req.params.id)
        res.sendStatus(204);
    }
}

export {
    CancionController
}