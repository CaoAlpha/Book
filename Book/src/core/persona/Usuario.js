import { Reseña } from "../sistema/Reseña.js";
import { Book } from "../sistema/Book.js";

export class Usuario {
    constructor(id, nombre, resennas, preferencias, favoritos){
        this.id = id;
        this.nombre = nombre; 
        this.resennas = resennas;
        this.preferencias = preferencias;
        this.favoritos = favoritos;
    }

    add_favorito (libro) {
        if(this.favoritos.length > 0){
            for (let i = 0; i < this.favoritos.length; i++) {
                if (libro.id === this.favoritos[i].id){
                    return false
                }
                
            }
            this.favoritos.push(libro)
            return(true)
        }
        this.favoritos.push(libro)
        return(true)
    }

    eliminar_favorito (libro) {
        if(this.favoritos.length > 0){
            for (let i = 0; i < this.favoritos.length; i++) {
                if (libro.id === this.favoritos[i].id){
                    delete(this.favoritos[i])
                    return true
                }
                
            }
        }
        return false
    }

    add_resenna (resenna){
        this.resennas.push(resenna)
        return true
    }

    calificar_libro(libro, calificacion){
        libro.calificacion.push(calificacion)
    }
}

const usuario1 = new Usuario('1','Carlos', [], [], []);
const book1 = new Book([])
const resenna = new Reseña('1', usuario1, 'OL46876W', 'Soy muy lindo')
const resenna2 = new Reseña('2', usuario1, 'OL44576W', 'Soy muy deseado')
const resenna3 = new Reseña('3', usuario1, 'OL46876W', 'Soy muy inteligente')
usuario1.add_resenna(resenna);
book1.add_resenna(resenna)
book1.add_resenna(resenna2)
book1.add_resenna(resenna3)


console.log(usuario1.resennas)
console.log(book1.mostrar_resennas('OL46876W'))

export {usuario1, book1}