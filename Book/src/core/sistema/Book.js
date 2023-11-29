export class Book {
    constructor(resennas){
        this.resennas = resennas
    }

    add_resenna(resenna){
        this.resennas.push(resenna);
        return true
    }
    
    eliminar_resenna(resenna){
        for (let i = 0; i < this.resennas.length; i++) {
            if(resenna.id === this.resennas[i]){
                delete(this.resennas[i])
                return true
            }
        }
        return false
    }

    mostrar_resennas(id){
        let resennasfiltro = [];
        for (let i = 0; i < this.resennas.length; i++) {
            if (id === this.resennas[i].idLibro){
                resennasfiltro.push(this.resennas[i]);
            }
            
        }
        return resennasfiltro;
    }
}

