<?php

include("../database.php");
$query = "SELECT * FROM calculo_materiales,tipo_material WHERE tipo=id_tipo_material";
/*if(isset($_GET['tipo']))
{
$tipo = $_GET['tipo'];
$tipo = (int)$tipo;
$query .=" WHERE tipo=" . $tipo;
}
*/
$result = mysqli_query($connection,$query);

    if(!$result){
        die('Query Failed') . mysqli_error($connection);
    }

    $json = array();
        while ($row = mysqli_fetch_array($result)){

            $json[]=array(
                'id_material' => $row['id_material'],
                'tipo' => $row['tipo'],
                'material' => $row['material'],
                'total' => $row['total']
            );

        }
        $json_string = json_encode($json);
        echo $json_string;
?>