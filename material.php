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
        <a href="#" class="navbar-brand">Materiales</a>
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
                            <label>Nombre del Material</label>
                            <input type="text" id="material" placeholder="Nombre del Material" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Ancho:</label>
                            <input type="text" id="ancho" placeholder="Ancho" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Largo:</label>
                            <input type="text" id="largo" placeholder="Largo" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Costo</label>
                            <input type="text" id="costo" placeholder="Costo" class="form-control">
                        </div>
                        <div class="form-group">
                        <label>Seleccione un Tipo de Material:</label>
                                <select id="tipo" class="form-control"></select>
                        </div>
                        <input type="hidden" id="idmaterial">
 
                           
                        
                  <div> <label></label></div>
                  
                           <button type="submit" class="btn btn-primary btn-block text-center">Agregar / Editar</button>
                           <label></label>
                           <button class="task-generateview btn btn-primary btn-block text-center">Generar Calculo de Materiales</button>
                           <label></label>
                           <button class="task-onview btn btn-primary btn-block text-center">Ver Calculo de Materiales</button>
                           <label></label>
                                <button class="task-cleanpic btn btn-primary btn-block text-center">Limpiar Pantalla</button>   
                              
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

    <script src="js/appmaterial.js"></script>

</body>
</html>