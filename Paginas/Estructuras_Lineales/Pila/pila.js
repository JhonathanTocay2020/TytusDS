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
    print = () =>{
      return this.elementos;
    }
}
//----------------------------------------------------------------
let  json;
let pila = new Pila();
axm = [];
//--------------- Datos JSON ---------------------
let categoria = "Estructura Lineal";
let nombre = "Lista Simplemente/doblemente/circular_simplemente/circular doblemente Enlazada";
let repetir = true;
let animacion = 0;
let pos = "INICIO/FIN/ORDENADO";
//-------------------------------------------------
  function main () {
    
    
	$('.btn-Ingrese').click(function(){
        var porId = document.getElementById("valor");
        pila.push(porId.value)
        //alert(porId.value + " Fue Insertado correctamente a la pila")
        // Limpiar input
        porId.value ="";
        porId.focus();
        console.log(pila.print());
	});

  $('.btn-Elimina').click(function(){
        
        alert("Se elimino el elemento: "+pila.pop())
	});

  $('.btn-Actualizar').click(function(){
    alert("Actualizar")
  });

  $('.btn-Buscar').click(function(){
    alert("Buscar") 
  });

  $('.btn-Guardar').click(function(){
    alert("Guardar")
  });
   
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}

//---------------------------------------------------------------------

// --------------------- Cargar Datos --------------------- 
function validarExt(){
  var input = document.getElementById('btn_Cargar');
  var file = input.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
  // Aquí guardamos en una variable el resultado de parsear el JSON
  json = JSON.parse(e.target.result);
  // --------------------------------------------------------------
  categoria = json.categoria;
  nombre = json.nombre;
  repetir = json.repeticion;
  animacion = json.animacion;
  pos = json.posicion;
  //--------------- Insertar Datos Masivos --------------------------
  console.log(json.repeticion);
  
  //for(index = 0; index<json.valores.length;index++){
  //    axm.push(json.valores[index]);
  //}

  if (json.repeticion == true){
      console.log('Verdader');
      for(index = 0; index<json.valores.length;index++){
          nuevo.add(json.valores[index]);
          nuevo.print();
      }
      //Datos_json(json.categoria,json.nombre,json.repeticion,json.animacion,json.posicion,json.valores);
  }else if (json.repeticion == false){
      console.log("-------------------falso---------------------");
      for(index = 0; index<json.valores.length;index++){
          if(axm.includes(json.valores[index])== false){
              axm.push(json.valores[index]);
              nuevo.add(json.valores[index]);
              nuevo.print();
          }
          else{
              console.log(json.valores[index])
          }
      }
      //for(let xm = 0; xm < axm.length;xm++){

      //}
      //Datos_json();
  }
};
  console.log(nuevo);
  reader.readAsText(file);
}
// --------------------- Guardar Datos ---------------------
// escritura(json,'ordenamiento');
function escritura(data, filename){
  let file = new Blob([JSON.stringify(data)],{type:'application/json'});
  let a = document.createElement('a');
  a.href = URL.createObjectURL(file);
  a.download = `${filename}.json`;
  a.click()
  //console.log(a)
}

let objeto;
// --------------------- Datos ---------------------
function Datos_json(c,n,r,a,p,v){

  objeto = {
    "categoria": c,
    "nombre": n,
    "repeticion": r,
    "animacion": a,
    "posicion": p,
    "valores": v
  }
  console.log(objeto);
  escritura(objeto,'Lista_Simplemente_Enlazada');
}