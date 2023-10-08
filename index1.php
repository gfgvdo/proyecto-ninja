<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        
        $enlaceJugador1 = $_POST["enlaceJugador1"];
        $enlaceJugador2 = $_POST["enlaceJugador2"];
        //$nombre1 = $_POST["nombre-juez1"];
        //$enlace3 = $_POST["enlace-juez1"];
        //$nombre2 = $_POST["nombre-juez2"];
        //$enlace4 = $_POST["enlace-juez2"];
            
        echo '<input value="'.$enlaceJugador1.'" id="enlaceJugador1"><br>';
        echo '<input value="'.$enlaceJugador2.'" id="enlaceJugador2">';
    }    

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/style.css">
    <link rel="stylesheet" href="assets/reset.css">
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Montserrat:wght@300&display=swap"
        rel="stylesheet">


    <title>Green</title>
</head>
<body>
    

    <h1 class="titulo">Nombre de la dinamica</h1>

        
    <div class="container">
            
        <div class="div-column">
            <div class="div-row">

                <div class="card">
                    <iframe id="jugador1"></iframe>
                </div>

                <div class="card">
                    <iframe id="jugador2"></iframe>
                </div>

            </div>

            <div class="div-row">

                <div class="card">
                    <iframe id="juez1"></iframe>
                    <div class="container-card">
                        <h4><b>John Doe</b></h4>
                    </div>
                </div>

                <div class="card">
                    <iframe id="juez2"></iframe>
                    <div class="container-card">
                        <h4 id="nombre-juez2">a</h4>
                    </div>
                </div>

            </div>
        </div>

        <div class="div-column">
            <button class="btn_jugador" >Stop</button>
            <button class="btn_jugador" >Stop</button>
        </div>

        
    <div id="datosEn">a</div>
        
    </div>

</body>

<script>
    var jugador1 = document.getElementById("jugador1"); // create VDO.Ninja in an IFRAME
var jugador2 = document.getElementById("jugador2"); // create VDO.Ninja in an IFRAME
var juez1 = document.getElementById("juez1"); // create VDO.Ninja in an IFRAME
var juez2 = document.getElementById("juez2"); // create VDO.Ninja in an IFRAME

    jugador1.src = enlace1;

jugador1.onload = function () { // start polling shortly after we connect
    setInterval(function (e) {
        jugador1.contentWindow.postMessage({ "getDetailedState": true }, "*");  // get details every second
    }, 1000);
}
//document.body.appendChild(IFRAMEWINDOW); // add the vdo.ninja element to the page, so its active/visible

window.addEventListener("message", (e) => {
    if (e.source != jugador1.contentWindow) { return } // only listen for vdo.ninja events
    console.log(e.data);// print the messages inbound to the console log
});




jugador2.src = "https://vdo.ninja/?view=JYtstTC&solo&room=prueba";

jugador2.onload = function () { // start polling shortly after we connect
    setInterval(function () {
        jugador2.contentWindow.postMessage({ "getDetailedState": true }, "*");  // get details every second
    }, 1000);
}

window.addEventListener("message", (e) => {
    if (e.source != jugador2.contentWindow) { return } // only listen for vdo.ninja events
    console.log(e.data);// print the messages inbound to the console log
});

juez1.src = "https://vdo.ninja/?view=tcEUmRM";

jugador1.onload = function () { // start polling shortly after we connect
    setInterval(function () {
        juez1.contentWindow.postMessage({ "getDetailedState": true }, "*");  // get details every second
    }, 1000);
}

window.addEventListener("message", (e) => {
    if (e.source != juez1.contentWindow) { return } // only listen for vdo.ninja events
    console.log(e.data);// print the messages inbound to the console log
});

juez2.src = "https://vdo.ninja/?view=tcEUmRM";

juez2.onload = function () { // start polling shortly after we connect
    setInterval(function () {
        jugador1.contentWindow.postMessage({ "getDetailedState": true }, "*");  // get details every second
    }, 1000);
}

window.addEventListener("message", (e) => {
    if (e.source != juez2.contentWindow) { return } // only listen for vdo.ninja events
    console.log(e.data);// print the messages inbound to the console log
});

</script>
    

</html>

