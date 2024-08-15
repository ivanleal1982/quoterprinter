<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplicacion</title>
    <link rel="stylesheet" href="cs/bootstrap.min.css">
    
</head>
<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="#" class="navbar-brand">Vendedores</a>
<!--https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/lux/bootstrap.min.css
https://code.jquery.com/jquery-3.6.0.min.js
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
           <div class="col-md-5">
               <div class="card">
                   <div class="card-body">
                       <form id="task-form">
                        <div class="form-group">
                            <label>Nombre del Vendedor</label>
                            <input type="text" id="nombrevendedor" placeholder="Nombre del Vendedor" class="form-control">
                        </div>
                        <div class="form-group">
                        <label>Telefono:</label>
                               <input type="number" id="telefono" placeholder="Telefono:" class="form-control">
                           </div>
 
                           <div class="form-group">
                           <label>E-mail:</label>
                            <input type="text" id="email" placeholder="E-mail:" class="form-control">
                           </div>
                           <input type="hidden" id="idvendedor">
                  <div> <label></label></div>
                           <button type="submit" class="btn btn-primary btn-block text-center">Agregar / Editar Vendedor</button>
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

    <script src="js/appseller.js"></script>

</body>
</html>