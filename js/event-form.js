const eventNombre = document.querySelector('#nombre');
const eventEmail = document.querySelector('#email');
const eventMensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

//Validando formulario

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const {nombre, email, mensaje} = datos;

if(nombre === '' || email === '' || mensaje === '' ){
    mostrarError('Todos los campos son obligatorios');

    return;

}else{

    mostrarEnviado('Enviado satisfactoriamente');
}

});


function leerTexto(e){
    datos[e.target.id] = e.target.value;
}

//Mostrar Error en pantalla

function mostrarError(mensaje){

    const error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 3000);

}

//Mostar que se envio correctamente

function mostrarEnviado(mensaje){

    const enviado = document.createElement('p');
    enviado.textContent = mensaje;
    enviado.classList.add('enviar')
    formulario.appendChild(enviado);

    setTimeout(() => {
        enviado.remove();
    }, 3000);
}
