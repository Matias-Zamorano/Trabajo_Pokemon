 
tinymce.init({
    selector: '#descripcion-txt', //El selector es el el cuadrado de escritura que se guarda como textarea// 
    height: 200,//ve el largo del cuadrado de texto//
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

  const pokemones=[]; // definicion de un arreglo en javascript
  const eliminar = function(){
      
    //1.Saber que boton fue el que se apreto 
    console.log(this.nro);
    //2.Sacar el nro del boton
    let nro = this.nro;

    //3.Eliminar el pokemon de la lista
     pokemones.splice(nro,1);

    //4.Recargar la tabla 
    cargarTabla();
  }


  const cargarTabla=()=>{
        //1.Una referencia a la tabla , conectar la tabla con los datos
        let tbody = document.querySelector("#tbody-pokemon"); //# el gato representa id , tambien se podria buscar con . en el caso que estuviera adentro de algo
        
        //Antes del for es limpiar la tavla para que no se repitan las consultas
        tbody.innerHTML="";

        //2.Por cada pokemon generar una fila (por cada uno de los elementos que i parte en la posicion 0,mientras que i sea menor  que la lista de los pokemos anda agregando 1)
        for(let i=0; i < pokemones.length; ++ i){
            let p = pokemones[i];
            
                
            //Puedo crear cualquier etiqueta html aqui (h1,table,td,tr,etc...)
             //Crea un elemento que no existe, pero no lo agrega a la pagina
            let tr=document.createElement("tr");
            //3.Por cada atributo de los pokemon (nombre,tipo,etc..) generar una celda
            let tdNombre=document.createElement("td");
            let tdTipo=document.createElement("td");
            let tdDescripcion =document.createElement("td");
            let tdNro=document.createElement("td");
            let tdAcciones=document.createElement("td");

            //TODO :(esto no lo voy hacer ahora pero si despues)
            //innerText= texto interno , muestra tal cual el codigo pot ejemplo si hay un espacio lo escribe en modo codigo
            tdNombre.innerText = p.nombre; //define al texto a esta zelda que esta guardado en el nro 2.
            
            //esto mostraria el icono en ves de un numero al momento de elegir el tipo de pokemon
            let icono = document.createElement("i");
            //Si elige el 1  agregar el icono agua o :
            if(p.tipo == "1"){
                icono.classList.add("fas","fa-tint","text-primary","fa-2x");//<i class="fas fa-tint"></i>
            
            //En el caso de que eliga el 2 agregar el icono fuego 
            } else if (p.tipo == "2"){
                icono.classList.add("fas","fa-burn","text-danger","fa-2x");//<i class="fas fa-burn"></i>

            //En el caso de que eliga el 3 agregar el icono planta
            } else if (p.tipo == "3"){
                icono.classList.add("fas","fa-leaf","text-success","fa-2x");//<i class="fas fa-leaf"></i>
            
            //En el caso de que eliga el 4 agregar el icono electro
            }else{
                icono.classList.add("fas","fa-bolt","text-warning","fa-2x");//<i class="fas fa-bolt"></i>
            }
            tdTipo.classList.add("text-center");
            tdTipo.appendChild(icono);
            
            tdDescripcion.innerHTML = p.descripcion;
            tdNro.innerText = i + 1;

            //como agrego un boton para las acciones?
            let boton = document.createElement("button");   // Creo el boton
            boton.nro = i;                                  // guardar cualquier cosa en un elemento HTML
            boton.addEventListener("click",eliminar)         // al apretar el click dara un funcion que es eliminar
            boton.innerText = "Enviar al profe oak";        // Agrego informacion al boton
            boton.classList.add("btn","btn-danger")         // Hace que el boton sea rojo
            tdAcciones.classList.add("text-center");        // Hace que el mensaje este centrado
            tdAcciones.appendChild(boton);                  // Agrego el boton al td

            //como hacer que el boton se elimine ? 


            tr.appendChild(tdNro);
            tr.appendChild(tdNombre);
            tr.appendChild(tdTipo);
            tr.appendChild(tdDescripcion);
            tr.appendChild(tdAcciones);   
            tbody.appendChild(tr);
            
        } 

      
        
        //4.Agregar esa fila a la tabla (manipulando el DM)
    };

    //document = es un hacer una referencia al ducumento web compledo.
    //query...=busca adentro de la pagina si existe tal id.
    //addevent...= es un funcion que ademas es  escuchador que si lo encuentra lo reproduzca.
    //listener es un escuchardor de un evento por ejemplo cuando la persona mande el formulario//

document.querySelector("#pokemon-form").addEventListener('submit',(e)=>{
    e.preventDefault();//Previene que el formulario recargue la pagina

    let nombre=document.querySelector("#nombre-txt").value;//LET para definir para una variable
    let descripcion=tinymce.get("descripcion-txt").getContent();
    let legendario= document.querySelector("#legendario-si").checked;
    let tipo= document.querySelector("#tipo-select").value;

    //console.log es para mostrar los datos por el inspector al dar click derecho
    //console.log("hola mi rey",nombre,descripcion,legendario,tipo);//

    let pokemon={};
    pokemon.nombre=nombre;
    pokemon.descripcion=descripcion;
    pokemon.legendario=legendario;
    pokemon.tipo=tipo;
    pokemones.push(pokemon);
    cargarTabla();

             //titulo de ventana , texto que va en el cuerpo y el tipo signo que aparecera en el mensaje
    Swal.fire("Registro existoso","Pokemon registrado correctamente!!","success");
});
