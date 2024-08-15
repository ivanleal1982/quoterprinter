<?php

include("../database.php");

if(isset($_POST['id'])){

    $id=$_POST['id'];
    $query ="DELETE FROM usuarios WHERE id_usuario=$id";
    $result = mysqli_query($connection,$query);
    if(!$result){
        die('Query Failed') . mysqli_error();
    }
 
    echo "Eliminado el Usuario Seleccionado";
    
}

?>