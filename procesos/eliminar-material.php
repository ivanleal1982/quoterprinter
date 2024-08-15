<?php

include("../database.php");

if(isset($_POST['id'])){

    $id=$_POST['id'];
    $query ="DELETE FROM materiales WHERE id_material=$id";
    $result = mysqli_query($connection,$query);
    if(!$result){
        die('Query Failed') . mysqli_error();
    }
 
    echo "Borrado el Material Seleccionado";
    
}

?>