const formulario = document.querySelector("#enlaces");
formulario.addEventListener("submit", validarFormulario)

function validarFormulario(e){
    e.preventDefault();
    var enlaceJugador1 = document.querySelector("#enlace-jugador1").value;
    var enlaceJugador2 = document.querySelector("#enlace-jugador2").value;
    var nombreJuez1 = document.querySelector("#nombre-juez1").value;
    var enlaceJuez1 = document.querySelector("#enlace-juez1").value;
    var nombreJuez2 = document.querySelector("#nombre-juez2").value;
    var enlaceJuez2 = document.querySelector("#enlace-juez2").value;
    if (enlaceJugador1 == "" ){
        document.getElementById("enlace-jugador1").focus();
        alert('Favor de llenar los campos faltantes >:v ');
    } else if (enlaceJugador2 == ""){
        document.getElementById("enlace-jugador2").focus();
        alert('Favor de llenar los campos faltantes >:v ');
    } else if (nombreJuez1 == "") {
        document.getElementById("nombre-juez1").focus();
        alert('Favor de llenar los campos faltantes >:v ');
    } else if (enlaceJuez1 == "") {
        document.getElementById("enlace-juez1").focus();
        alert('Favor de llenar los campos faltantes >:v ');
    } else if (nombreJuez2 == "") {
        document.getElementById("nombre-juez2").focus();
        alert('Favor de llenar los campos faltantes >:v ');
    } else if (enlaceJuez2 == "") {
        document.getElementById("enlace-juez2").focus();
        alert('Favor de llenar los campos faltantes >:v ');
    }

    var enlace1 = enlaceJugador1.toString() 

    console.log(enlace1);


    
}

console.log(enlace1);



/*document.querySelector('form')
    .addEventListener('submit', e => {
        e.preventDefault()
        const data = Object.fromEntries(
            new FormData(e.target)
        )
        alert(JSON.stringify(data))
    })

jugador1.src = "https://vdo.ninja/?view=qqUMXJh&solo&room=prueba";

jugador1.onload = function () { // start polling shortly after we connect
    setInterval(function () {
        jugador1.contentWindow.postMessage({ "getDetailedState": true }, "*");  // get details every second
    }, 1000);
}
//document.body.appendChild(IFRAMEWINDOW); // add the vdo.ninja element to the page, so its active/visible

window.addEventListener("message", (e) => {
    if (e.source != jugador1.contentWindow) { return } // only listen for vdo.ninja events
    console.log(e.data);// print the messages inbound to the console log
});*/
