document.addEventListener("DOMContentLoaded", function() {
    const registroForm = document.getElementById("registroForm");

    registroForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;

        const formData = {
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fechaNacimiento
        };

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            alert("Registrado con èxito");
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error en el registro");
        });
    });
});