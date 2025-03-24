/*📘 Dado un array de empleados, usa .map() para:

* Calcular el salario total mensual (salario * horasTrabajadas).

* Añadir una propiedad estadoLaboral:

    - Si activo es true, poner "En plantilla"

    - Si no, poner "Baja" */

    let empleados = [
        { nombre: "Laura", apellido: "Gómez", salario: 15, horasTrabajadas: 160, activo: true },
        { nombre: "Pablo", apellido: "Reyes", salario: 12.5, horasTrabajadas: 100, activo: false },
        { nombre: "Lucía", apellido: "Cano", salario: 14, horasTrabajadas: 140, activo: true }
      ];

let empleadosActualizados = empleados.map(empleado => {
    
    return {
        ...empleado,
        salarioTotalMensual: empleado.salario * empleado.horasTrabajadas,
        estadoLaboral: empleado.activo ? "En plantilla" : "Baja"
    };
});

console.log(empleadosActualizados);