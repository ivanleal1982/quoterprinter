$(document).ready(function(){

   /* $('#task-result').hide();
    $('#task-form').hide();
    $('#task-title').hide();*/
  //  fetchTasks();
    //fetchTypeServices();
    listarroles();
    mostrarusuarios();
    let edit = false;

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
function listarroles(){
    $.ajax({
        url:'procesos/listar-roles.php',
        type:'GET',
        success:function(response){
            //console.log(response);
            let tasks = JSON.parse(response);
            let template='<option value=""></option>';
            tasks.forEach(task=>{                   
                template +=`
                <option value="${task.id_rol}">${task.nombre}</option>
                `
            });
            $('#rol').html(template);
            
        }
    });
}


    $('#task-form').submit(function(e){

        const postData ={
            
            idusuario:$('#idusuario').val(),
            nombre:$('#nombre').val(),
            email:$('#email').val(),
            clave:$('#clave').val(),
            cargo:$('#cargo').val(),
            rol:$('#rol').val()
    
       };

       let url = ''

       if(edit==true)
       url = 'procesos/editar-usuario.php' ;
       else
       url = 'procesos/agregar-usuario.php' ;

        $.post(url, postData, function (response) {
            console.log(response);
            $('#task-form').trigger('reset');
            $('#task-result').html("<b>" + response + "</b>");

            mostrarusuarios();
        });
        e.preventDefault();

    });



    function mostrarusuarios(){
        
        $('#tasks').html("");
        $('#container').html("");
        $('#task-title').hide();
        $('#task-result').hide();
    
        const postData ={
            search:$('#search').val()
        };
        $.post('procesos/mostrar-usuarios.php', postData, function (response) {
               
                let tasks = JSON.parse(response);
                
                let template1='';
                let template='';
                template1 +=`
                    <tr>
                    <td></td>
                    <td>ID</td>
                    <td>Nombre de Usuario</td>
                    <td>E-mail</td>
                    <td>Cargo</td>
                    <td>Rol de Usuario</td>
                    <td> </td>
                    </tr>
                    `
    
                tasks.forEach(task=>{
                    //console.log(tasks);
                    template +=`
                    <tr taskId="${task.id_usuario}">
                    <td></td>
                    <td>
                    <a href="#" class="task-item">${task.id_usuario}</a>
                    </td>
                    <td>
                    <a href="#" class="task-item">${task.nombre}</a>
                    </td>
                    <td>${task.email}</td>
                    <td>${task.cargo}</td>
                    <td>${task.nombre_rol}</td>
                    <td><button class="task-deleteuser btn btn-danger">Eliminar</button></td>
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


    $(document).on('click','.task-deleteuser', function(e){
            
        if(confirm("¿Deseas Eliminar el Usuario Seleccionado?")){
            let element = $(this)[0].parentElement.parentElement;
            let id=$(element).attr('taskId');
            //console.log(id);
            
          $.post('procesos/eliminar-usuario.php',{id},function(response){
            console.log(response);
            mostrarusuarios();
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
        $.post('procesos/mostrar-usuarios.php',{id},function(response){
            //console.log(response);
            const tasks = JSON.parse(response);
            //console.log(response);
            tasks.forEach(task=>{
            $('#idusuario').val(task.id_usuario);
            $('#nombre').val(task.nombre);
            $('#email').val(task.email);
            $('#cargo').val(task.cargo);
            document.getElementById('rol').value=task.rol_usuario;
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