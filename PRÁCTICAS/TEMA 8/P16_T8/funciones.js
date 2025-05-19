export function borrarTodasCookies() {
    const cookies = document.cookie.split(";");

    for(let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let partes = cookie.split("=");
        let nombre = partes[0].trim();

        document.cookie = nombre += "=; max-age=0; path=/";
        alert("Todas las cookies han sido borradas");
    }
}

export function obtenerCookie(nombre) {
      const cookies = document.cookie.split(";");

      for (let i = 0; i < cookies.length; i++) {
        const parte = cookies[i].trim();
        if (parte.startsWith(nombre + "=")) {
          return parte.split("=")[1];
        }
      }
      return null;
}

export function incrementarVisitas() {
      let visitas = obtenerCookie("visitas");

      if (visitas === null) {
        visitas = 1;
      } else {
        visitas = parseInt(visitas) + 1;
      }

      document.cookie = "visitas=" + visitas + "; max-age=31536000; path=/"; // dura 1 año
      document.getElementById("visitas").textContent = "Número de visitas: " + visitas;
}

