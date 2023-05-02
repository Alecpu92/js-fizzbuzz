// elemento contenitore
const contenitore = document.getElementById("contenitore");
console.log(contenitore);
const fizzbuzz = document.getElementById("FizzBuzz")
const fizz = document.getElementById("Fizz")
const buzz = document.getElementById("Buzz")

// operazioni per quadrati da 1 a 100
for (let i = 1; i <= 100; i++) {

    for (let i = 1; i < 101; i++) {
        if (i % 15 == 0) console.log("FizzBuzz");
        else if (i % 3 == 0) console.log("Fizz");
        else if (i % 5 == 0) console.log("Buzz");
        else console.log(i);
    }
    
    // creazione quadrato
     const quadrato = document.createElement('span')

    // classe per ogni quadrato
     quadrato.classList.add("square");

    // valore quadrato
     quadrato.append(i);

    // unione quadrato con contenitore
     contenitore.append(quadrato);

     }