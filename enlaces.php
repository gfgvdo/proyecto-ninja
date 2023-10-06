<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        
        $enlaceJugador1 = $_POST["enlaceJugador1"];
        $enlaceJugador2 = $_POST["enlaceJugador2"];
        //$nombre1 = $_POST["nombre-juez1"];
        //$enlace3 = $_POST["enlace-juez1"];
        //$nombre2 = $_POST["nombre-juez2"];
        //$enlace4 = $_POST["enlace-juez2"];
            
        echo '<input value='.$enlaceJugador1.' id="enlaceJugador1">';
        echo '<input value='.$enlaceJugador2.' id="enlaceJugador2">';
    }    

?>