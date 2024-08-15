<?php

include("../database.php");
$query = "SELECT * FROM usuarios,roles WHERE tipo_rol=rol_usuario";
//echo $query;
if(isset($_POST['id']))
$query .= " AND id_usuario=" . $_POST['id'];
$query .= " ORDER BY nombre";
//echo $query;

$result = mysqli_query($connection,$query);

    if(!$result){
        die('Query Failed') . mysqli_error($connection);
    }

    $json = array();
        while ($row = mysqli_fetch_array($result)){
            
            $json[]=array(
                'id_usuario' => $row['id_usuario'],
                'nombre' => $row['nombre'],
                'email' => $row['email'],
                'clave' => $row['clave'],
                'cargo' => $row['cargo'],
                'rol_usuario' => $row['rol_usuario'],
                'nombre_rol' => $row['nombre_rol']
            );
        }
        $json_string = json_encode($json);
        echo $json_string;
        //echo $query;
?>
