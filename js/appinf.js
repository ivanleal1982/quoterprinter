$(document).ready(function(){

    $('#task-result').hide();
    $('#task-result1').hide();
    $('#descr1').hide();
    $('#itemcotiza').hide();
   // fetchTasks();
    listarclientes();
    listarmateriales(1);
    listarmateriales(2);
    listarmateriales(3);
    listarmateriales(4);
    listarmateriales(5);
    listarmateriales(6);
    
    let edit = false;
    let totalcant=0.1111111;
    let totalcalc=0.00;
    let idempresa="";
    let nombreempresa="";
    let rifempresa="";
    let direccionempresa="";
    let telefono1="";
    let telefono2="";
    let emailempresa="";
    let idvendedor="";
    let nombrevendedor="";
    let movilcotizacion=0;
    let movilproduccion=0;
    let dsmaterial="";
    let dsproductos="";
    let dslaminado="";
    let dsacabado="";
    let dsotro="";
    let dsinstalacion="";
    let dsplotter="";
    let itemdetalle= [];
    let defcantidad=[];
    let defds=[];
    let deffecha=[];
    let deffechaprod=[];
    let defancho=[];
    let defalto=[];
    let defmetros=[];
    let defsubtotalmaterial=[];
    let deftotalmaterial=[];
    let deftotalimpresion=[];
    let estatusitem=[];
    let estatusitem2=0;
/*
    task.cantidad
    task.ancho
    task.alto
    task.metros
    task.subtotalmaterial
    task.totalmaterial
    task.totalimpresion
*/




    function listarclientes(){
        $.ajax({
            url:'procesos/listar-clientes.php',
            type:'GET',
            success:function(response){
               // console.log(response);
                let tasks = JSON.parse(response);
                let template='<option value=""></option>';
                tasks.forEach(task=>{                   
                    template +=`
                    <option value="${task.id_cliente}">${task.nombre}</option>
                    `
                });
                $('#empresa').html(template);
                
            }
        });
    }

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals).toFixed(decimals);
}

function listarmateriales(tipo){

  $('#material').value = 0;
  $('#productos').value = 0;
  $('#laminado').value = 0;
  $('#instalacion').value = 0;
  $('#acabado').value = 0;
  $('#otro').value = 0;
  //$('#plotter').value = 0;

        $.ajax({
            url:'procesos/listar-materiales.php?tipo=' + parseInt(tipo),
            type:'GET',
            success:function(response){
                //console.log(response);
                let tasks = JSON.parse(response);
                let template='<option value="0.00"></option>';
                tasks.forEach(task=>{
                    totalcant = round(task.total,2);
                    
                    template +=`
                    <option value="${parseFloat(totalcant)}">${task.material}</option>
                    `
                });
                //console.log(totalcant);
                if(tipo==1)
                $('#material').html(template);
                 else if(tipo==2)
                 $('#productos').html(template);
                  else if(tipo==3)
                  $('#laminado').html(template);
                   else if(tipo==4)
                   $('#acabado').html(template);
                    else if(tipo==5)
                    $('#otro').html(template);
                     else if(tipo==6)
                     $('#plotter').html(template);
                     else if(tipo==7)
                     $('#instalacion').html(template);

                     
                      

            }
        });
}

