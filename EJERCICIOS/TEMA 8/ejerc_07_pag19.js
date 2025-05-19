var promesa = new Promise((resolve, reject)=>{  
  let n1=2; let n2=5;
  if(n1==n2) resolve("¡Son iguales!");
  else reject(Error("Distintos")); });
promesa.then((respuesta)=>{
  console.log(respuesta);
}).catch((miError)=>{
  console.log(miError.message);
}).finally(()=> {
  console.log("Estamos comparando n1 y n2");
});