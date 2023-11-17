document.getElementById('verificarBtn').addEventListener('click', function () {
    let edad = prompt('Por favor, ingrese su edad:');
    
    if (edad !== null && !isNaN(edad)) {
        edad = parseInt(edad);

        if (edad >= 18) {
            window.location.href = 'index.html'; // Redirige a la página de retrobot si es mayor de 13 años
        } else {
            document.getElementById('resultado').innerText = 'Lo siento, debes ser mayor de 18 años para acceder.';
        }
    } else {
        alert('Por favor, ingrese una edad válida.'); // si ingresa una letra o algo raro le saldra este carte 
    }
});