$('#empresa').change(function(e) {
    //console.log($('#empresa').val());
   // $('#itemcotiza').hide();
   // $('#task-result').hide();
    //$('#task-result1').hide();

    $.ajax({
        url:'procesos/listar-clientes.php?idcliente=' + $('#empresa').val(),
        type:'GET',
        success:function(response){
           // console.log(response);
            let tasks = JSON.parse(response);
            let template='';
            tasks.forEach(task=>{
                 idempresa=task.id_cliente;

                 nombreempresa=task.nombre;

                 if(task.rif_cliente!=null)
                      rifempresa=task.rif_cliente;
                         else
                             rifempresa="";

                 if(task.direccion!=null)
                    direccionempresa=task.direccion;
                      else
                         direccionempresa="";

                 if(task.telefono1!=null)
                     telefono1=task.telefono1;
                     else
                     telefono1="";

                 if(task.telefono2!=null)
                    telefono2=task.telefono2;
                        else
                            telefono2="";

                if(task.email!=null)
                     emailempresa=task.email;
                        else
                            emailempresa="";

                 
                
                 if(task.vendedor!=null)
                        nombrevendedor=task.vendedor;
                              else
                                  nombrevendedor="";

                    idvendedor=task.id_vendedor;

                    template +=`
                <tr taskId="${task.id_cliente}">
                <tr>
                <td><b>Nombre de la Empresa:</b> ${task.nombre}</td>
                </tr>
                <tr>
                <td><b>R.I.F:</b> ${rifempresa}</td>
                </tr>
                <tr>
                <td><b>Telefono 1:</b> ${telefono1}</td>
                </tr>
                <tr>
                <td><b>Telefono 2:</b> ${telefono2}</td>
                </tr>
                <tr>
                <td><b>E-mail:</b> ${emailempresa}</td>
                </tr>
                <tr>
                <td><b>Direccion:</b> ${direccionempresa}</td>
                </tr>
                <tr>
                <td><b>Vendedor:</b> ${nombrevendedor}</td>
                </tr>
                <tr id="tcreate">
                <td><button id=btcreate class="task-create btn btn-primary btn-block text-center">Crear Cotizacion</button> </td>
                <td><button id=btfind class="task-find btn btn-primary btn-block text-center">Listar Cotizaciones</button> </td>
                <td><button id=btproduction class="task-fproduction btn btn-primary btn-block text-center">Ordenes de Produccion</button> </td>
                </tr>
              </tr>
            `
                  
 /*              
  //$('#id_cliente').value = task.id_cliente;
                $('#rif_cliente').value = task.rif_cliente;
                $('#nombreempresa').value = task.nombre;
                $('#direccion').value = task.direccion;
                $('#telefono1').value = task.telefono1;
                $('#telefono2').value = task.telefono2;
                $('#email').value = task.email;
                $('#vendedor').value = task.vendedor;
                */
            });
            //console.log(template);
            
            $('#task-result').html(template);
            $('#task-result').show();
            $('#task-result1').hide();
            $('#itemcotiza').hide();
           // $('#itemcotiza').html("");
           // $('#task-result1').html("");
           // document.getElementById("itemcotiza").style.display = "none";
            //console.log("paso");
            
        }
        
    });
    e.preventDefault();

})


function calcularmaterial(tipo){

  subtotalcalc = 0;
  //let totalcalc = 0;
  let materiales = 0.0;
  let productos = 0.0;
  let laminado = 0.0;
  let acabado = 0.0;
  let instalacion = 0.0;
  let otro = 0.0;
  let plotter = 0.0;
  let metros = 0.0;
  let cantidad = 0.0;
  let cant = 0.0;
  let cantotro = 0.0;
  let ancho = 0.0;
  let alto = 0.0;
  let metrosimpresion = 0.0;
  let impresion = 0.0;
  let totalmaterial=0.0;
  let totalgeneral=0.0;


         materiales = parseFloat(round($('#material').val(), 2));
         //console.log($('#material').text());
        productos = parseFloat(round($('#productos').val(), 2));
        laminado = parseFloat(round($('#laminado').val(), 2));
        acabado = parseFloat(round($('#acabado').val(), 2));
        instalacion = parseFloat(round($('#instalacion').val(), 2));
        otro = parseFloat(round($('#otro').val(), 2));
        plotter = parseFloat(round($('#plotter').val(), 2));
        metros = parseFloat(round($('#metros').val(), 2));
        cantidad = parseFloat(round($('#cantidad').val(), 2));
        cantotro = parseFloat(round($('#cantotro').val(), 2));
        ancho = parseFloat(round($('#ancho').val(), 2));
        alto = parseFloat(round($('#alto').val(), 2));

   if($('#material').val() || $('#productos').val() || $('#laminado').val() || $('#acabado').val())
   {
       //console.log(materiales);
        //console.log(totalmaterial);
        //console.log(productos);
       // if(isNaN(materiales))
       
 

        if($('#material').val())
        totalmaterial = parseFloat(materiales) * parseFloat(metros);

        //console.log(totalmaterial);
        if($('#productos').val())
        totalmaterial = (parseFloat(materiales) + parseFloat(productos) ) * parseFloat(metros);
   
        if($('#laminado').val())
        totalmaterial = (parseFloat(materiales) + parseFloat(productos) + parseFloat(laminado)) * parseFloat(metros);
 
        if($('#acabado').val())
        totalmaterial = (parseFloat(materiales) + parseFloat(productos) + parseFloat(laminado) + parseFloat(acabado)) * parseFloat(metros);
  
       //totalmaterial = (parseFloat(materiales) + parseFloat(productos) + parseFloat(laminado) + parseFloat(acabado)) * parseFloat($('#metros').val());
       //console.log(totalmaterial);
      

        // totalcalc = subtotalcalc * parseInt($('#metros').val());
  } 
  else
  totalmaterial =0;


        if($('#instalacion').val())
        {
          instalacion = parseFloat(ancho) * parseFloat(alto) * parseFloat(cantidad) * parseFloat(instalacion);
        
          
        }
        else
        instalacion = 0;

        if($('#otro').val() && $('#cantotro').val())
        {
          otro = parseFloat(cantotro) * parseFloat(otro);
        }
        else
          otro =0;

        if($('#plotter').val())
        {
          metrosimpresion = parseFloat(ancho) * parseFloat(alto) * parseFloat(cantidad);
          impresion = parseFloat(metrosimpresion)*parseFloat(plotter);
        }
        else
        impresion = 0;

 
    /*    console.log(totalmaterial);
        console.log(instalacion);
        console.log(otro);
        console.log(impresion);
        */
        if($('#cantidad').val() && $('#metros').val())
        totalgeneral = (parseFloat(totalmaterial) + parseFloat(instalacion) + parseFloat(otro) + parseFloat(impresion));
        //console.log(totalgeneral);
        /*console.log(typeof(instalacion));
        console.log(typeof(otro));
        console.log(typeof(impresion));
        console.log(totalgeneral);
        console.log(typeof(totalgeneral));*/
}

