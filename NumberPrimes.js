
const main = (params) => {
  function primeNumber(num) {
    for (var divisor = 2; divisor < num; divisor++) 
    if (num % divisor == 0) return false;
    return true;
  }
  
  var numberMax = 1000;
  let primesNumber = []
  
  for (var i = 2; i < numberMax; i++) {
    if (primeNumber(i)) {
      primesNumber.push(i)
    }
  }

  const sumPrimeNumbers = primesNumber.reduce((acc, valor) => {
    let numeroAcumulado = acc + valor;
   return numeroAcumulado;
  }, 0)

  console.log(sumPrimeNumbers);

  
}

main()