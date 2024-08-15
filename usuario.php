<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplicacion</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    
</head>
<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="#" class="navbar-brand">Usuarios</a>
<!--
        <ul class="navbar-nav ml-auto">
            <form class="form-inline my-2 my-lg-0">
                <input type="search" id="search" class="form-control mr-sm-2" placeholder="Search your Task">
                <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </ul>
        -->
    </nav>
    <div class="container p-4">
    <div><a href="index.php">Volver al Tablero</a></div>
    <br>
        <div class="row">
           <div class="col-md-4">
               <div class="card">
                   <div class="card-body">
                       <form id="task-form">
                        <div class="form-group">
                            <label>Nombre y Apellido del Usuario</label>
                            <input type="text" id="nombre" placeholder="Nombre" class="form-control" style="width: 300px;">
                        </div>
                        <div class="form-group">
                            <label>E-mail:</label>
                            <input type="text" id="email" placeholder="E-mail" class="form-control" style="width: 300px;">
                        </div>
                        <div class="form-group">
                            <label>Clave:</label>
                            <input type="password" id="clave" placeholder="Clave" class="form-control" style="width: 300px;">
                        </div>
                        <div class="form-group">
                            <label>Cargo</label>
                            <input type="text" id="cargo" placeholder="Cargo" class="form-control" style="width: 300px;">
                        </div>
                        <div class="form-group">
                        <label>Seleccione un Rol de Usuario:</label>
                                <select id="rol" class="form-control" style="width: 300px;"></select>
                        </div>
                        
                        <input type="hidden" id="idusuario">
                       
                  <div> <label></label></div>
                           <button type="submit" class="btn btn-primary btn-block text-center" style="width: 300px;">Agregar / Editar Usuario</button>
                       </form>
                   </div>
               </div>
           </div>
           <div class="col-md-7">
               <div class="card my-4" id="task-result">
                   <div class="card-body">
                       <ul id="container">

                       </ul>
                   </div>
               </div>
                <table class="table table-bordered table-sm">
                    <thead id="descr" >
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody id="tasks">
                        
                    </tbody>
                </table>
           </div>
        </div>
    </div>

    <script src="js/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

    <script src="js/appuser.js"></script>

</body>
</html>