$('#material').change(function(e) {
 
  calcularmaterial(e);
  const selectedOption = this.options[this.selectedIndex];
    //value = selectedOption.value;
    dsmaterial = selectedOption.text;

    //console.log(`Valor seleccionado: ${value}`);
   // console.log(`Descripción seleccionada: ${description}`);
   
})
/*
select.addEventListener('change', function() {
    
     });*/
     
$('#productos').change(function(e) {
 
  calcularmaterial(e);
  const selectedOption = this.options[this.selectedIndex];
  //value = selectedOption.value;
  dsproductos = selectedOption.text;

 })

 $('#acabado').change(function(e) {
 
    calcularmaterial(e);
    const selectedOption = this.options[this.selectedIndex];
    //value = selectedOption.value;
    dsacabado = selectedOption.text;
  
   })

   $('#laminado').change(function(e) {
 
    calcularmaterial(e);
    const selectedOption = this.options[this.selectedIndex];
    //value = selectedOption.value;
    dslaminado = selectedOption.text;
  
   })

   $('#instalacion').change(function(e) {
 
    calcularmaterial(e);
    const selectedOption = this.options[this.selectedIndex];
    //value = selectedOption.value;
    dsinstalacion = selectedOption.text;
  
   })

   $('#otro').change(function(e) {
 
    calcularmaterial(e);
    const selectedOption = this.options[this.selectedIndex];
    //value = selectedOption.value;
    dsotro = selectedOption.text;
  
   })

   $('#plotter').change(function(e) {
 
    calcularmaterial(e);
    const selectedOption = this.options[this.selectedIndex];
    //value = selectedOption.value;
    dsplotter = selectedOption.text;
  
   })

 function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals).toFixed(decimals);
}

$('#cantidad').keyup(function(e){
  calcularmaterial(e);

})

$('#alto').keyup(function(e){
  calcularmaterial(e);
})

$('#ancho').keyup(function(e){
  calcularmaterial(e);
})

$('#referer').keyup(function(e){
 
    if($('#referer').val())
    {

        
      let referer = $('#referer').val();
      $('#fnameref').html("");
        $.ajax({
            url:'procesos/task-referer.php',
            type:'POST',
            data:{referer},
            success:function(response){
                let tasks = JSON.parse(response);
                let template = '';
                console.log(tasks);
                
                
                tasks.forEach(task=>{
                    console.log(task);
                //    template +=`<li>
                //    ${task.fname} 
                //    </li>`;
                template += ` 
                ${task.fname} 
                ${task.lname}
                `;
                });

                $('#fnameref').html(template);
              //  $('#task-result').show();
            } 
        })
        
    }
})

