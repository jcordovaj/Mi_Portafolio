$(document).ready(function () {
    $('#contactForm').validate({
        rules: {
            nombre: {
                required: true,
                maxlength: 50
            },
            apellido: {
                required: true,
                maxlength: 50
            },
            telefono: {
                required: true,
                pattern: /^\+\d{2} \d \d{8}$/
            },
            mensaje: {
                required: true,
                maxlength: 1000
            },
            tipoRequerimiento: {
                required: true
            },
            correo: {
                required: true,
                email: true
            }
        },
        submitHandler: function (form) {
            const formData = {
                nombre: $('#nombre').val(),
                apellido: $('#apellido').val(),
                telefono: $('#telefono').val(),
                mensaje: $('#mensaje').val(),
                tipoRequerimiento: $('#tipoRequerimiento').val(),
                correo: $('#correo').val()
            };
            // Submit the form using AJAX or other methods
            $.ajax({
                type: 'POST',
                url: '/submit', // The URL where the data will be sent
                data: JSON.stringify(formData),
                contentType: 'application/json',
                success: function (response) {
                    alert('Data submitted successfully');
                },
                error: function (error) {
                    alert('An error occurred');
                }
            });
        }
    });
});