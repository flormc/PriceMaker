$('#login-button').click(function () {
  // Obtener los valores de email y password
  var email = $('#email').val();
  var password = $('#password').val();

  // Enviar solicitud AJAX al servidor para autenticar
  $.ajax({
    type: 'POST',
    url: 'localhost:3001/api/login',  // Reemplaza con tu ruta de inicio de sesión
    contentType: 'application/json',
    data: JSON.stringify({ email: email, password: password }),
    success: function (response) {
      // Manejar la respuesta exitosa
      console.log(response);

      // Aquí puedes redirigir o realizar otras acciones después del inicio de sesión exitoso
    },
    error: function (error) {
      // Manejar errores
      console.error(error);
    }
  });
});