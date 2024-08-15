<?php

include('../database.php');

if(isset($_POST['idempresa'])){

   $id_cliente =  $_POST['idempresa'];
   $nombre =  $_POST['nombreempresa'];
   $rif_cliente =  $_POST['rif'];
   $direccion =  $_POST['direccion'];
   $telefono1 =  $_POST['telefono1'];
   $telefono2 =  $_POST['telefono2'];
   $email =  $_POST['email'];
   $vendedor =  $_POST['vendedor'];
   $query = "UPDATE clientes SET nombre='$nombre',rif_cliente='$rif_cliente',direccion='$direccion',telefono1=$telefono1,telefono2=$telefono2,email='$email',vendedor=$vendedor WHERE id_cliente=$id_cliente";
   echo $query;
   $result = mysqli_query($connection,$query);

   if(!$result){
    die('Query failed');
   }
   echo "Empresa Editada Satisfactoriamente";
}

?>