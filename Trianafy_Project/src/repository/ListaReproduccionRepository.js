import mongoose from 'mongoose';
import { ListaReproduccion } from '../models/ListaReproduccion';
const {
    Schema
} = mongoose;

const listaReproduccionRepository = {

    async encontrarTodos() {
        return await ListaReproduccion
            .find({}).populate("canciones").populate({path : "propietary", select : 'username'})
            .exec();
    },

    async encontrarPorId(id) {


        return await ListaReproduccion
            .findById(id).populate("canciones")
            .exec();

    },

    async agregarLista(nuevaLista) {
        const lista = new ListaReproduccion({
            name: nuevaLista.name,
            description: nuevaLista.description,
            propietary: nuevaLista.propietary,
            canciones: nuevaLista.canciones
        });

        const result = await lista.save();
        return result;
    },

    async editarPorId(id, listaModificada) {
        const lista = await ListaReproduccion.findById(id);

        if (lista == null) {
            return undefined;
        } else {
            return await Object.assign(lista, listaModificada).save();
        }
    },

    async editarLista(id, listaModificada) {
        return await this.editarPorId(id, listaModificada);
    },

    async eliminarLista(id) {
        await ListaReproduccion.findByIdAndRemove(id).exec();
    }

}

export {
    listaReproduccionRepository
}












/*import { Cancion } from "../models/Cancion";
import { ListaReproduccion } from "../models/ListaReproduccion";

export class ListaReproduccionRepository{

    constructor(ListaReproducciones){
        this.ListaReproducciones = ListaReproducciones
    }

    get getListaReproducciones(){
        return this.ListaReproducciones;
    }

    setListaReproducciones(value){
        this.ListaReproducciones = value;
    }


    buscarUltimoId(){

        let ultimoId = 0;

        this.ListaReproducciones.forEach(element => {
            if(element.getId > ultimoId)
                ultimoId = element.getId;
        });

        if(ultimoId == 0)
            return 1;

        return ultimoId+1;
    }

    agregarListaReproduccion(v1){
        v1.setId(this.buscarUltimoId());
        this.ListaReproducciones.push(v1);
    }

    eliminarListaReproduccion(id){
        if(this.ListaReproducciones[this.ListaReproducciones.indexOf(this.encontrarPorId(id))] == undefined){
            return false;
        } else {
            this.ListaReproducciones.splice(this.encontrarPorId(id));
            return true;
        }
        
    }

    editarListaReproduccion(v1){

        if(this.ListaReproducciones.indexOf(this.encontrarPorId(v1.getId)) == -1){
            return undefined;
        } else {
        this.ListaReproducciones[this.ListaReproducciones.indexOf(this.encontrarPorId(v1.getId))] = v1;
        return this.ListaReproducciones[this.ListaReproducciones.indexOf(this.encontrarPorId(v1.getId))];
        }
    }

    encontrarPorId(id){
        if(this.ListaReproducciones.length > 0){
            for(let i = 0; i < this.ListaReproducciones.length; i++){
                if(id == this.ListaReproducciones[i].getId){
                    return this.ListaReproducciones[i];
                }
            }
        }
        return undefined;
    }

    encontrarTodos(){
        return this.ListaReproducciones;
    }
}

export const listaReproduccionRepository = new ListaReproduccionRepository([new ListaReproduccion(1, "cedbcd", "cxndeknde", "cencke", [])]);*/