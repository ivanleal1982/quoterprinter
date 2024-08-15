<?php

include('../database.php');

if(isset($_POST['idusuario'])){

   $id_usuario =  $_POST['idusuario'];
   $nombre =  $_POST['nombre'];
   $cargo = $_POST['cargo'];
   $email =  $_POST['email'];
   $rol_usuario = $_POST['rol'];

   $query = "UPDATE usuarios SET ";


   if(isset($_POST['clave'])){
   $clave = password_hash($_POST['clave'], PASSWORD_DEFAULT);
   $query .= "clave='$clave',";  
   }

   $query .= "nombre='$nombre',cargo='$cargo',email='$email',rol_usuario=$rol_usuario WHERE id_usuario=$id_usuario";
   //echo $query;
   $result = mysqli_query($connection,$query);

   if(!$result){
    die('Query failed');
   }
   echo "Usuario Editado Satisfactoriamente";
}

?>