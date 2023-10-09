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

    //var datosEnlaces = [ enlaceJugador1,enlaceJugador2];
    var datosEnlaces = { enlaceJugador1, enlaceJugador2, nombreJuez1 };
    //var datosEnlaces = { jugador1: enlaceJugador1, jugador2: enlaceJugador2 };

    localStorage.setItem("datosE", JSON.stringify(datosEnlaces));
    console.log(datosEnlaces);


    //var enlace1 = enlaceJugador1.toString() 

    console.log(enlace1);


    
}

console.log(enlace1);

// codigo HTML : < script src = "./formulario.js" ></script>

/*$("#enlaces").click(function(){
    $.ajax({
        url: "index.php",
        type: "POST",
        data: { 
            enlaceJugador1 : $('#enlaceJugador1').val(),
            enlaceJugador2 : $('#enlaceJugador2').val() 
        },
        success: function(datosEnlaces){
            //$('#datosEn').html(datosEnlaces);
            localStorage.setItem("datosE", JSON.stringify(datosEnlaces));
            console.log(datosEnlaces);


        } 
    });
});*/
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


    /*const claves = enlace || [];

    claves = Object.key(enlace);*/
  
    /*let enlace = enla.split(',');
 
     let arr = [];
         for (let i of enlace) {
             arr.push(i);
         }
         console.log(arr); */

   
   /* enlaces = JSON.parse(localStorage.getItem("datosE"));

    enlaces.forEach(element =>{
        let elements = document.getElementById("elements");
        let div = document.createElement("div");
        div.innerHTML = element.jugador1;
        elements.appendChild(div);
    });*/

   /* const enl1 = enlace || [];

    console.log(enl1 + 'd')

    enl1.array.forEach(element => {
        console.log(element+'c');
    });*/


//  var enlace1 = document.querySelector("enlaceJugador1").value;

        //var separado = e1.split();
    
    /*    for (let i = 19; i < e1.length-1; i++) {
        let separado = e1[i];
        var final = JSON.stringify(separado);
    
        var fin = "";
        fin = JSON.stringify(fin) + final  ;
        
        console.log(fin)
    }*/

    //console.log('var'+e1);
    
    //console.log(Object.values(e1));
