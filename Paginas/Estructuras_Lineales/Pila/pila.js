$(document).ready(main);
class Pila {
    elementos = [];
    
    push = (elemento) => {
      return this.elementos.push(elemento);
    }
    pop = () => {
      return this.elementos.pop();
    }
    isempty = () => {
      return this.elementos.length === 0;
    }
    empty = () => {
      this.elementos.length = 0;
    }
    size = () => {
      return this.elementos.length;;
    }
  }

  function main () {
    const pila = new Pila();
    
	$('.btn-Ingrese').click(function(){
       
        var porId=document.getElementById("valor").value;
        pila.push(porId);
        alert("Elemento Insertado");
        console.log("esta es la pila "+ this.pila)
	});
    $('.btn-Elimina').click(function(){
        
        
        alert(pila.pop());
	});
   
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}