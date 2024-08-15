<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplicacion</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">

</head>
<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="#" class="navbar-brand">Cotizacion</a>
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
        <form id="task-form">
            <div class="row">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-body">
                            <div class="form-group">
                                <label>Seleccione una Empresa:</label>
                                <select id="empresa" class="form-control"></select>
                            </div>
                            <div class="card my-4" id="task-result">
       <!--             <div class="card-body">
                        <ul id="container">

                        </ul>
                    </div>
                     -->
                </div>

                      </div>
                    <div id="itemcotiza" class="card-body">
                        <div class="row">
                             <div class="form-group col">
                            <label>Cantidad:</label>
                                <input type="number" id="cantidad" class="form-control" style="width: 100px;">
                            </div>
                            <div class="form-group col">
                            <label>Alto:</label>
                                <input type="number" id="alto" class="form-control" style="width: 100px;">
                            </div>
                            <div class="form-group col">
                            <label>Ancho:</label>
                                <input type="number" id="ancho" class="form-control" style="width: 100px;">
                            </div>

                        </div>


                        <div class="row">

                            <div class="form-group col">
                            <label>Metros:</label>
                                <input type="text" id="metros" Cuadrados" class="form-control" style="width: 100px;">
                            </div>
                            <div class="form-group col">
                            <label>Material:</label>
                            <select id="material" class="form-control" style="width: 150px;"></select>
                            </div>

                        </div>

                        <div class="row">

                            <div class="form-group col">
                            <label>Productos:</label>
                            <select id="productos" class="form-control" style="width: 150px;"></select>
                            </div>
                            
                            <div class="form-group col">
                            <label>Laminado:</label>
                            <select id="laminado" class="form-control" style="width: 150px;"></select>
                            </div>
                            
                        </div>

                        <div class="row">

                            <div class="form-group col">
                            <label>Acabado:</label>
                            <select id="acabado" class="form-control" style="width: 150px;"></select>
                            </div>
                            <div class="form-group col">
                            <label>Instalacion:</label>
                            <select id="instalacion" class="form-control" style="width: 150px;"></select>
                            </div>

                        </div>
                        
                        <div class="row">

                            <div class="form-group col">
                            <label>Otro:</label>
                            <select id="otro" class="form-control" style="width: 150px;"></select> Cantidad de Otro: <input type="number" class="form-control" id="cantotro" style="width: 100px;">
                            </div>
                            <div class="form-group col">
                            <label>Plotter:</label>
                            <select id="plotter" class="form-control" style="width: 150px;"></select>
                            </div>

                        </div>
                         
                            <div class="form-group">
                                <label id="fnameref"></label>
                            </div>
                            <div class="form-group">
                                <button class="task-additem btn btn-primary btn-block text-center">Agregar Item</button>                      
                            </div>
                            <!-- 
                                <div class="form-group">
                                <button type="submit" class="task-safedata btn btn-primary btn-block text-center">Guardar Cotizacion</button>                      
                            </div>
                            -->
                            <div class="form-group">
                                <button class="task-cleanpic btn btn-primary btn-block text-center">Limpiar Pantalla</button>   
                            </div>                   
                </div>
                </div>
            </div>
            <div class="col-md-13">
                <div class="card my-4 table table-bordered table-sm" id="task-result1">
                    <div class="card-body">
                        <ul id="container">

                        </ul>
                    </div>
                </div>
                    <table class="table table-bordered table-sm">
                        <thead id="descr1" >
                            <tr>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                        </thead>
                        <tbody id="tasks">
                            
                        </tbody>
                    </table>
            </div>
            </div>
        </form>
   </div>

    <script src="js/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

    <script src="js/appinf.js"></script>

</body>
</html>