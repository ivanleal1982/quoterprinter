<?php

include("../database.php");
$query = "SELECT * FROM vendedor";
//echo $query;
if(isset($_POST['id']))
$query .= " WHERE id_vendedor=" . $_POST['id'];
$query .= " ORDER BY nombre_vendedor";

$result = mysqli_query($connection,$query);

    if(!$result){
        die('Query Failed') . mysqli_error($connection);
    }

    $json = array();
        while ($row = mysqli_fetch_array($result)){
            
            $json[]=array(
                'id_vendedor' => $row['id_vendedor'],
                'nombre_vendedor' => $row['nombre_vendedor'],
                'telefono' => $row['telefono'],
                'email' => $row['email']
            );
        }
        $json_string = json_encode($json);
        echo $json_string;
        //echo $query;
?>