$(document).ready(main);

let array = [];

function main () {
	$('#btnAgregar').click(function(){
    const porId = document.getElementById("numeros");
    const listaAgregar = document.getElementById('listaAgregar');
    array.push(Number(porId.value));
    console.log(array);
    //alert("Cola: " + array);
    const html = document.createElement('li');
    html.className = "list-group-item";
    html.textContent = Number(porId.value);
    listaAgregar.appendChild(html);

    // Limpiar input
    porId.value ="";
    porId.focus();
	});

  $('#btnOrdenar').click(function(){
    let aux;
    let listaOrdenar = document.getElementById('listaOrdenar');
    // Ordena los Elementos del Array  

    for(let i= 0; i< array.length;i++){
        for(let j = i + 1;j<array.length;j++){
            if(array[j]<array[i]){
                aux = array[j];
                array[j]= array[i];
                array[i] = aux;
                dibujar(array[j],array[i]);
                imprimir(i);                 
            }                        
        }      
    }
    console.log(array);
    // Muestra el orden en los <li>
    /*for(let index = 0; index < array.length;index++){
        const html = document.createElement('li');
        html.className = "list-group-item";
        html.innerHTML = `<li>${array[index]}</li>`;
        listaOrdenar.appendChild(html);
    }*/
    
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
//-----------------------------------------------------------

function dibujar(elem,elem2){
  const listaOrdenar = document.getElementById('listaOrdenar');  

  const html = document.createElement('span');
  html.className="text-danger fw-bold fs-6";
  html.textContent = `${elem} - ${elem2}`;
  listaOrdenar.appendChild(html);
}

function imprimir(i){
  const listaOrdenar = document.getElementById('listaOrdenar'); 
  var fragment = new DocumentFragment();
  const ul =document.createElement('ul');
  ul.className = "list-group list-group-horizontal mt-2";
  ul.textContent = `Iteracion ${i}`;

  array.forEach((numero)=>{
      const li = document.createElement('li');
      li.className="list-group-item";
      li.textContent = numero;
      fragment.appendChild(li);
  });
  ul.appendChild(fragment);
  listaOrdenar.appendChild(ul);
}