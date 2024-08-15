<?php

include("../database.php");
$query = "SELECT * FROM cotizaciones";
if(isset($_GET['idempresa']))
{
$idempresa = $_GET['idempresa'];
//$tipo = (int)$tipo;
$query .=" WHERE estatus=1 AND id_cliente=" . $idempresa . " ORDER BY fecha DESC, id_cotizacion DESC;";
}

$result = mysqli_query($connection,$query);

    if(!$result){
        die('Query Failed') . mysqli_error($connection);
    }

    $json = array();
        while ($row = mysqli_fetch_array($result)){

 
            $json[]=array(
                'id_cotizacion' => $row['id_cotizacion'],
                'id_cliente' => $row['id_cliente'],
                'fecha_produccion' => $row['fecha_produccion']
             );

        }
        $json_string = json_encode($json);
        echo $json_string;
?>