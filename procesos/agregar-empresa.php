<?php

include('../database.php');

if(isset($_POST['nombreempresa'])){

   $nombreempresa =  $_POST['nombreempresa'];
   $rif =  $_POST['rif'];
   $telefono1 =  $_POST['telefono1'];
   $telefono2 =  $_POST['telefono2'];
   $email =  $_POST['email'];
   $direccion =  $_POST['direccion'];
   $vendedor =  $_POST['vendedor'];
   $query = "INSERT INTO clientes(rif_cliente,nombre,direccion,telefono1,telefono2,email,vendedor) VALUES ('$rif','$nombreempresa','$direccion','$telefono1','$telefono2','$email',$vendedor)";
   $result = mysqli_query($connection,$query);

   if(!$result){
    die('Query failed');
   }
   echo "Empresa Agregada Satisfactoriamente";
}

?>