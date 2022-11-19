// Resolução desafio 1

function enfrentarDragoes() {
    do {
        var balas = +prompt("Quantidade de balas: ");
        var dragoes = +prompt("Quantidade de dragões");
        if (Number.isInteger(balas) == false || Number.isInteger(dragoes) == false) {
            alert("Preciso que você digite números inteiros em todos os campos!");
        }
    }
    while (Number.isInteger(balas) == false || Number.isInteger(dragoes) == false)

    if ((balas / 2) < dragoes) {
        alert("O herói falha ao derrotar os dragões!");

    } else if (dragoes == 0) {
        alert("Bem... Na verdade não havia nenhum dragão.");
    } else {
        alert("O herói derrota os dragões com sucesso!");
    }

}

// Resolução desafio 2

function leitura() {

    let numeros = [];
    let size = +prompt("Digite o valor de tamanho do array.")

    if (size <= 0 || Number.isInteger(size) == false) {
        alert("Você digitou um valor não aceitável.");
    } else {
        for (var i = 1; i <= size; i++) {
            do {
                aux = +prompt("Digite o " + i + "° valor do array.");
            }
            while (Number.isInteger(aux) == false);
            numeros.push(aux)
        }

        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] > numeros[i + 1]) {
                var valida = 1;
                break;
            }
        }
        if (valida == 1) {
            alert("O array informado foi: " + numeros + "\nLogo não é crescente");
        } else {
            alert("O array informado foi: " + numeros + "\nLogo é crescente");

        }
    }

}

// Modal desafio 3
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
