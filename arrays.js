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




