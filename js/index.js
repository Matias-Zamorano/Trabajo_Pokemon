 
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

            //innerText= texto interno , muestra tal cual el codigo pot ejemplo si hay un espacio lo escribe en modo codigo
            tdNombre.innerText = p.nombre; //define al texto a esta zelda que esta guardado en el nro 2.
            tdTipo.innerText   = p.tipo;
            //TODO :(esto no lo voy hacer ahora pero si despues), esto no va funcionar a la primera
            tdDescripcion.innerHTML = p.descripcion;
            tdNro.innerText = i + 1;
            //TODO: como agrego un boton para las acciones?
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
    Swal.fire("Pokemon registrado correctamente!!");
});
