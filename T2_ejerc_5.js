function aleatorio () {
   let base = Math.floor(Math.random() * 100) + 1;
    if ((base % 2 == 0)) {
        return base;
    } else {
        return base++;
    }
  }