function EventoAstronomico(nombre, fechaInicio, duracion) {
    this.nombre = nombre;
    this.fechaInicio = fechaInicio instanceof Date ? fechaInicio : new Date();
    this.duracion = duracion;

    this.fechaFin = function() {
        let msPorDia = 24 * 60 * 60 * 1000;
        return new Date(this.fechaInicio.getTime() + this.duracion * msPorDia);
    }

    this.diasRestantes = function() {
        let msRestantes = this.fechaFin() - new Date();
        return Math.ceil(msRestantes / (1000 * 60 * 60 * 24));
    }

    this.aleatorioImpactoSolar = function() {
        let aleatorio = Math.random() * 10;
        let conDosDecimales = Number(aleatorio.toFixed(2));

        if (conDosDecimales <= 3) return `${conDosDecimales} (Actividad baja)`;
        else if (conDosDecimales <= 6) return `${conDosDecimales} (Actividad media)`;
        else return `${conDosDecimales} (Actividad alta)`;
    }
}

let lluviaMeteoritos = new EventoAstronomico("Lluvia de meteoritos", new Date(), 20);

console.log("📅 Fecha fin: " + lluviaMeteoritos.fechaFin().toDateString());
console.log("⏳ Días restantes: " + lluviaMeteoritos.diasRestantes());
console.log("☀️ Probabilidad de impacto solar: " + lluviaMeteoritos.aleatorioImpactoSolar());
