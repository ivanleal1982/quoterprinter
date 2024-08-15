<?php

include("../database.php");
$query = "SELECT * FROM clientes";
$result = mysqli_query($connection,$query);

    if(!$result){
        die('Query Failed') . mysqli_error($connection);
    }

    $json = array();
        while ($row = mysqli_fetch_array($result)){
            $json[]=array(
                'rif_cliente' => $row['rif_cliente'],
                'nombre' => $row['nombre'],
                'direccion' => $row['direccion'],
                'telefono1' => $row['telefono1'],
                'telefono2' => $row['telefono2'],
                'email' => $row['email'],
                'vendedor' => $row['vendedor']
            );
        }
        $json_string = json_encode($json);
        echo $json_string;
?>