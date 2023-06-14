
// OBJECTS AND ARRAYS

class Curso{
  constructor(nombre, precio, nivel, libro){
    this.nombre = nombre;
     this.precio = precio;
      this.nivel = nivel;
     this.libro = libro;
      this.lleno = false;
    }
 
 ocupar(){
      this.lleno = true;
    }
  }
  
const cursos = [
  { id: 1, nombre: "Kinder", precio: 5000, nivel: "Basico", libro: "My English Stars and Friends 2", },
  { id: 2, nombre: "First Contact", precio: 5500, nivel:"Elemental", libro: "Learn with us 1",},
  { id: 3, nombre: "Kids 1", precio: 5800, nivel: "Elemental", libro: "Bright Ideas 3",},
  { id: 4, nombre: "Teens 3", precio: 6000, nivel: "Pre- intermedio", libro: "Gold Experience A2", },
   { id: 5, nombre: "Adults 4", precio: 6000, nivel: "Intermedio", libro: "English File Intermediate", },
  
 ];

 for(let index = 0; index < cursos.length; index++){
         console.log(cursos[index]);
 }
 
        console.log(cursos);

cursos.forEach((curso) => {
let div = document.createElement("div");
div.innerHTML = `
  <div class = "cards-mias">
  <h2>Id: ${curso.id}</h2>
  <p>Nombre: ${curso.nombre}</p>
  <b>$${curso.precio}</b>
  <hr />
  </div>
`;

document.body.append(div);
});

let nombrecurso = prompt("ingrese el nombre del curso");
const encontrado = cursos.find((item) => item.nombrecurso === nombrecurso);

if (encontrado) {
  let mensaje = `
    Nombre: ${encontrado.nombrecurso}
    Precio: $${encontrado.precio}
    Nivel: ${encontrado.nivel}
    Libro: ${encontrado.libro}
 `;

  alert(mensaje);
} else {
  alert("Curso no encontrado");
}

// DESCUENTO DEL IVA POR FAMILIAR

 const preciosPorFamiliar = cursos.map((item) => {
 if(cursos){
  return {
      id: item.id,
      nombre: item.nombre,
      precio: item.precio - item.precio * 0.21,
   };
  }

return item;
});

console.log(preciosPorFamiliar);

const numeros = [2, 3, 4, 5, 6];
let total = numeros.reduce((acum, item) => acum + item, 0);
console.log(total);

// DOM

 let div = document.getElementById("form");
 console.log(div.innerHTML);

   let saludo = document.getElementById("saludo");
   let seccion = prompt("Ingrese la seccion");

  if (seccion === "adultos") {
     saludo.innerHTML = "<h1>Bienvenidos English for Adults</h1>";
   
  } else if (seccion === "adolescentes") {
    saludo.innerHTML = "<h1>Bienvenidos a English for Teens</h1>";
 
  }else if (seccion === "ninos") {
   saludo.innerHTML = "<h1>Bienvenidos a English for Kids</h1>";
 
  }
   else {
    saludo.innerHTML = "<h1>Bienvenidos a Harrison English School</h1>";
  
   }

 const respuesta = () => {
  Toastify({
    text: "Ir al Whatsapp",
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    destination: "https://web.whatsapp.com/",
  }).showToast();
   };



 wpboton.addEventListener("click", respuesta);

  const usuario = {
   nombre: "victoria",
   edad: 20,
 };

 const registro = usuario.edad >= 18 && new Date();

console.log(registro);
console.log(usuario?.nombre || "El usuario no existe");

 let form = document.getElementById("form");
 form.addEventListener("keydown", () => console.log("keydown"));

 form.addEventListener("submit", (e) => {
  e.preventDefault();
 if (usuario === "victoria") {
  saludo.innerHTML = "<h1>Bienvenida Victoria </h1>";
 } else {saludo.innerHTML = "<h1>Bienvenid@ nuevo usuario</h1>";}
   let inputs = e.target.children;
    console.log(inputs[0].value);
    console.log(inputs[1].value);
 });

// STORAGE 

 console.log(localStorage);

 localStorage.setItem("nombre", "Victoria");
 localStorage.setItem("valor", "true");


 dejar.addEventListener("click", () => {
     localStorage.clear();
     Swal.fire({
      title: 'Quieres deajar de cursar?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Has dejado de cursar. Nos vemos pronto', '', 'info')
      } else if (result.isDenied) {
        Swal.fire('Sigues Cursando', '', 'success')
      }
    })
   });

//  FETCH and DATA JSON
   
let lista = document.getElementById("listado");

   fetch("./data.json")
   .then((response) => response.json())
  .then((data) => {
    data.forEach((producto) => {
       const li = document.createElement("li");
      li.innerHTML = `
        <h2>${producto.id}</h2>
        <p>${producto.nombre}</p>
        <b>${producto.precio}</b>
        <hr />
      `;
       lista.append(li);
     });
   });