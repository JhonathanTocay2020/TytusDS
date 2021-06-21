$(document).ready(main);

var contador = 1;


class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
       
    }
}

class Lista {
    constructor() {
        this.primero = null;
        this.ultimo = null;
        this.size = 0;
    }

    add(dato) {
        let nuevo = new Nodo(dato)

        if (this.primero == null) {
            
        this.primero = nuevo;
        this.primero.siguiente = nuevo;
       
           
        }else if(this.primero.siguiente == this.primero){
            this.primero.siguiente = nuevo;
            nuevo.siguiente = this.primero;
        }
        else{
            
            let aux = this.primero.siguiente;
            while (aux != this.primero) {
                if (aux.siguiente == this.primero) {
                    nuevo.siguiente = this.primero;
                    aux.siguiente = nuevo;
                    return;
                    
                }
                aux = aux.siguiente;
            }
    
           
        }
        

    }
    find_dato(nodo){
        if (this.primero != null) {
            
        
           
            let aux = this.primero;
            if (this.primero.siguiente == nodo) {
                return this.primero;
            }
            aux = aux.siguiente;
            while (aux != this.primero) {
                if (aux.siguiente == nodo) {
                    return aux;
                }
                aux = aux.siguiente;
            }
    
            return valores;
        }
    }
    remove(dato) {
        if (this.primero != null) {
            
       
        let aux = this.primero
        if (this.primero.dato == dato) {
            if (this.primero.siguiente == this.primero) {
                this.primero = null;
            }else{
                let temp = this.find_dato(this.primero);
                this.primero = this.primero.siguiente;
                temp.siguiente = this.primero;
                
            }
            return;
        }
        aux = aux.siguiente;
        while(aux != this.primero){
            if(aux.dato == dato){
                let temp = this.find_dato(aux);
                temp.siguiente = aux.siguiente;
                return;
            }
            aux = aux.siguiente;
        }
        
    }
    return;
    }

    print() {
        if (this.primero != null) {
            
        
        var valores = []
        let aux = this.primero;
        let capa = document.getElementById("capa");        
        let capa2 = document.getElementById("capa1");
        capa2.remove();
        var c1 = document.createElement("div");
        c1.setAttribute("id","capa1");
        capa.appendChild(c1);
        valores.push(aux.dato);
            console.log("Dato:", aux.dato);
        if (aux != null) {
            var capa5 = document.getElementById("capa1");
            var h1 = document.createElement("button");
            h1.className = "sad";
            h1.setAttribute("name","mails[]");
            //h1.style.width = '100px';
            //h1.setAttribute("height","100px");
            h1.innerHTML = aux.dato;
            capa5.appendChild(h1);
        }
            aux = aux.siguiente;
        while (aux != this.primero) {
            valores.push(aux.dato);
            console.log("Dato:", aux.dato);
            var capa5 = document.getElementById("capa1");
            var h1 = document.createElement("button");
            h1.className = "sad";
            h1.setAttribute("name","mails[]");
            //h1.style.width = '100px';
            //h1.setAttribute("height","100px");
            h1.innerHTML = aux.dato;
            capa5.appendChild(h1);
            aux = aux.siguiente;
        }

        return valores;
    }
    }
    search(dato) {
        if (this.primero != null) {
            
        
        var valores = []
        let aux = this.primero;
        if (this.primero.dato == dato) {
            return this.primero.dato;
        }
        valores.push(aux.dato);
            console.log("Dato:", aux.dato);
            aux = aux.siguiente;
        while (aux != this.primero) {
            valores.push(aux.dato);
            console.log("Dato:", aux.dato);
            if (aux.dato == dato) {
                return aux.dato;
            }
            aux = aux.siguiente;
        }

        return "";
    }
    }
    update(dato,datoactualizado) {
        if (this.primero != null) {
            
        
     
        let aux = this.primero;
        if (this.primero.dato == dato) {
            this.primero.dato = datoactualizado;
            return
        }
        
            console.log("Dato:", aux.dato);
            aux = aux.siguiente;
        while (aux != this.primero) {
            
            console.log("Dato:", aux.dato);
            if (aux.dato == dato) {
                aux.dato = datoactualizado;
                return;
            }
            aux = aux.siguiente;
        }

        return;
    }
    }
    

}
function main () {
    let nuevo = new Lista()
    
	$('.btn-Ingrese').click(function(){
        var porId=document.getElementById("valor").value;
        
	
        nuevo.add(porId)
        nuevo.print()
        porId.value ="";
        
        
	});
    $('.btn-Elimina').click(function(){
        var porId=document.getElementById("valor").value;
        
	
        nuevo.remove(porId)
        nuevo.print()
        nuevo.print()
	});

    $('.btn-Actualizar').click(function(){
        var porId = document.getElementById("valor").value;
        var existe = nuevo.search(porId)
        if (porId == "") {
            alert("Por favor ingrese un dato")
        }else if (existe == "") {
            alert("El Dato que desea actualizar no existe")
        }else{
            let datoactualizado= prompt('Por cual numero desea cambiar',0);
                nuevo.update(porId,datoactualizado)
                alert("Se a actualizado");
            
            
        }
        nuevo.print();
        
	});
   
    $('.btn-Buscar').click(function(){
        var porId = document.getElementById("valor").value;
        var existe = nuevo.search(porId)
        if (existe == "") {
            alert("El Elemento es Inexistente");
        }else{
            alert("El Elemento "+existe + " Si Existe")
        }
        
	});

    $('.btn-Guardar').click(function(){
        alert("Guardar")
	});
    
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}