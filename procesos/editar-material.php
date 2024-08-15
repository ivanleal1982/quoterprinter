<?php

include('../database.php');

if(isset($_POST['idmaterial'])){

   $id_material =  $_POST['idmaterial'];
   $material =  $_POST['material'];
   $ancho =  $_POST['ancho'];
   $largo =  $_POST['largo'];
   $costo =  $_POST['costo'];
   $tipo =  $_POST['tipo'];
   $query = "UPDATE materiales SET material='$material',ancho=$ancho,largo=$largo,costo=$costo,tipo=$tipo WHERE id_material=$id_material";
   echo $query;
   $result = mysqli_query($connection,$query);

   if(!$result){
    die('Query failed');
   }
   echo "Material Editado Satisfactoriamente";
}

?>