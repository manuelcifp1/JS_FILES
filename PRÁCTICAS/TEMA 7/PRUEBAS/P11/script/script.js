
let texto = document.getElementsByTagName("h2")[0];

document.addEventListener("keydown", (e) => {
    if(e.altKey && e.key === "F12") {
        texto.innerHTML = "<span style='color: red'>Aquí tiene su imagen</span>";
        document.body.style.backgroundImage = "url('https://picsum.photos/1920/1080')";
    }
});

/*ERRORES COMUNES:
- CLICK EN LUGAR DE KEYDOWN */