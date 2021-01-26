import { Cancion } from "../models/Cancion";

export class CancionRepository{

    constructor(listaCanciones){
        this.listaCanciones = listaCanciones
    }

    get getListaCanciones(){
        return this.listaCanciones;
    }

    setlistaCanciones(value){
        this.listaCanciones = value;
    }


    buscarUltimoId(){

        let ultimoId = 0;

        this.listaCanciones.forEach(element => {
            if(element.getId > ultimoId)
                ultimoId = element.getId;
        });

        if(ultimoId == 0)
            return 1;

        return ultimoId+1;
    }

    agregarCancion(v1){
        v1.setId(this.buscarUltimoId());
        this.listaCanciones.push(v1);
    }

    eliminarCancion(id){
        if(this.listaCanciones[this.listaCanciones.indexOf(this.encontrarPorId(id))] == undefined){
            return false;
        } else {
            this.listaCanciones.splice(this.encontrarPorId(id));
            return true;
        }
        
    }

    editarCancion(v1){
        console.log(v1.getId);
        this.listaCanciones[this.listaCanciones.indexOf(this.encontrarPorId(v1.getId))] = v1;
        return this.listaCanciones[this.listaCanciones.indexOf(this.encontrarPorId(v1.getId))];
    }

    encontrarPorId(id){

        if(this.listaCanciones.length > 0){
            for(let i = 0; i < this.listaCanciones.length; i++){
                if(id == this.listaCanciones[i].getId){
                    return this.listaCanciones[i];
                }
            }
        }
        return undefined;
    }

    encontrarTodos(){
        return this.listaCanciones;
    }
}

export const cancionRepository = new CancionRepository([new Cancion(12, "Hola", 12, "Juanito mackandé", "Lola pop"), new Cancion(3, "cdeeef", 12, "dcec", "cdeced")]);