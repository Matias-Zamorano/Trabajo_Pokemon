 
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
    console.log(pokemones);

});
