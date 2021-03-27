$(document).ready(function(){

    $('#texto-cambio').on('click',function(){
        $(this).text(($(this).text() == 'No tienes cuenta? regístrate con nosotros aquí') ? 'Tienes cuenta? inicia sesión aquí' :'No tienes cuenta? regístrate con nosotros aquí');
        $('#login-div').slideToggle(300);
    });

});