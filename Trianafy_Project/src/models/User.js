export class User{

    constructor(id, nombre, apellidos, email, password){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.password = password;
    }

    get getId(){
        return this.id;
    }

    get getNombre(){
        return this.nombre;
    }

    get getApellidos(){
        return this.apellidos;
    }

    get getEmail(){
        return this.email;
    }

    get getPassword(){
        return this.password;
    }

    setId(value){
        this.id = value;
    }

    setNombre(value){
        this.nombre = value;
    }

    setApellidos(value){
        this.apellidos = value;
    }

    setEmail(value){
        this.email = value;
    }

    setPassword(value){
        this.password = value;
    }




}