<?php

include("../database.php");
$query = "SELECT * FROM clientes,vendedor WHERE vendedor=id_vendedor";
//echo $query;
if(isset($_POST['id']))
$query .= " AND id_cliente=" . $_POST['id'];
$query .= " ORDER BY nombre";
//echo $query;

$result = mysqli_query($connection,$query);

    if(!$result){
        die('Query Failed') . mysqli_error($connection);
    }

    $json = array();
        while ($row = mysqli_fetch_array($result)){
            
            $json[]=array(
                'id_cliente' => $row['id_cliente'],
                'nombre' => $row['nombre'],
                'rif_cliente' => $row['rif_cliente'],
                'direccion' => $row['direccion'],
                'telefono1' => $row['telefono1'],
                'telefono2' => $row['telefono2'],
                'email' => $row['email'],
                'nombre_vendedor' => $row['nombre_vendedor'],
                'vendedor' => $row['vendedor']
            );
        }
        $json_string = json_encode($json);
        echo $json_string;
        //echo $query;
?>