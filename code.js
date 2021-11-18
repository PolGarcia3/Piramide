function triangulo() {
    if (document.getElementById("numero").value == 0 || document.getElementById("numero").value < 0) {
        alert('Introduce un numero valido');
    } else {
        let triangulo = document.getElementById('numero').value;
        console.log('#'.repeat(triangulo));
        for (let index = 1; index <= triangulo; index++) {
            document.getElementById("triangulo").innerHTML = document.getElementById("triangulo").innerHTML + '<br>' + '#'.repeat(index);

        }
    }
}