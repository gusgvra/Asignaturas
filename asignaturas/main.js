var url = "bd/crud.php";

var appAsignatura = new Vue({    
el: "#appAsignaturas",   
data:{     
     Asignaturas:[],          
     Asignaturas:"",
     Nota:"",
     semestre:"",
     total:0,       
 },    
methods:{  
    //BOTONES        
    btnAlta:async function(){                    
        const {value: formValues} = await Swal.fire({
        title: 'NUEVO',
        html:
        '<div class="row"><label class="col-sm-3 col-form-label">Nota</label><div class="col-sm-7"><input id="Nota" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Asignatura</label><div class="col-sm-7"><input id="Asignatura" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">semestre</label><div class="col-sm-7"><input id="semestre" type="number" min="0" class="form-control"></div></div>',              
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Guardar',          
        confirmButtonColor:'#1cc88a',          
        cancelButtonColor:'#3085d6',  
        preConfirm: () => {            
            return [
              this.Asignatura = document.getElementById('Asignatura').value,
              this.Nota = document.getElementById('Nota').value,
             this.semestre = document.getElementById('semestre').value                    
            ]
          }
        })        
        if(this.Asignatura == "" || this.Nota == "" || this.semestre == 0){
                Swal.fire({
                  type: 'info',
                  title: 'Datos incompletos',                                    
                }) 
        }       
        else{          
          this.altaMovil();          
          const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            Toast.fire({
              type: 'success',
              title: '¡Producto Agregado!'
            })                
        }
    },           
    btnEditar:async function(id, Asignatura, Nota, semestre){                            
        await Swal.fire({
        title: 'EDITAR',
        html:
        '<div class="form-group"><div class="row"><label class="col-sm-3 col-form-label">Asignatura</label><div class="col-sm-7"><input id="Asignatura" value="'+Asignatura+'" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Nota</label><div class="col-sm-7"><input id="Nota" value="'+Nota+'" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">semestre</label><div class="col-sm-7"><input id="semestre" value="'+semestre+'" type="number" min="0" class="form-control"></div></div></div>', 
        focusConfirm: false,
        showCancelButton: true,                         
        }).then((result) => {
          if (result.value) {                                             
            Asignatura = document.getElementById('Asignatura').value,    
            Nota = document.getElementById('Nota').value,
            semestre = document.getElementById('semestre').value,                    
            
            this.editarMovil(id,Asignatura,Nota,semestre);
            Swal.fire(
              '¡Actualizado!',
              'El registro ha sido actualizado.',
              'success'
            )                  
          }
        });
        
    },        
    btnBorrar:function(id){        
        Swal.fire({
          title: '¿Está seguro de borrar el registro: '+id+" ?",         
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor:'#d33',
          cancelButtonColor:'#3085d6',
          confirmButtonText: 'Borrar'
        }).then((result) => {
          if (result.value) {            
            this.borrarMovil(id);             
            //y mostramos un msj sobre la eliminación  
            Swal.fire(
              '¡Eliminado!',
              'El registro ha sido borrado.',
              'success'
            )
          }
        })                
    },       
    
    //PROCEDIMIENTOS para el CRUD     
    listarAsignaturas:function(){
        axios.post(url, {opcion:4}).then(response =>{
           this.Asignaturas = response.data;       
        });
    },    
    //Procedimiento CREAR.
    altaMovil:function(){
        axios.post(url, {opcion:1, Asignatura:this.Asignatura, Nota:this.Nota,semestre:this.Semestre }).then(response =>{
            this.listarAsignaturas();
        });        
         this.Asignatura = "",
         this.Nota = "",
         this.semestre = 0
    },               
    //Procedimiento EDITAR.
    editarMovil:function(id,Asignatura,Nota,semestre){       
       axios.post(url, {opcion:2, id:id, Asignatura:Asignatura, Nota: Nota, semestre:semestre }).then(response =>{           
           this.listarMoviles();           
        });                              
    },    
    //Procedimiento BORRAR.
    borrarAsignatura:function(id){
        axios.post(url, {opcion:3, id:id}).then(response =>{           
            this.listarAsignaturas();
            });
    }             
},      
created: function(){            
   this.listarAsignaturas();            
},    
computed:{
    totalStock(){
        this.total = 0;
        for(Asignatura of this.Asignaturas){
            this.total = this.total + parseInt(Asignatura.semestre);
        }
        return this.total;   
    }
}    
});