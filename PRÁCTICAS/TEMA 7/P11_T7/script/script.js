let texto = document.getElementsByTagName("h1")[0];

document.addEventListener("keydown", function(e) {
    if(e.altKey && e.key == "F12") {
        e.preventDefault();
        document.body.style.cssText = "background-image: url('https://picsum.photos/1920/1080'); background-size: cover;";
        texto.innerHTML = "<span style='color: red;'>Aquí tienes tu nueva imagen</span>";
    }
});

