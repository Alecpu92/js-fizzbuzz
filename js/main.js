// elemento contenitore
const contenitore = document.getElementById("contenitore");
console.log(contenitore)

// operazioni per quadrati da 1 a 100
for (let i = 1; i <= 100; i++) {

    // creazione quadrato
    const quadrato = document.createElement('span')

    // classe per ogni quadrato
    quadrato.classList.add("square");

    // valore quadrato
    quadrato.append(i)

    // unione quadrato con contenitore
    contenitore.append(quadrato)
    }