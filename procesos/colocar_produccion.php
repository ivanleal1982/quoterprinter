<?php

include("../database.php");
date_default_timezone_set('America/Caracas');
$fechaHoraActual = date('Y-m-d H:i:s');

if(isset($_GET['id_cotizacion'])){

    $id=$_GET['id_cotizacion'];
    $query ="UPDATE cotizaciones,calculo_cotizacion SET cotizaciones.estatus=1,calculo_cotizacion.estatus=1,fecha_produccion='$fechaHoraActual' WHERE cotizaciones.id_cotizacion=calculo_cotizacion.id_cotizacion AND cotizaciones.id_cotizacion=$id";
    //echo $query;
 $result = mysqli_query($connection,$query);
    if(!$result){
        die('Query Failed') . mysqli_error();
    }
   // $json_string = json_encode($query);
     //   echo $json_string;
/*
    $id=$_POST['id'];
    $query ="DELETE FROM cotizaciones WHERE id_cotizacion=$id";
    $result = mysqli_query($connection,$query);
    if(!$result){
        die('Query Failed') . mysqli_error();
    }
    $query ="DELETE FROM calculo_cotizacion WHERE id_cotizacion=$id";
    $result = mysqli_query($connection,$query);
    if(!$result){
        die('Query Failed') . mysqli_error();
    }
    echo "Borrada la Cotizacion";
    */

}

?>