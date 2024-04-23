<<<<<<< HEAD



/*
function getAtmotubeInfo() {
    fetch('https://api.atmotube.com/v2/devices/CB:D7:7F:F9:6A:0A/current')
        .then(response => response.json())
        .then(data => {
            var temperature = data.sensors.temperature;
            var humidity = data.sensors.humidity;
            var co2 = data.sensors.co2;
            var voc = data.sensors.voc;

            document.getElementById("temperature").innerText = temperature;
            document.getElementById("humidity").innerText = humidity;
            document.getElementById("co2").innerText = co2;
            document.getElementById("voc").innerText = voc;
        })
        .catch(error => console.error('Error fetching Atmotube info:', error));
}

window.onload = function() {
    getAtmotubeInfo();
    setInterval(getAtmotubeInfo, 300000); // Update every 5 minutes
};*/




// fUNCION CALCULAR CALORIAS
function calcularCalorias() {
    var edad = parseInt(document.getElementById('edad').value);
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseInt(document.getElementById('altura').value);
    var actividad = parseFloat(document.getElementById('actividad').value);
    var sexo = parseInt(document.getElementById('sexo').value); // Obtener el sexo del usuario

    // Fórmula para calcular las calorías según la actividad y el sexo
    var mantenimiento;
    if (sexo === 1) { // Hombre
        mantenimiento = Math.round((10 * peso + 6.25 * altura - 5 * edad + 5) * actividad);
    } else { // Mujer
        mantenimiento = Math.round((10 * peso + 6.25 * altura - 5 * edad - 161) * actividad);
    }

    var perderPeso = mantenimiento - 500; // Para perder peso
    var ganarPeso = mantenimiento + 500; // Para ganar peso

    var resultado = "<p>Perder peso: " + perderPeso + " a " + (perderPeso + 100) + " kcal</p>";
    resultado += "<p>Mantener peso: " + mantenimiento + " kcal</p>";
    resultado += "<p>Ganar peso: " + ganarPeso + " a " + (ganarPeso + 100) + " kcal</p>";

    document.getElementById('resultado').innerHTML = resultado;
}
=======



/*
function getAtmotubeInfo() {
    fetch('https://api.atmotube.com/v2/devices/CB:D7:7F:F9:6A:0A/current')
        .then(response => response.json())
        .then(data => {
            var temperature = data.sensors.temperature;
            var humidity = data.sensors.humidity;
            var co2 = data.sensors.co2;
            var voc = data.sensors.voc;

            document.getElementById("temperature").innerText = temperature;
            document.getElementById("humidity").innerText = humidity;
            document.getElementById("co2").innerText = co2;
            document.getElementById("voc").innerText = voc;
        })
        .catch(error => console.error('Error fetching Atmotube info:', error));
}

window.onload = function() {
    getAtmotubeInfo();
    setInterval(getAtmotubeInfo, 300000); // Update every 5 minutes
};*/




// fUNCION CALCULAR CALORIAS
function calcularCalorias() {
    var edad = parseInt(document.getElementById('edad').value);
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseInt(document.getElementById('altura').value);
    var actividad = parseFloat(document.getElementById('actividad').value);
    var sexo = parseInt(document.getElementById('sexo').value); // Obtener el sexo del usuario

    // Fórmula para calcular las calorías según la actividad y el sexo
    var mantenimiento;
    if (sexo === 1) { // Hombre
        mantenimiento = Math.round((10 * peso + 6.25 * altura - 5 * edad + 5) * actividad);
    } else { // Mujer
        mantenimiento = Math.round((10 * peso + 6.25 * altura - 5 * edad - 161) * actividad);
    }

    var perderPeso = mantenimiento - 500; // Para perder peso
    var ganarPeso = mantenimiento + 500; // Para ganar peso

    var resultado = "<p>Perder peso: " + perderPeso + " a " + (perderPeso + 100) + " kcal</p>";
    resultado += "<p>Mantener peso: " + mantenimiento + " kcal</p>";
    resultado += "<p>Ganar peso: " + ganarPeso + " a " + (ganarPeso + 100) + " kcal</p>";

    document.getElementById('resultado').innerHTML = resultado;
}
>>>>>>> 09a89df851a0aa9aaea4ac96a8a97e744e91a87e
