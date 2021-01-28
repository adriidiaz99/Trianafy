/*
    PARA EMPLEAR MODO TRADICIONAL
**************************************
import { Cancion } from '../models/Cancion';
import { ListaReproduccion } from '../models/ListaReproduccion';

*/
import {cancionRepository } from '../repository/CancionRepository';
import {listaReproduccionRepository } from '../repository/ListaReproduccionRepository';

const ListaReproduccionController = {

    nuevaLista : async (req, res) => {

        let nuevaLista = null;

        if(req.body.name == null || req.body.name == undefined || req.body.name == ""){

            res.status(400).send("Bad request");

        } else {

            nuevaLista = await listaReproduccionRepository.agregarLista({
                name : req.body.name, 
                description: req.body.descripcion, 
                propietary : req.body.propietary, 
                canciones : req.body.canciones});

            res.status(201).json(nuevaLista);

        }
    },

    allList : async (req, res) => {

        const lista = await listaReproduccionRepository.encontrarTodos();

        if(lista.length > 0)
            res.status(200).json(lista);
        
        else
            res.sendStatus(404);
    },

    seeDescription : async (req, res) => {

        let lista = await listaReproduccionRepository.encontrarPorId(req.params.id);

        if(lista == undefined){
            res.sendStatus(404);
        } else {
            res.json(lista);  
        }


    },

    editarLista : async (req, res) => {
        let listaReproduccionModificada = await listaReproduccionRepository.editarLista(req.params.id,{
            name : req.body.name, 
            description: req.body.descripcion, 
            propietary : req.body.propietary, 
            canciones : req.body.canciones});

        if(!(listaReproduccionModificada == undefined)){
            res.sendStatus(204);
        }
        else {
            res.sendStatus(404);
        }

    },

    eliminarLista: async (req, res) => {
        await listaReproduccionRepository.eliminarLista(req.params.id)
            res.sendStatus(204);
    },


    allSongsOfLista : async (req, res) => {
        console.log(listaReproduccionRepository.encontrarPorId(req.params.id));
        res.json(listaReproduccionRepository.encontrarPorId(req.params.id));
    },

    VerCancionPorIdLista : async (req, res) => {
        let lista = await listaReproduccionRepository.encontrarPorId(req.params.id1);
        if(!(lista == undefined)){
            let song = await lista.encontrarPorId(req.params.id2);

            if (!(song == undefined)) {
                res.json(song);
            } else {
                res.sendStatus(404);
            }
        } else {

                res.sendStatus(404);

        }
        
    },

    nuevaCancionALista : async (req, res) => {

        let comprobar = true;

        let lista = await listaReproduccionRepository.encontrarPorId(req.params.id1);

        let song = await cancionRepository.encontrarPorId(req.params.id2);

        if(song == undefined || lista == undefined){

            res.sendStatus(404);

        } else {

            if(lista.canciones.length > 0){
                for(let i = 0; i < lista.canciones.length; i++){
                    if(song._id.equals(lista.canciones[i]._id)){
                        comprobar = false;
                    }
                }
            }

            if(comprobar){
                lista.canciones.push(song._id);

                console.log(lista.canciones);
                await listaReproduccionRepository.editarLista(req.params.id1, {
                    name : lista.name,
                    propietary : lista.propietary,
                    description : lista.description,
                    canciones : lista.canciones
                });
                res.sendStatus(200);
            } else {
                res.sendStatus(400);
            }


        }
    },

    eliminarCancionDeLista: async (req, res) => {
        let lista = await listaReproduccionRepository.encontrarPorId(req.params.id1);

        if(lista === undefined)
            res.sendStatus(404);
        
        else {
            lista.canciones.pull(req.params.id2);

            await listaReproduccionRepository.editarLista(req.params.id1, {
                name : lista.name,
                propietary : lista.propietary,
                description : lista.description,
                canciones : lista.canciones
            });

            await listaReproduccionRepository.encontrarPorId(req.params.id, {
                name : lista.name,
                propietary : lista.propietary,
                description : lista.description,
                canciones : lista.canciones
            });

            res.sendStatus(204);
        }
    }
}

export {
    ListaReproduccionController
}