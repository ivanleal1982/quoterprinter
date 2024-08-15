<?php
/*
session_start();
if (!isset($_SESSION['usuario'])) {
    header("Location: login.php");
    exit();
    
}

$rolsesion = $_SESSION['rol'];
*/
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tablero</title>
    <link rel="stylesheet" href="css/styles.css">

    <script>
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar ul li a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
</script>

</head>
<body>
    <div class="sidebar">
        <h2>Tablero</h2>
        <ul>
            <li><a href="index.php">Inicio</a></li>
            <li><a href="cotizacion.php">Cotizar</a></li>
            <li><a href="usuario.php">Usuarios</a></li>
            <li><a href="empresa.php">Clientes</a></li>
            <li><a href="material.php">Materiales</a></li>
        </ul>
    </div>
    <div class="content">
        <h1>Bienvenido al Tablero</h1>
        <p>Selecciona una opción del menú para comenzar.</p>
    </div>
    
</body>
</html>
