<?php

include("../database.php");
$query = "SELECT * FROM roles";
//echo $query;
//if(isset($_GET['idcliente']))
//$query .= ",vendedor WHERE vendedor=id_vendedor AND id_cliente=" . $_GET['idcliente'];

$result = mysqli_query($connection,$query);

    if(!$result){
        die('Query Failed') . mysqli_error($connection);
    }

    $json = array();
        while ($row = mysqli_fetch_array($result)){
            
            $json[]=array(
                'id_rol' => $row['id_rol'],
                'nombre' => $row['nombre_rol'],
                'tipo_rol' => $row['tipo_rol']
            );
        }
        $json_string = json_encode($json);
        echo $json_string;
?>