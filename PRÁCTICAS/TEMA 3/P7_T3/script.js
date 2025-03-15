function comprobarDni(dniUsuario) {
    let numeroDni = dniUsuario.slice(0, 8);
    let letraDniUsuario = dniUsuario.slice(8, 10);               
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let pos = numeroDni % 23;
    let letraDni = letras.charAt(pos);
    console.log(letraDni);                
    if (letraDniUsuario == letraDni) {
        return true;
    } else {
        return false;
    } 
}

function jugarDni() {
    
        let dniUsuario = prompt("Dame un DNI.");
        dniUsuario = dniUsuario.replace(" ", "");
        dniUsuario = dniUsuario.toUpperCase();

        
        cantidadElementos = dniUsuario.length;
        
        if (cantidadElementos != 9) {
            alert("Debe tener 9 caracteres.");
            jugarDni();
        } else if (cantidadElementos == 0) {
            alert("Tienes que escribir algo.");
            jugarDni();
        }

        comprobarDni(dniUsuario);
        setTimeout(() => {            
        if (comprobarDni(dniUsuario) == true) {
            document.write("<h2>El DNI es correcto</h2>");
        } else  {
            setTimeout(() => {
                document.write("<h2>El DNI no es correcto</h2>");
            }, 100);
            jugarDni();
        }
            
        }, 500);     
        
}

