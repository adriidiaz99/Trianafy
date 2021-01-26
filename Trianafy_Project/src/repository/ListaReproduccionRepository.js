import { Cancion } from "../models/Cancion";
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

        return ultimoId++;
    }

    agregarListaReproduccion(v1){
        v1.setId(this.buscarUltimoId());
        this.ListaReproducciones.push(v1);
    }

    eliminarListaReproduccion(v1){
        this.ListaReproducciones.splice(v1);
    }

    editarListaReproduccion(v1){
        this.ListaReproducciones[this.ListaReproducciones.indexOf(this.encontrarPorId(v1.getId))] = v1;
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

export const listaReproduccionRepository = new ListaReproduccionRepository([new ListaReproduccion(1, "cedbcd", "cxndeknde", "cencke", [new Cancion(3, "cdeeef", 12, "dcec", "cdeced")])]);