import mongoose from 'mongoose';
const {
    Schema
} = mongoose;


const ListaSchema = new Schema({
    id: Number,
    name: String,
    description : Number,
    propietary : String,
    canciones : [{
        type : mongoose.ObjectId,
        ref : 'Cancion'
    }]
});

export const ListaReproduccion = mongoose.model('ListaReproduccion', ListaSchema);

/*
    SI SE HUBIESE HECHO DE LA FORMA TRADICIONAL
******************************************************

export class ListaReproduccion{


    constructor(id, nombre, descripcion, propietary, canciones){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.propietary = propietary;
        this.canciones = canciones;

    }

    get getId(){
        return this.id;
    }

    get getNombre(){
        return this.nombre;
    }

    get getDescripcion(){
        return this.descripcion;
    }

    get getPropietary(){
        return this.propietary;
    }

    get getCanciones(){
        return this.canciones;
    }

    setId(value){
        this.id = value;
    }

    setNombre(value){
        this.nombre = value;
    }

    setDescripcion(value){
        this.descripcion = value;
    }

    setPropietary(value){
        this.propietary = value;
    }

    setCanciones(value){
        this.canciones = value;
    }

    encontrarPorId(id){

        if(this.canciones.length > 0){
            for(let i = 0; i < this.canciones.length; i++){
                if(id == this.canciones[i].getId){
                    return this.canciones[i];
                }
            }
        }
        return undefined;
    }
}*/