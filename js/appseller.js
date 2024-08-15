$(document).ready(function(){

   /* $('#task-result').hide();
    $('#task-form').hide();
    $('#task-title').hide();*/
  //  fetchTasks();
    //fetchTypeServices();
 //   listarvendedores();
    let edit = false;
    mostrarvendedores();

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

function mostrarvendedores(){
        
    $('#tasks').html("");
    $('#container').html("");
    $('#task-title').hide();
    $('#task-result').hide();

    const postData ={
        search:$('#search').val()
    };
    $.post('procesos/mostrar-vendedores.php', postData, function (response) {
           
            let tasks = JSON.parse(response);
            
            let template1='';
            let template='';
            template1 +=`
                <tr>
                <td></td>
                <td>ID</td>
                <td>Nombre</td>
                <td>Telefono</td>
                <td>E-mail</td>
                <td> </td>
                </tr>
                `

            tasks.forEach(task=>{
                //console.log(tasks);
                template +=`
                <tr taskId="${task.id_vendedor}">
                <td></td>
                <td>
                <a href="#" class="task-item">${task.id_vendedor}</a>
                </td>
                <td>
                <a href="#" class="task-item">${task.nombre_vendedor}</a>
                </td>
                <td>${task.telefono}</td>
                <td>${task.email}</td>

                <td><button class="task-deleteseller btn btn-danger">Eliminar</button></td>
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
    $(document).on('click','.task-deleteseller', function(e){
                
        if(confirm("¿Deseas Eliminar el Vendedor Seleccionado?")){
            let element = $(this)[0].parentElement.parentElement;
            let id=$(element).attr('taskId');
            //console.log(id);
            
        $.post('procesos/eliminar-vendedor.php',{id},function(response){
            console.log(response);
            mostrarvendedores();
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
        $.post('procesos/mostrar-vendedores.php',{id},function(response){
            //console.log(response);
            const tasks = JSON.parse(response);
            //console.log(task.material);
            tasks.forEach(task=>{
            $('#nombrevendedor').val(task.nombre_vendedor);
            $('#telefono').val(task.telefono);
             $('#email').val(task.email);
            $('#idvendedor').val(task.id_vendedor);
           // document.getElementById('tipo').value=task.id_tipo_material;
            });
            //fetchTasks();
            e.preventDefault();
            edit = true;
          });
    
    
    })


    $('#task-form').submit(function(e){

        const postData ={
            
            idvendedor:$('#idvendedor').val(),
            nombrevendedor:$('#nombrevendedor').val(),
            telefono:$('#telefono').val(),
            email:$('#email').val()
    
       };

       let url = '';

       if(edit==true)
       url = 'procesos/editar-vendedor.php' ;
        else
       url = 'procesos/agregar-vendedor.php' ;
       

        $.post(url, postData, function (response) {
            console.log(response);
            $('#task-form').trigger('reset');
            $('#task-result').html("<b>" + response + "</b>");

            mostrarvendedores();
        });
        edit=false;
        e.preventDefault();

    });

  
});