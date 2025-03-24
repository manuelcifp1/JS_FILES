/*Ejercicio 2: Aumentar salarios
📘 Tenés un array de empleados con nombre y salario. Usa forEach() para
 aumentar en un 10% todos los salarios, modificando directamente el array original. */

 let empleados = [
    { nombre: "Carlos", salario: 1000 },
    { nombre: "María", salario: 1200 },
    { nombre: "Tomás", salario: 1100 }
  ];

empleados.forEach(empleado => {
    empleado.salario = empleado.salario + (empleado.salario * 0.1);
});

console.log(empleados);