$('#search').keyup(function(e){

    if($('#search').val())
    {

    
      let search = $('#search').val();

        $.ajax({
            url:'procesos/task-search.php',
            type:'POST',
            data:{search},
            success:function(response){
                let tasks = JSON.parse(response);
                let template = '';
                tasks.forEach(task=>{
                    //console.log(task);
                    template +=`<li>
                    ${task.name}
                    </li>`;
                });

                $('#container').html(template);
                $('#task-result').show();
            } 
        })
        
    }
})

$(document).on('click','.task-additem', function(e){
  //   $('#task-form').submit(function(e){
 /*       
        $(document).on('click','.task-cleanpic', function(){
            console.log('Cleanpic');
        })
        $(document).on('click','.task-safedata', function(){
            console.log('Safedata');
        })
 */           
        const postData ={
            
            id_cotizacion:movilcotizacion,
            id_empresa:idempresa,
            cantidad:$('#cantidad').val(),
            alto:$('#alto').val(),
            ancho:$('#ancho').val(),
            metros:$('#metros').val(),
            material:$('#material').val(),
            productos:$('#productos').val(),
            laminado:$('#laminado').val(),
            acabado:$('#acabado').val(),
            instalacion:$('#instalacion').val(),
            otro:$('#otro').val(),
            cantotro:$('#cantotro').val(),
            plotter:$('#plotter').val(),
            dsmaterial:dsmaterial,
            dsproductos:dsproductos,
            dslaminado:dslaminado,
            dsacabado:dsacabado,
            dsinstalacion:dsinstalacion,
            dsotro:dsotro,
            dsplotter:dsplotter
       };

        

        //let url = edit === false ? 'information/task-add.php' : 'information/task-edit.php';
        let url = 'procesos/agregar-item.php' ;
        $.post(url, postData, function (response) {
            console.log(response);
            //$('#cantidad').value="";
            document.getElementById("cantidad").value="";
            document.getElementById("alto").value="";
            document.getElementById("ancho").value="";
            document.getElementById("metros").value="";
            document.getElementById("material").value="";
            document.getElementById("productos").value="";
            document.getElementById("laminado").value="";
            document.getElementById("acabado").value="";
            document.getElementById("instalacion").value="";
            document.getElementById("otro").value="";
            document.getElementById("cantotro").value="";
            document.getElementById("plotter").value="";

            mostraritems();
        });
        e.preventDefault();
    });


    function mostraritems(){

        deffecha="";
        deffechaprod="";
        defcantidad=[];
        defds=[];
        defancho=[];
        defalto=[];
        defmetros=[];
        defsubtotalmaterial=[];
        deftotalmaterial=[];
        deftotalimpresion=[];
        estatusitem=[];
        

        $.ajax({
            url:'procesos/listar-items.php?id_cotizacion=' + movilcotizacion,
            type:'GET',
            success:function(response){
                //console.log(response);
                let tasks = JSON.parse(response);
                let template='';
                //console.log(template);
 
                template =`   
                Nro de Cotizacion: ${movilcotizacion} 
                <div>          
                <table>
                <thead>
                    <tr>
                        <th>
                           Cantidad
                        </th>
                        <th>
                            Material
                        </th>
                        <th>
                            Productos 
                        </th>
                        <th>
                            Laminado 
                        </th>
                        <th>
                            Acabado 
                        </th>
                        <th>
                            Otro
                        </th>
                        <th>
                            Impresion
                        </th>
                        <th>
                            Ancho
                        </th>
                        <th>
                            Alto
                        </th>
                        <th>
                            Metros
                        </th>
                        <th>
                           SubTotal Material
                        </th>
                        <th>
                            Total Material
                        </th>
                        <th>
                            Total Impresion
                        </th>
                        <th>

                        </th>
                        </tr>
                    </thead>
                    <tbody>
                    `;
          //          console.log(template);
 
          //defds.splice(0, defds.length);
          //defds.pop();

                tasks.forEach(task=>{
                    //itemdetalle =[task.id_calculo_cotizacion, task.cantidad, task.ds_material, task.ds_productos, task.ds_laminado, task.ds_acabado, task.ds_otro, task.ds_plotter, task.ancho, task.alto, task.metros, task.subtotalmaterial, task.totalmaterial, task.totalimpresion];
                    estatusitem.push(task.estatus);
                    estatusitem2 = task.estatus;
                    //console.log(estatusitem);
                    defcantidad.push(task.cantidad);
                    let variablecompleta = "";
                    variablecompleta = task.ancho + " mts de Ancho x " + task.alto + " mts de Alto. " + task.ds_material + " " + task.ds_productos + " " + task.ds_laminado + " " + task.ds_acabado + " " + task.ds_otro;
                   // defds.push();
                    //console.log(defcantidad);
                    defds.push(variablecompleta);
                    //deffecha=date("d/m/Y", strtotime($task.fecha));
                    deffecha=task.fecha;
                    deffechaprod=task.fechaprod;
                    defancho.push(task.ancho);
                    defalto.push(task.alto);
                    defmetros.push(task.metros);
                    defsubtotalmaterial.push(task.subtotalmaterial);
                    deftotalmaterial.push(task.totalmaterial);
                    deftotalimpresion.push(task.totalimpresion);

                    template +=`
                    <tr taskId="${task.id_calculo_cotizacion}">
                    <th>
                    ${task.cantidad}
                    </th>
                    <th>
                    ${task.ds_material} 
                    </th>
                    <th>
                    ${task.ds_productos} 
                    </th>
                    <th>
                    ${task.ds_laminado} 
                    </th>
                    <th>
                    ${task.ds_acabado} 
                    </th>
                    <th>
                    ${task.ds_otro}
                    </th>
                    <th>
                    ${task.ds_plotter}
                    </th>
                    <th>
                    ${task.ancho}
                    </th>
                    <th>
                    ${task.alto}
                    </th>
                    <th>
                    ${task.metros}
                    </th>
                    <th>
                    ${round(task.subtotalmaterial, 2)}
                    </th>
                    <th>
                    ${round(task.totalmaterial, 2)}
                    </th>
                     <th>
                    ${round(task.totalimpresion, 2)}
                    </th>
                   <th>
                    <button class="task-deleteitem btn btn-danger">
                    Eliminar
                    </button>
                    </th>
                    </tr>
                    `;
                    /*template +=`
                    <tr taskId="${task.id_cotizacion}">
                    <td>${task.id_cotizacion}</td>
                    <td>
                    <a href="#" class="task-item">${task.name}</a>
                    </td>
                    <td>${task.description}</td>
                    <td>
                    <button class="task-delete btn btn-danger">
                    Eliminar
                    </button>
                    </td>
                    </tr>
                    `*/
                    
               });
               template += "</tbody></table><button class='task-printpdf btn btn-danger'>Imprimir Cotizacion</button> ";
               if(estatusitem[0]==0)
               template += "<button class='task-production btn btn-danger'>Generar Orden de Produccion</button> ";
                else if(estatusitem[0]==1)
                {
                template += "<button class='task-printproduction btn btn-dark'>Imprimir Orden de Produccion</button> ";
                $('#itemcotiza').hide();
                }
            template += "</div>";
               estatusitem2=estatusitem[0];
               // console.log(estatusitem2);
               $('#task-result1').html(template);
                $('#task-result1').show();
               // tasks="";
                //task=[];
                
            }
        });
    }

    $(document).on('click','.task-production', function(e){
        
        if(confirm("¿Estas seguro que deseas Crear una Orden de Produccion?")){

                    $.ajax({
                    url:'procesos/colocar_produccion.php?id_cotizacion=' + movilcotizacion,
                     type:'GET',
                    success:function(response){
                        let tasks = JSON.parse(response);
                        let template = '';
                        console.log(tasks);
                        //tasks.forEach(task=>{
                            //console.log(task);
                          //  template +=`<li>
                           // ${task.name}
                            //</li>`;
                       // });

                        //$('#container').html(template);
                        //$('#task-result').show();
                    } 
                })
        } 
        e.preventDefault();

    })


    $(document).on('click','.task-printpdf', function(e){
        //console.log(idempresa);
        //mostrarcotizaciones()
  
        var xhttp;
        if (window.XMLHttpRequest) {
          xhttp = new XMLHttpRequest();
        } else {
          xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.onreadystatechange = function() {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
            //console.log("Datos enviados");
            window.open("printcotizacion.php?idcotizacion=" + movilcotizacion + "&idempresa=" + idempresa + "&nombreempresa="+ nombreempresa+ "&rif="+ rifempresa+ "&direccion="+ direccionempresa+ "&telefono1="+ telefono1+ "&email=" + emailempresa + "&deffecha=" + deffecha + "&deffechaprod=" + deffechaprod + "&defcantidad=" + defcantidad + "&defancho=" +  defancho + "&defalto=" +  defalto + "&defmetros=" +  defmetros + "&defsubtotalmaterial=" +  defsubtotalmaterial + "&deftotalmaterial=" +  deftotalmaterial + "&deftotalimpresion=" +  deftotalimpresion + "&defds=" +  defds);
          }
        };
        xhttp.open("GET", "printcotizacion.php?idcotizacion=" + movilcotizacion + "&idempresa=" + idempresa + "&nombreempresa="+ nombreempresa+ "&rif="+ rifempresa+ "&direccion="+ direccionempresa+ "&telefono1="+ telefono1+ "&email=" + emailempresa + "&deffecha=" + deffecha + "&deffechaprod=" + deffechaprod + "&defcantidad=" + defcantidad + "&defancho=" + defancho + "&defalto=" +  defalto + "&defmetros=" +  defmetros + "&defsubtotalmaterial=" +  defsubtotalmaterial + "&deftotalmaterial=" +  deftotalmaterial + "&deftotalimpresion=" +  deftotalimpresion + "&defds=" +  defds, true);
         xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //console.log(idempresa);
        //
        /*
                           defcantidad.push(task.cantidad);
                    defds.push(task.cantidad);
                    defancho.push(task.ancho);
                    defalto.push(task.alto);
                    defmetros.push(task.metros);
                    defsubtotalmaterial.push(task.subtotalmaterial);
                    deftotalmaterial.push(task.totalmaterial);
                    deftotalimpresion.push(task.totalimpresion);

        */
        xhttp.send();
        //console.log(defds.length);
         

 //       xhttp.send("nombreempresa=" + JSON.stringify(nombreempresa));
 
        e.preventDefault();



    })


    $(document).on('click','.task-printproduction', function(e){
        //console.log(idempresa);
        //mostrarcotizaciones()
  
        var xhttp;
        if (window.XMLHttpRequest) {
          xhttp = new XMLHttpRequest();
        } else {
          xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.onreadystatechange = function() {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
            //console.log("Datos enviados");
            window.open("printproduccion.php?idcotizacion=" + movilcotizacion + "&idempresa=" + idempresa + "&nombreempresa="+ nombreempresa+ "&rif="+ rifempresa+ "&direccion="+ direccionempresa+ "&telefono1="+ telefono1+ "&email=" + emailempresa + "&deffecha=" + deffecha + "&deffechaprod=" + deffechaprod + "&defcantidad=" + defcantidad + "&defancho=" +  defancho + "&defalto=" +  defalto + "&defmetros=" +  defmetros + "&defsubtotalmaterial=" +  defsubtotalmaterial + "&deftotalmaterial=" +  deftotalmaterial + "&deftotalimpresion=" +  deftotalimpresion + "&defds=" +  defds);
          }
        };
        xhttp.open("GET", "printproduccion.php?idcotizacion=" + movilcotizacion + "&idempresa=" + idempresa + "&nombreempresa="+ nombreempresa+ "&rif="+ rifempresa+ "&direccion="+ direccionempresa+ "&telefono1="+ telefono1+ "&email=" + emailempresa + "&deffecha=" + deffecha + "&deffechaprod=" + deffechaprod+ "&defcantidad=" + defcantidad + "&defancho=" + defancho + "&defalto=" +  defalto + "&defmetros=" +  defmetros + "&defsubtotalmaterial=" +  defsubtotalmaterial + "&deftotalmaterial=" +  deftotalmaterial + "&deftotalimpresion=" +  deftotalimpresion + "&defds=" +  defds, true);
         xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //console.log(idempresa);
        //
        /*
                           defcantidad.push(task.cantidad);
                    defds.push(task.cantidad);
                    defancho.push(task.ancho);
                    defalto.push(task.alto);
                    defmetros.push(task.metros);
                    defsubtotalmaterial.push(task.subtotalmaterial);
                    deftotalmaterial.push(task.totalmaterial);
                    deftotalimpresion.push(task.totalimpresion);

        */
        xhttp.send();
        //console.log(defds.length);
         

 //       xhttp.send("nombreempresa=" + JSON.stringify(nombreempresa));
 
        e.preventDefault();



    })   


    $(document).on('click','.task-find', function(e){
        //console.log(idempresa);
        mostrarcotizaciones();
        e.preventDefault();
    })

    $(document).on('click','.task-fproduction', function(e){
        //console.log(idempresa);
        mostrarproduccion();
        e.preventDefault();
    })


