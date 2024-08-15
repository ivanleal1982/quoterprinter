<?php

include('../database.php');

if(isset($_POST['material'])){

   $material =  $_POST['material'];
   $ancho =  $_POST['ancho'];
   $largo =  $_POST['largo'];
   $costo =  $_POST['costo'];
   $tipo =  $_POST['tipo'];
   $query = "INSERT INTO materiales(material,ancho,largo,costo,tipo) VALUES ('$material',$ancho,$largo,$costo,$tipo)";
   //echo $query;
   $result = mysqli_query($connection,$query);

   if(!$result){
    die('Query failed');
   }
   echo "Material Agregado Satisfactoriamente";
}

?>