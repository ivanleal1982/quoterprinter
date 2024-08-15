<?php

include('../database.php');

if(isset($_POST['idempresa'])){


   $id_empresa = $_POST['idempresa'];
   $fechaactual = date("Y-m-d");
   /*$cantidad = $_POST['cantidad'];
   $alto = $_POST['alto'];
   $ancho = $_POST['ancho'];
   $metros = $_POST['metros'];
   $material = $_POST['material'];
   $productos = $_POST['productos'];
   $laminado = $_POST['laminado'];
   $acabado = $_POST['acabado'];
   $instalacion = $_POST['instalacion'];
   $otro = $_POST['otro'];
   $cantotro = $_POST['cantotro'];
   $plotter = $_POST['plotter'];*/
  // echo $id_empresa;
/*
   $query = "SELECT * FROM cotizaciones WHERE cedula_servicio='$natid'";
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
     */
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
   $query = "INSERT INTO cotizaciones(id_cliente,fecha) VALUES ($id_empresa,'$fechaactual');";
   //$result = mysqli_query($connection,$query);

   /*
   //echo $result;
   if(!$result){
    die('Query failed');
   }
   */
  $json = array();
   if ($connection->query($query) === TRUE) {
      // Obtener el ID del último registro insertado
      $lastInsertId = $connection->insert_id;
      //echo "Último registro insertado con ID: " . $lastInsertId;
      $json[]=array(
          
         'id_cotizacion' => $lastInsertId
        );

        $json_string = json_encode($json);
         echo $json_string;

  } else {
      echo "Error al insertar el registro: " . $conn->error;
  }
  
   //echo $result;
  // echo "Cotizacion Agregada Satisfactoriamente";
/*
  $json = array();
  while ($row = mysqli_fetch_array($result)){
      $json[]=array(
          
        'id_cotizacion' => $row['id_cotizacion'],
          'id_cliente' => $row['id_cliente']
       );
  }
  $json_string = json_encode($json);
  echo $json_string;
  */

}

?>