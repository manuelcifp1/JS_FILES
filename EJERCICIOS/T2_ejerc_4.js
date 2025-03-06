function aleatorio (min, max) {
  return  Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(aleatorio(0, 10));

console.log(aleatorio(1, 100));

console.log(aleatorio(10, 20));

