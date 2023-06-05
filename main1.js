 let edad = Number(prompt("Ingrese su edad"));

 edad < 18 ? console.log("Debe dirigirse a la seccion English for Teens") : edad < 11 ?  console.log ("Debe dirigirse a la seccion Enlish for Kids") : console.log("Debe dirigirse a la seccion English for Adults");


// DOM

 let div = document.getElementById("formulario");
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
  alert("3415760103");
   };


 wpboton.addEventListener("click", respuesta);

  const usuario = {
   nombre: "victoria",
   edad: 20,
 };

 const registro = usuario.edad >= 18 && new Date();

console.log(registro);
console.log(usuario?.nombre || "El usuario no existe");

 let formulario = document.getElementById("formulario");
 formulario.addEventListener("keydown", () => console.log("keydown"));

 formulario.addEventListener("submit", (e) => {
  e.preventDefault();
 if (usuario === "victoria") {
  saludo.innerHTML = "<h1>Bienvenida Victoria </h1>";
 } else {saludo.innerHTML = "<h1>Bienvenid@ nuevo usuario</h1>";}
   let inputs = e.target.children;
    console.log(inputs[0].value);
    console.log(inputs[1].value);
 });


 console.log(localStorage);

 localStorage.setItem("nombre", "Victoria");
 localStorage.setItem("valor", "true");


 console.log(sessionStorage); 

 sessionStorage.setItem("nombre", "Victoria");
 sessionStorage.setItem("valor", "true");



 dejar.addEventListener("click", () => {
     localStorage.clear();
     alert("Dejaste de cursar");
     location.reload();
   });

