import { Cancion } from '../models/Cancion';
import { ListaReproduccion } from '../models/ListaReproduccion';
import { CancionRepository, cancionRepository } from '../repository/CancionRepository';
import { ListaReproduccionRepository, listaReproduccionRepository } from '../repository/ListaReproduccionRepository';

const ListaReproduccionController = {

    nuevaLista : (req, res) => {

        let nuevaLista = null;

        if(req.body.name == null || req.body.name == undefined || req.body.name == ""){

            res.status(400).send("Bad request");

        } else {

            nuevaLista = listaReproduccionRepository.agregarListaReproduccion(new ListaReproduccion(0, req.body.name, req.body.descripcion, req.body.propietary, req.body.canciones));
            res.status(201).json(nuevaLista);

        }
    },

    allList : (req, res) => {

        if(listaReproduccionRepository.encontrarTodos().length > 0)
            res.status(200).json(listaReproduccionRepository.encontrarTodos());
        
        else
            res.sendStatus(404);
    },

    seeDescription : (req, res) => {

        let lista = listaReproduccionRepository.encontrarPorId(req.params.id);

        if(lista === undefined){
            res.sendStatus(404);
        } else {
            res.json(lista);  
        }


    },

    editarLista : (req, res) => {
        let listaReproduccionModificada = listaReproduccionRepository.editarListaReproduccion(new ListaReproduccion(req.params.id, req.body.name, req.body.descripcion, req.body.propietary, req.body.canciones));
        console.log(listaReproduccionRepository.editarListaReproduccion(new ListaReproduccion(req.params.id, req.body.name, req.body.descripcion, req.body.propietary, req.body.canciones)));
        if(!(listaReproduccionModificada == undefined)){
            res.sendStatus(204);
        }
        else {
            console.log("/");
            res.sendStatus(404);

        }

    },

    eliminarLista: (req, res) => {
        if(listaReproduccionRepository.eliminarListaReproduccion(req.params.id)){
            res.sendStatus(204);
        } else {
            res.sendStatus(404);
        }
    },


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