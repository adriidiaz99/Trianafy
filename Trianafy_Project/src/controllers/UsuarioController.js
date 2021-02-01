import {
    User, Usuario
} from '../models/User';


import { usuarioRepository } from '../repository/UserRepository';

import {
    validationResult
} from 'express-validator';

const UserController = {

    todosLosUsuarios: async (req, res) => {
        res.json(await usuarioRepository.encontrarTodos());
    },

    usuarioPorId: async (req, res) => {

            let user = await usuarioRepository.encontrarPorId(req.params.id);
            if (user != undefined) {
                res.json(user);
            } else {
                res.sendStatus(404);
            }

    },

    nuevoUsuario: async (req, res) => {
        let usuarioCreado = await usuarioRepository.agregarUsuario(
            new Usuario({   username : req.body.username, 
                email : req.body.email, 
                fullname : req.body.fullname, 
                password : req.body.password}));
        res.status(201).json(usuarioCreado);
    },

    editarUsuario: async (req, res) => {
        let usuarioModificado = await usuarioRepository.editarUsuario(req.params.id, {   username : req.body.username, 
                                                                                email : req.body.email, 
                                                                                fullname : req.body.fullname, 
                                                                                password : req.body.password});
        if (usuarioModificado == undefined)
            res.sendStatus(404);
        else
            res.status(200).json(usuarioModificado);
    },

    eliminarUsuario: async (req, res) => {
        await usuarioRepository.eliminarUsuario(req.params.id);
        res.sendStatus(204);
    }


};



export {
    UserController
}