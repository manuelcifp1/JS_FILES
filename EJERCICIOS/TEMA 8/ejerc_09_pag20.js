/*Ejercicio 09.- Provoquemos el error. Modifica el código anterior para que
 aparezca un error recogido y comunicado por el método catch. */

var promesa = new Promise(function(resolver, rechazar){
    let n=0;
    let intervalo = setInterval(function(){
        n++;
        if(n==10){
           resolver("Han pasado 10 segundos");           
           clearInterval(intervalo);
        }else{
            rechazar(new Error("No han pasado 10 segundos"));
        } },1000);        
     });
promesa.then(function(mensaje){
console.log(mensaje);
}).catch((miError) => {
    console.log(miError.message);
});