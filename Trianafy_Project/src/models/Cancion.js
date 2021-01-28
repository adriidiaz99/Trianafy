import mongoose from 'mongoose';
const {
    Schema
} = mongoose;


const cancionSchema = new Schema({
    title: String,
    year : Number,
    album : String,
    artist : String
});

export const Cancion = mongoose.model('Cancion', cancionSchema);

/*
   SI SE HUBIESE HECHO DE LA FORMA TRADICIONAL
***************************************************

export class Cancion{

    constructor(id, title, year, artist, album){
        this.id = id;
        this.title = title;
        this.year = year;
        this.artist = artist;
        this.album = album;
    }

    get getId(){
        return this.id;
    }

    get getTitle(){
        return this.title;
    }

    get getYear(){
        return this.year;
    }

    get getArtist(){
        return this.artist;
    }

    get getAlbum(){
        return this.album;
    }

    setId(value){
        this.id = value;
    }

    setTitle(value){
        this.title = value;
    }

    setYear(value){
        this.year = value;
    }

    setArtist(value){
        this.artist = value;
    }

    setAlbum(value){
        this.album = value;
    }

}*/