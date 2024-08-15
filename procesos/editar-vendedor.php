<?php

include('../database.php');

if(isset($_POST['idvendedor'])){

   $id_vendedor =  $_POST['idvendedor'];
   $nombre_vendedor =  $_POST['nombrevendedor'];
   $telefono =  $_POST['telefono'];
   $email =  $_POST['email'];
   $query = "UPDATE vendedor SET nombre_vendedor='$nombre_vendedor',telefono=$telefono,email='$email' WHERE id_vendedor=$id_vendedor";
   echo $query;
   $result = mysqli_query($connection,$query);

   if(!$result){
    die('Query failed');
   }
   echo "Vendedor Editado Satisfactoriamente";
}

?>