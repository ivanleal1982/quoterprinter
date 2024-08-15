<?php

include("../database.php");
$query = "SELECT * FROM calculo_cotizacion,cotizaciones";

if(isset($_GET['id_cotizacion']))
{
$id_cotizacion = $_GET['id_cotizacion'];
//$tipo = (int)$tipo;
$query .=" WHERE calculo_cotizacion.id_cotizacion=cotizaciones.id_cotizacion AND calculo_cotizacion.id_cotizacion=" . $id_cotizacion;
}


$result = mysqli_query($connection,$query);

    if(!$result){
        die('Query Failed') . mysqli_error($connection);
    }

    $json = array();
        while ($row = mysqli_fetch_array($result)){

        $subtotalmaterial=(float)$row['material']+(float)$row['productos']+(float)$row['laminado']+(float)$row['acabado']+(float)$row['otro'];
        $totalmaterial= $subtotalmaterial * $row['cantidad'];
        $totalimpresion=(float)$row['metros']*(float)$row['plotter'];

            $json[]=array(
                'id_calculo_cotizacion' => $row['id_calculo_cotizacion'],
                'id_cotizacion' => $row['id_cotizacion'],
                'id_cliente' => $row['id_cliente'],
                'fecha' => $row['fecha'],
                'fechaprod' => $row['fecha_produccion'],
                'cantidad' => $row['cantidad'],
                'estatus' => $row['estatus'],
                'material' => $row['material'],
                'ds_material' => $row['ds_material'],
                'productos' => $row['productos'],
                'ds_productos' => $row['ds_productos'],
                'laminado' => $row['laminado'],
                'ds_laminado' => $row['ds_laminado'],
                'acabado' => $row['acabado'],
                'ds_acabado' => $row['ds_acabado'],
                'otro' => $row['otro'],
                'ds_otro' => $row['ds_otro'],
                'cantotro' => $row['cantotro'],
               'plotter' => $row['plotter'],
                'ds_plotter' => $row['ds_plotter'],
                'ancho' => $row['ancho'],
                'alto' => $row['alto'],
                'metros' => $row['metros'],
                'subtotalmaterial' => number_format($subtotalmaterial, 2, '.', ','),
                'totalmaterial' => number_format($totalmaterial, 2, '.', ','),
                'totalimpresion' => number_format($totalimpresion, 2, '.', ',')
            );

        }
        $json_string = json_encode($json);
        echo $json_string;
?>