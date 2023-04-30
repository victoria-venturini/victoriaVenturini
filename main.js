
 let edad = Number(prompt("ingrese su edad"));

 if (edad >=18) {
     alert("Debe dirigirse a la seccion English for Adults");
 }else if (edad <= 12){
     alert("Debe dirigirse a la seccion Enlish for Kids");
 }else {
     alert("Debe dirigirse a la seccion English for Teens");
 }

 function nivelDeIngles() {
    let nombre = prompt("ingrese su nombre");      
    let nivel = prompt("ingrese su nivel de ingles");
     alert(`${nombre} + ${nivel}`);
     return;
 }
nivelDeIngles()

for (let curso = 1; curso <= 3; curso++) {
 let nombre = prompt("ingrese su nombre");
     alert (`curso: ${curso} nombre: ${nombre}`);
     if (nombre == true) {
        break;
     }
 }
 alert ("se acabaron los cursos")