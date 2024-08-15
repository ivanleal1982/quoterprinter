<?php

include('../database.php');

if(isset($_POST['nombrevendedor'])){

   $nombrevendedor =  $_POST['nombrevendedor'];
   $telefono =  $_POST['telefono'];
   $email =  $_POST['email'];
   $query = "INSERT INTO vendedor(nombre_vendedor,telefono,email) VALUES ('$nombrevendedor','$telefono','$email')";
   $result = mysqli_query($connection,$query);

   if(!$result){
    die('Query failed');
   }
   echo "Vendedor Agregado Satisfactoriamente";
}

?>