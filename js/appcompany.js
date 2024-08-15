$(document).ready(function(){

   /* $('#task-result').hide();
    $('#task-form').hide();
    $('#task-title').hide();*/
  //  fetchTasks();
    //fetchTypeServices();
    mostrarempresas();
    listarvendedores();
    
    let edit = false;


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


    $('#task-form').submit(function(e){

        const postData ={
            
            idempresa:$('#idempresa').val(),
            nombreempresa:$('#nombreempresa').val(),
            rif:$('#rif').val(),
            direccion:$('#direccion').val(),
            telefono1:$('#telefono1').val(),
            telefono2:$('#telefono2').val(),
            email:$('#email').val(),
            vendedor:$('#vendedor').val()
    
       };

       let url = '' ;
       if(edit==true)
       url = 'procesos/editar-empresa.php' ;
       else
       url = 'procesos/agregar-empresa.php' ;

        $.post(url, postData, function (response) {
            //console.log(response);
            $('#task-form').trigger('reset');
            $('#task-result').html("<b>" + response + "</b>");

            mostrarempresas();
        });
        e.preventDefault();

    });


    function mostrarempresas(){
        
        $('#tasks').html("");
        $('#container').html("");
        $('#task-title').hide();
        $('#task-result').hide();
    
        const postData ={
            search:$('#search').val()
        };
        $.post('procesos/mostrar-empresas.php', postData, function (response) {
               
                let tasks = JSON.parse(response);
                
                let template1='';
                let template='';
                template1 +=`
                    <tr>
                    <td></td>
                    <td>ID</td>
                    <td>Nombre de Empresa</td>
                    <td>R.I.F</td>
                    <td>Direccion</td>
                    <td>Telefono 1</td>
                    <td>Telefono 2</td>
                    <td>E-mail</td>
                    <td>Vendedor</td>
                    <td> </td>
                    </tr>
                    `
    
                tasks.forEach(task=>{
                    //console.log(tasks);
                    template +=`
                    <tr taskId="${task.id_cliente}">
                    <td></td>
                    <td>
                    <a href="#" class="task-item">${task.id_cliente}</a>
                    </td>
                    <td>
                    <a href="#" class="task-item">${task.nombre}</a>
                    </td>
                    <td>${task.rif_cliente}</td>
                    <td>${task.direccion}</td>
                    <td>${task.telefono1}</td>
                    <td>${task.telefono2}</td>
                    <td>${task.email}</td>
                    <td>${task.nombre_vendedor}</td>
                    <td><button class="task-deletecompany btn btn-danger">Eliminar</button></td>
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



    $(document).on('click','.task-deletecompany', function(e){
            
        if(confirm("¿Deseas Eliminar la Empresa Seleccionada?")){
            let element = $(this)[0].parentElement.parentElement;
            let id=$(element).attr('taskId');
            //console.log(id);
            
          $.post('procesos/eliminar-empresa.php',{id},function(response){
            console.log(response);
            mostrarempresas();
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
        $.post('procesos/mostrar-empresas.php',{id},function(response){
            //console.log(response);
            const tasks = JSON.parse(response);
            //console.log(response);
            tasks.forEach(task=>{
            $('#idempresa').val(task.id_cliente);
            $('#nombreempresa').val(task.nombre);
            $('#rif').val(task.rif_cliente);
            $('#direccion').val(task.direccion);
            $('#telefono1').val(task.telefono1);
            $('#telefono2').val(task.telefono2);
            $('#email').val(task.email);
            document.getElementById('vendedor').value=task.vendedor;
            });
            //fetchTasks();
            e.preventDefault();
            edit = true;
          });
    
    
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
           /*$('#task-result').html("");
           $('#task-result').hide();
           $('#task-result1').hide();
           $('#itemcotiza').hide();*/
           edit=false;
           e.preventDefault();
     
        }
    })



});