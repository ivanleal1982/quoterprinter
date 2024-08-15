<?php

include('../database.php');

if(isset($_POST['email']) && isset($_POST['clave'])){

   $nombre =  $_POST['nombre'];
   $email =  $_POST['email'];
   $clave =  $_POST['clave'];
   $clave = password_hash($clave, PASSWORD_DEFAULT);
   $cargo =  $_POST['cargo'];
   $rol =  $_POST['rol'];
   $query = "INSERT INTO usuarios(nombre,email,clave,cargo,rol_usuario) VALUES ('$nombre','$email','$clave','$cargo',$rol)";
   //echo $query;
   $result = mysqli_query($connection,$query);

   if(!$result){
    die('Query failed');
   }
   echo "Usuario Agregado Satisfactoriamente";
}

?>