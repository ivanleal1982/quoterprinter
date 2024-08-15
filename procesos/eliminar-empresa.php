<?php

include("../database.php");

if(isset($_POST['id'])){

    $id=$_POST['id'];
    $query ="DELETE FROM clientes WHERE id_cliente=$id";
    $result = mysqli_query($connection,$query);
    if(!$result){
        die('Query Failed') . mysqli_error();
    }
 
    echo "Eliminada la Empresa Seleccionada";
    
}

?>