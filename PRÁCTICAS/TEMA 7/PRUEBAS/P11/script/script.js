const texto = document.getElementsByTagName("h2")[0];
//DOMINADA
document.addEventListener("keydown", (e) => {
    if(e.altKey && e.key == "F12") {        
        texto.innerHTML = "Aquí tiene su imagen";
        texto.style.color = "red";
        document.body.style.backgroundImage = "url('https://picsum.photos/1920/1080')";

    }
});