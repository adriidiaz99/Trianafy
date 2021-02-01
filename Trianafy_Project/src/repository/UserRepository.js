import mongoose from 'mongoose';
import { Usuario } from '../models/User';
const {
    Schema
} = mongoose;

const usuarioRepository = {

    async encontrarTodos() {
        return await Usuario
            .find({})
            .exec();
    },

    async encontrarPorId(id) {


        return await Usuario
            .findById(id)
            .exec();

    },

    async encontrarPorUserName(username) {

        let lista = await Usuario.find({}).exec();
        let usuario = undefined;

        if(lista.length > 0){

            for(let i = 0 ; i < lista.length ; i++){
                if(username == lista[i].username){
                    usuario = lista[i];
                }
            }

        }

        return usuario;

    },

    async emailExists(email){
        let lista = await Usuario.find({}).exec();

        if(lista.length > 0){

            for(let i = 0 ; i < lista.length ; i++){
                if(email == lista[i].email){
                    return true;
                }
            }

        }

        return false;
    },

    async usernameExists(username){
        let lista = await Usuario.find({}).exec();

        if(lista.length > 0){

            for(let i = 0 ; i < lista.length ; i++){
                if(username == lista[i].username){
                    return true;
                }
            }

        }

        return false;
    },

    async agregarUsuario(nuevoUsuario) {
        const usuario = new Usuario({
            username: nuevoUsuario.username,
            fullname: nuevoUsuario.fullname,
            password: nuevoUsuario.password,
            email: nuevoUsuario.email
        });

        const result = await usuario.save();
        return result;
    },

    async editarPorId(id, usuarioModificado) {
        const usuario = await Usuario.findById(id);

        if (usuario == null) {
            return undefined;
        } else {
            return await Object.assign(usuario, usuarioModificado).save();
        }
    },

    async editarUsuario(id, usuarioModificado) {
        return await this.editarPorId(id, usuarioModificado);
    },

    async eliminarUsuario(id) {
        await Usuario.findByIdAndRemove(id).exec();
    }

}

export {
    usuarioRepository
}