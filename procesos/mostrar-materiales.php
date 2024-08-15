<?php

include("../database.php");
$query = "SELECT * FROM materiales,tipo_material WHERE tipo=id_tipo_material";
//echo $query;
if(isset($_POST['id']))
$query .= " AND id_material=" . $_POST['id'];
$query .= " ORDER BY tipo_material,material";

$result = mysqli_query($connection,$query);

    if(!$result){
        die('Query Failed') . mysqli_error($connection);
    }

    $json = array();
        while ($row = mysqli_fetch_array($result)){
            
            $json[]=array(
                'id_material' => $row['id_material'],
                'material' => $row['material'],
                'ancho' => $row['ancho'],
                'largo' => $row['largo'],
                'costo' => $row['costo'],
                'id_tipo_material' => $row['id_tipo_material'],
                'tipo_material' => $row['tipo_material']
            );
        }
        $json_string = json_encode($json);
        echo $json_string;
        //echo $query;
?>