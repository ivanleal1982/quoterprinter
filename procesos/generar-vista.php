<?php

include("../database.php");

if(isset($_POST['utilidad']) && isset($_POST['sobrante']) && isset($_POST['islr'])){

    //$id=$_POST['id'];
    
    
    $sobrante=$_POST['sobrante'];
    $islr=$_POST['islr'];
    $utilidad=$_POST['utilidad'];

    $querydrop ="DROP VIEW IF EXISTS calculo_materiales; ";
    $result1 = mysqli_query($connection,$querydrop);

    if(!$result1){
        die('Query Failed') . mysqli_error();
    }

    $query ="CREATE VIEW calculo_materiales AS SELECT id_material, tipo, materiales.material, (materiales.costo / (materiales.ancho * materiales.largo)) AS costo_unitario,";
    $query .="(((materiales.costo / (materiales.ancho * materiales.largo)) * $sobrante)+(materiales.costo / (materiales.ancho * materiales.largo))) AS sobrante,";
    $query .="((((materiales.costo / (materiales.ancho * materiales.largo)) * $sobrante)+(materiales.costo / (materiales.ancho * materiales.largo))) * $utilidad) AS utilidad,";
    $query .="(((materiales.costo / (materiales.ancho * materiales.largo)) * $sobrante)+(materiales.costo / (materiales.ancho * materiales.largo)))+((((materiales.costo / (materiales.ancho * materiales.largo)) * $sobrante)+(materiales.costo / (materiales.ancho * materiales.largo))) * $utilidad) AS subtotal,";
    $query .="(((((materiales.costo / (materiales.ancho * materiales.largo)) * $sobrante)+(materiales.costo / (materiales.ancho * materiales.largo))) * $utilidad) * $islr) AS islr,";
    $query .="((((materiales.costo / (materiales.ancho * materiales.largo)) * $sobrante)+(materiales.costo / (materiales.ancho * materiales.largo)))+((((materiales.costo / (materiales.ancho * materiales.largo)) * $sobrante)+(materiales.costo / (materiales.ancho * materiales.largo))) * $utilidad)) + ((((((materiales.costo / (materiales.ancho * materiales.largo)) * $sobrante)+(materiales.costo / (materiales.ancho * materiales.largo))) * $utilidad) * $islr)) AS total";
    $query .=" FROM materiales;";
    
    //echo $query;
  
    $result = mysqli_query($connection,$query);
    if(!$result){
        die('Query Failed') . mysqli_error();
    }
 
    echo "Calculo de Materiales Generada Satisfactoriamente";
    
}

?>