function mostrarcotizaciones(){
      //  console.log(idempresa);
      $('#itemcotiza').hide();      
        $.ajax({
            url:'procesos/listar-cotizaciones.php?idempresa=' + idempresa,
            type:'GET',
            success:function(response){
               // console.log(response);
                let tasks = JSON.parse(response);
                let template='';
                
                template =`
                <table>
                <thead>
                    <tr>
                        <th>
                           Nro de Cotizacion
                        </th>
                        <th>
                            Fecha de Cotizacion
                        </th>
                        <th>

                        </th>
                        </tr>
                    </thead>
                    <tbody>
                    `;
                tasks.forEach(task=>{
                    template +=`
                    <tr taskId="${task.id_cotizacion}">
                    <th>
                    <a href="#" class="task-item">${task.id_cotizacion}</a>
                    </th>
                    <th>
                    <a href="#" class="task-item">${task.fecha} </a>
                    </th>                   

                   <th>
                    <button class="task-deletecot btn btn-danger">
                    Eliminar
                    </button>
                    </th>
                    </tr>
                    `
                    /*template +=`
                    <tr taskId="${task.id_cotizacion}">
                    <td>${task.id_cotizacion}</td>
                    <td>
                    <a href="#" class="task-item">${task.name}</a>
                    </td>
                    <td>${task.description}</td>
                    <td>
                    <button class="task-delete btn btn-danger">
                    Eliminar
                    </button>
                    </td>
                    </tr>
                    `*/
               });
               template += "</tbody></table>";
                $('#task-result1').html(template);
                $('#task-result1').show();
            }
        });
    }


    function mostrarproduccion(){
        //  console.log(idempresa);
        $('#itemcotiza').hide(); 
        console.log("paso");
             
          $.ajax({
              url:'procesos/listar-produccion.php?idempresa=' + idempresa,
              type:'GET',
              success:function(response){
                  //console.log(response);
                  let tasks = JSON.parse(response);
                  let template='';
                  
                  template =`
                  <table>
                  <thead>
                      <tr>
                          <th>
                             Nro de Orden de Produccion
                          </th>
                          <th>
                              Fecha de Inicio en Produccion
                          </th>
                          <th>
  
                          </th>
                          </tr>
                      </thead>
                      <tbody>
                      `;
                  tasks.forEach(task=>{
                      template +=`
                      <tr taskId="${task.id_cotizacion}">
                      <th>
                      <a href="#" class="task-prod">${task.id_cotizacion}</a>
                      </th>
                      <th>
                      <a href="#" class="task-prod">${task.fecha_produccion} </a>
                      </th>                   
  
                     <th>
                     
                     <button class="task-deleteprod btn btn-danger">
                      Eliminar
                      </button>
                      </th>
                      </tr>
                      `
                      /*template +=`
                      <tr taskId="${task.id_cotizacion}">
                      <td>${task.id_cotizacion}</td>
                      <td>
                      <a href="#" class="task-item">${task.name}</a>
                      </td>
                      <td>${task.description}</td>
                      <td>
                      <button class="task-delete btn btn-danger">
                      Eliminar
                      </button>
                      </td>
                      </tr>
                      `*/
                 });
                 template += "</tbody></table>";
                  $('#task-result1').html(template);
                  $('#task-result1').show();
              }
          });
      }
  

    /*
    $(document).on('click','.task-find', function(e){
        console.log("paso");
        //mostrarcotizaciones();
    })
*/
    $(document).on('click','.task-create', function(e){
    //  $('#task-result').show();
        if(confirm("Estas seguro que deseas Crear una Cotizacion?")){
            //let element = $(this)[0].parentElement.parentElement;
            //let id=$(element).attr('taskId');
             
            
           $.post('procesos/agregar-cotizacion.php',{idempresa},function(response){
             console.log(response);
             let tasks = JSON.parse(response);
                let template='';
                tasks.forEach(task=>{
                    movilcotizacion = task.id_cotizacion;
                    //console.log(movilcotizacion);
                });
             //fetchTasks();
             $('#itemcotiza').show();
             $('#tcreate').hide();
           });
           /*
           $('#task-form').trigger('reset');
           $('#task-result').html("");
           $('#task-result').hide();
           
           */
           //console.log("Paso");
           
           e.preventDefault();
           

        }
       // $('#task-result').show();
    })

    $(document).on('click','.task-cleanpic', function(e){
        
        if(confirm("Estas seguro que deseas limpiar la pantalla?")){
            //let element = $(this)[0].parentElement.parentElement;
            //let id=$(element).attr('taskId');
          /*   
           $.post('procesos/task-delete.php',{id},function(response){
             console.log(response);
             fetchTasks();
           });*/
           $('#task-form').trigger('reset');
           $('#task-result').html("");
           $('#task-result').hide();
           $('#task-result1').hide();
           $('#itemcotiza').hide();
           e.preventDefault();
     
        }
    })

    $(document).on('click','.task-deletecot', function(e){
        
        if(confirm("¿Deseas Eliminar la Cotizacion Seleccionada?")){
            let element = $(this)[0].parentElement.parentElement;
            let id=$(element).attr('taskId');
            //console.log(id);
            
           $.post('procesos/eliminar-cotizacion.php',{id},function(response){
             //console.log(response);
             mostrarcotizaciones();
             $('#itemcotiza').hide();
             $('#tcreate').show();
           });
           
           
          
        }
        e.preventDefault();
    })

    $(document).on('click','.task-deleteitem', function(e){
        
        if(confirm("¿Deseas Eliminar el Item Seleccionado?")){
            let element = $(this)[0].parentElement.parentElement;
            let id=$(element).attr('taskId');
            //console.log(id);
            
           $.post('procesos/eliminar-item.php',{id},function(response){
             //console.log(response);
             mostraritems();
             $('#itemcotiza').show();
             $('#tcreate').hide();
           });
           
           
          
        }
        e.preventDefault();
    })

    $(document).on('click','.task-item', function(e){

        $('#itemcotiza').show();
        let element = $(this)[0].parentElement.parentElement;
        let id=$(element).attr('taskId');
        //console.log(id);
        movilcotizacion = id;
       //console.log(estatusitem2);
        mostraritems();
        console.log("paso");
         $('#itemcotiza').show();
        $('#tcreate').hide();
     
        e.preventDefault();

      /*
        $.post('procesos/task-single.php',{id},function(response){
            console.log(response);
            const task = JSON.parse(response);
            $('#name').val(task.name);
            $('#description').val(task.description);
            $('#id').val(task.id);
            fetchTasks();
            e.preventDefault();
            edit = true;
          });
          */


})

$(document).on('click','.task-prod', function(e){

        
    let element = $(this)[0].parentElement.parentElement;
    let id=$(element).attr('taskId');
    //console.log(id);
    movilcotizacion = id;
   //console.log(estatusitem2);
    mostraritems();
   // console.log(estatusitem2);
     $('#itemcotiza').hide();
    $('#tcreate').hide();
 
    e.preventDefault();

  /*
    $.post('procesos/task-single.php',{id},function(response){
        console.log(response);
        const task = JSON.parse(response);
        $('#name').val(task.name);
        $('#description').val(task.description);
        $('#id').val(task.id);
        fetchTasks();
        e.preventDefault();
        edit = true;
      });
      */


})
  
});