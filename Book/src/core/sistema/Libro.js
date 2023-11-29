export class Libro {
    constructor(id, titulo, autor, calificacion, reseñas){
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.calificacion = calificacion;
        this.reseñas = reseñas
    }

    add_reseña(reseña){
        this.reseñas.push(reseña);
        return true;
    }
}