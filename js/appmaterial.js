$(document).ready(function(){

   /* $('#task-result').hide();
    $('#task-form').hide();
    $('#task-title').hide();*/
  //  fetchTasks();
    //fetchTypeServices();
    listartipomateriales();
    mostrarmateriales();
    let edit = false;
    let utilidad = 30;
    let sobrante = 15;
    let islr = 34;

/*
    function listarvendedores(){
        $.ajax({
            url:'procesos/listar-vendedores.php',
            type:'GET',
            success:function(response){
                //console.log(response);
                let tasks = JSON.parse(response);
                let template='<option value=""></option>';
                tasks.forEach(task=>{                   
                    template +=`
                    <option value="${task.id_vendedor}">${task.nombre_vendedor}</option>
                    `
                });
                $('#vendedor').html(template);
                
            }
        });
    }
*/
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals).toFixed(decimals);
}

function listartipomateriales(){
    $.ajax({
        url:'procesos/listar-tipomateriales.php',
        type:'GET',
        success:function(response){
            //console.log(response);
            let tasks = JSON.parse(response);
            let template='<option value=""></option>';
            tasks.forEach(task=>{                   
                template +=`
                <option value="${task.id_tipo_material}">${task.tipo_material}</option>
                `
            });
            $('#tipo').html(template);
            
        }
    });
}


function mostrarmateriales(){
        
    $('#tasks').html("");
    $('#container').html("");
    $('#task-title').hide();
    $('#task-result').hide();

    const postData ={
        search:$('#search').val()
    };
    $.post('procesos/mostrar-materiales.php', postData, function (response) {
           
            let tasks = JSON.parse(response);
            
            let template1='';
            let template='';
            template1 +=`
                <tr>
                <td></td>
                <td>ID</td>
                <td>Material</td>
                <td>Ancho</td>
                <td>Largo</td>
                <td>Costo</td>
                <td>Tipo de Material</td>
                <td> </td>
                </tr>
                `

            tasks.forEach(task=>{
                //console.log(tasks);
                template +=`
                <tr taskId="${task.id_material}">
                <td></td>
                <td>
                <a href="#" class="task-item">${task.id_material}</a>
                </td>
                <td>
                <a href="#" class="task-item">${task.material}</a>
                </td>
                <td>${task.ancho}</td>
                <td>${task.largo}</td>
                <td>${task.costo}</td>
                <td>${task.tipo_material}</td>
                <td><button class="task-deletemat btn btn-danger">Eliminar</button></td>
                </tr>
                `
            });
            //console.log("Paso3");
            $('#task-title').show();
           // $('#descr').show();
            $('#descr').html(template1);
            $('#tasks').html(template);
       // }
    });
}

$(document).on('click','.task-onview', function(e){
        
  $('#tasks').html("");
  $('#container').html("");
  $('#task-title').hide();
  $('#task-result').hide();

  const postData ={
      search:$('#search').val()
  };
  $.post('procesos/mostrar-calculomateriales.php', postData, function (response) {
         
          let tasks = JSON.parse(response);
          
          let template1='';
          let template='';
          template1 +=`
              <tr>
              <td></td>
              <td>Material</td>
              <td>Costo Unitario</td>
              <td>Sobrante</td>
              <td>Utilidad</td>
              <td>SubTotal</td>
              <td>ISLR</td>
              <td>Total</td>
              </tr>
              `

          tasks.forEach(task=>{
              //console.log(tasks);
              template +=`
              <tr taskId="${task.id_material}">
              <td></td>
              <td>${task.material}</td>
              <td>${task.costo_unitario}</td>
              <td>${task.sobrante}</td>
              <td>${task.utilidad}</td>
              <td>${task.subtotal}</td>
              <td>${task.islr}</td>
              <td>${task.total}</td>
              </tr>
              `
          });
          //console.log("Paso3");
          $('#task-title').show();
         // $('#descr').show();
          $('#descr').html(template1);
          $('#tasks').html(template);
     // }
  });
  e.preventDefault();
})

    $(document).on('click','.task-deletemat', function(e){
            
      if(confirm("¿Deseas Eliminar el Material Seleccionado?")){
          let element = $(this)[0].parentElement.parentElement;
          let id=$(element).attr('taskId');
          //console.log(id);
          
        $.post('procesos/eliminar-material.php',{id},function(response){
          console.log(response);
          mostrarmateriales();
          $('#task-form').trigger('reset');
            $('#task-result').html("<b>" + response + "</b>");
          //$('#itemcotiza').show();
          //$('#tcreate').hide();
        });
        
        
        
      }
      e.preventDefault();
    })

