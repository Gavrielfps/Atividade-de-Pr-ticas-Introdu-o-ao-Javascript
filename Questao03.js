const numeros = [0, 2, 4, 5, 7, 8, 10, 12, 15];

const newArrayImpar = numeros.filter((numero) => numero % 2  !== 0);
console.log("Array de numeros ímpares: ", newArrayImpar);