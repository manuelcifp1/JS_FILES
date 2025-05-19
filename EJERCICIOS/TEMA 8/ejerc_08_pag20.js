/*Ejercicio 08.- Elimina el throw del Código 08 y usa en su lugar resolver y rechazar
 comparando números. Comprueba que pasaría si debajo de console.log("Me ha ido mal");
  pusiéramos console.log(miError.message); */
var promesa = new Promise((resolve, reject)=>{
  let n1=3; let n2=2;
  if(n1==n2)
  resolve ("Ha ido bien");
  else reject (new Error("Son distintos"));
});
promesa.then((respuesta)=>{
  console.log(respuesta);
}).catch((miError)=>{
  console.log("Me ha ido mal");//Esto muestra "Me ha ido mal"  
  console.log(miError.message);//Esto muestra "Son distintos"
  //Se muestran los dos mensajes de error.
});