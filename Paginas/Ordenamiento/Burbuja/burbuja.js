$(document).ready(main);

let array = [];

class Burbuja{
    constructor(){
        this.elementos =[];
    }    
    
    encolar(elemento){
      this.elementos.push(elemento);
      return this.elementos;
    }

    print(){
        return this.elementos;
    }    
}

function main () {
	$('#btnAgregar').click(function(){
        const porId = document.getElementById("numeros").value;
        const listaAgregar = document.getElementById('listaAgregar');
        array.push(Number(porId));
        console.log(array);
        alert("Cola: " + array);
        const html = document.createElement('li');
        html.className = "list-group-item";
        html.innerHTML = `<li>${Number(porId)}</li>`;
        listaAgregar.appendChild(html);
	});

  $('#btnOrdenar').click(function(){
    let aux;
    let listaOrdenar = document.getElementById('listaOrdenar');
    // Ordena los Elementos del Array  

    for(let i= 0; i< array.length;i++){
        for(let j = array.length - 1; j >= i;j--){
            if(array[j-1]>array[j]){
                aux = array[j-1];
                array[j - 1]= array[j];
                array[j] = aux;
            }
        }
    }
    console.log(array);
    // Muestra el orden en los <li>
    for(let index = 0; index < array.length;index++){
        const html = document.createElement('li');
        html.className = "list-group-item";
        html.innerHTML = `<li>${array[index]}</li>`;
        listaOrdenar.appendChild(html);
    }
    
  });

  $('#btnLimpiar').click(function(){
    while(listaAgregar.firstChild) {
        listaAgregar.removeChild(listaAgregar.firstChild);
    }

    while(listaOrdenar.firstChild){        
        listaOrdenar.removeChild(listaOrdenar.firstChild);
    }
    array=[];
  });

  $('.btn-Guardar').click(function(){
    alert("Guardar")
  });
   
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}