$(document).on('click','.task-item', function(e){

    //console.log('editing');
    let element = $(this)[0].parentElement.parentElement;
    let id=$(element).attr('taskId');
   // console.log(id);
    $.post('procesos/mostrar-materiales.php',{id},function(response){
        //console.log(response);
        const tasks = JSON.parse(response);
        //console.log(task.material);
        tasks.forEach(task=>{
        $('#material').val(task.material);
        $('#ancho').val(task.ancho);
         $('#largo').val(task.largo);
        $('#costo').val(task.costo);
        $('#idmaterial').val(task.id_material);
        document.getElementById('tipo').value=task.id_tipo_material;
        });
        //fetchTasks();
        e.preventDefault();
        edit = true;
      });


})
/*
document.getElementById('ancho').addEventListener('input', function (event) {
    let valor = event.target.value;
    // Reemplaza comas por puntos
    valor = valor.replace(',', '.');
    event.target.value = valor;
  });
*/
document.getElementById('ancho').addEventListener('input', function (event) {
    let valor = event.target.value;
    // Reemplaza comas por puntos
    valor = valor.replace(',', '.');
    event.target.value = valor;
  });
  document.getElementById('largo').addEventListener('input', function (event) {
    let valor = event.target.value;
    // Reemplaza comas por puntos
    valor = valor.replace(',', '.');
    event.target.value = valor;
  });document.getElementById('costo').addEventListener('input', function (event) {
    let valor = event.target.value;
    // Reemplaza comas por puntos
    valor = valor.replace(',', '.');
    event.target.value = valor;
  });

  document.getElementById('ancho').addEventListener('keypress', function (event) {
    // Obtiene el código ASCII de la tecla presionada
    let charCode = (event.which) ? event.which : event.keyCode;

    // Permite solo números (códigos ASCII 48-57) y teclas de control como backspace (código ASCII 8)
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode == 46) {
      event.preventDefault();
    }
  });

  document.getElementById('largo').addEventListener('keypress', function (event) {
    // Obtiene el código ASCII de la tecla presionada
    let charCode = (event.which) ? event.which : event.keyCode;

    // Permite solo números (códigos ASCII 48-57) y teclas de control como backspace (código ASCII 8)
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode == 46) {
      event.preventDefault();
    }
  });

  document.getElementById('costo').addEventListener('keypress', function (event) {
    // Obtiene el código ASCII de la tecla presionada
    let charCode = (event.which) ? event.which : event.keyCode;

    // Permite solo números (códigos ASCII 48-57) y teclas de control como backspace (código ASCII 8)
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode == 46) {
      event.preventDefault();
    }
  });

    $(document).on('click','.task-generateview', function(e){
    
        console.log("paso");
        calculo_utilidad=(round(utilidad/100,2));
        calculo_islr=(round(islr/100,2));
        calculo_sobrante=(round(sobrante/100,2));

        const postData ={
            
            utilidad:calculo_utilidad,
            islr:calculo_islr,
            sobrante:calculo_sobrante
    
       };

       let url = 'procesos/generar-vista.php' ;
       //console.log(1);
        $.post(url, postData, function (response) {
           // console.log(response);
            $('#task-form').trigger('reset');
            $('#task-result').html("<b>" + response + "</b>");

            //mostraritems();
        });
        e.preventDefault();

    });


    $('#task-form').submit(function(e){

        const postData ={
            
            idmaterial:$('#idmaterial').val(),
            material:$('#material').val(),
            ancho:$('#ancho').val(),
            largo:$('#largo').val(),
            costo:$('#costo').val(),
            tipo:$('#tipo').val()
    
       };

       let url = '' ;

       if(edit==true)
       url = 'procesos/editar-material.php' ;
        else
       url = 'procesos/agregar-material.php' ;

       //console.log(1);
        $.post(url, postData, function (response) {
            //console.log(response);
            $('#task-form').trigger('reset');
            $('#task-result').html("<b>" + response + "</b>");

            mostrarmateriales();
        });
        edit=false;
        e.preventDefault();

    });


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
           /*$('#task-result').html("");
           $('#task-result').hide();
           $('#task-result1').hide();
           $('#itemcotiza').hide();*/
           edit=false;
           e.preventDefault();
     
        }
    })

  
});