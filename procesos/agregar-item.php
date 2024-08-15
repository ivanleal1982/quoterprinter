<?php

include('../database.php');

if(isset($_POST['id_empresa'])){


   $id_cliente = $_POST['id_empresa'];
   $id_cotizacion = $_POST['id_cotizacion'];
   $cantidad = $_POST['cantidad'];
   $alto = $_POST['alto'];
   $ancho = $_POST['ancho'];
   $metros = $_POST['metros'];

   if(!$_POST['material']=="")
   $material = $_POST['material'];
   else
   $material = 0;

   if(!$_POST['productos']=="")
   $productos = $_POST['productos'];
   else
   $productos = 0;

   if(!$_POST['laminado']=="")
   $laminado = $_POST['laminado'];
   else
   $laminado = 0;

   if(!$_POST['acabado']=="")
   $acabado = $_POST['acabado'];
   else
   $acabado = 0;

   if(!$_POST['instalacion']=="")
   $instalacion = $_POST['instalacion'];
   else
   $instalacion = 0;

   if(!$_POST['otro']=="")
   $otro = $_POST['otro'];
   else
   $otro = 0;

   if(!$_POST['cantotro']=="")
    $cantotro = $_POST['cantotro'];
    else
    $cantotro = 0;
 
   if(!$_POST['plotter']=="")
   $plotter = $_POST['plotter'];
   else
   $plotter = 0;

   $dsmaterial = $_POST['dsmaterial'];
   $dsproductos = $_POST['dsproductos'];
   $dslaminado = $_POST['dslaminado'];
   $dsacabado = $_POST['dsacabado'];
   $dsinstalacion = $_POST['dsinstalacion'];
   $dsotro = $_POST['dsotro'];
    $dsplotter = $_POST['dsplotter'];

/*
   $query = "SELECT * FROM ref_servicio WHERE cedula_servicio='$natid'";
   $result = mysqli_query($connection,$query);
   //echo 'console.log(' . $query .');';
   if(!$result){
      die('Query failed');
     }

     $totalrows = mysqli_num_rows($result);
     $pcther =0;
     $vez=0;
    
     if($totalrows>0)
     {
        $pcther = 1;
        $vez = $totalrows + 1;

     }
     else 
     {
        $pcther = 5;
        $vez = 1;
    }
     
/*
     $json = array();
        while ($row = mysqli_fetch_array($result)){
            $json[]=array(
                'name' => $row['name'],
                'description' => $row['description'],
                'id' => $row['id']
            );
        }
        $json_string = json_encode($json);
        echo $json_string;
*/

$query = "INSERT INTO calculo_cotizacion(id_cotizacion,id_cliente,cantidad,material,productos,laminado,acabado,plotter,otro,cantotro,ds_material,ds_productos,ds_laminado,ds_acabado,ds_plotter,ds_otro,alto,ancho,metros) VALUES ($id_cotizacion,$id_cliente,$cantidad,$material,$productos,$laminado,$acabado,$plotter,$otro,$cantotro,'$dsmaterial','$dsproductos','$dslaminado','$dsacabado','$dsplotter','$dsotro',$alto,$ancho,$metros)";
//echo $query;   
$result = mysqli_query($connection,$query);


   if(!$result){
    die('Query failed');
   }
   //echo "Item Agregado Satisfactoriamente";

}

?>