;
document.addEventListener("DOMContentLoaded", function() {
    
    const boton = document.getElementById("boton1");
    
    boton.addEventListener("click", function() {
        
        window.location.href = "Index.html"; 
    });
    
});
document.addEventListener("DOMContentLoaded", function() {
    // Cambiamos "tocame" por "boton2" que es el ID real de tu HTML
    const botonRegresar = document.getElementById("boton"); 
    
    botonRegresar.addEventListener("click", function() {
        window.location.href = "Index.html"; // Abajo te explico por qué cambié el nombre de este archivo
    });
});
document.addEventListener("DOMContentLoaded", function() {
    
    const boton = document.getElementById("tocame");
    
    boton.addEventListener("click", function() {
        
        window.location.href = "Index.html"; 
    });
    
});
document.addEventListener("DOMContentLoaded", function() {
    
    const boton = document.getElementById("boton1");
    
    boton.addEventListener("click", function() {
        
        window.location.href = "index2.html";
    });
    
});


document.getElementById("formulario-falso").addEventListener("submit", function(event) {
            event.preventDefault(); 
            
            
            const nombreUsuario = document.getElementById("usuario").value;
            
            
            alert("¡Cuenta creada con éxito!\n\nBienvenido a la comunidad, " + nombreUsuario + ". Redirigiendo a la página principal...");
            window.location.href = "index.html"; 
        });
        document.addEventListener("DOMContentLoaded", function() {
    // 1. Buscamos el ID exacto que existe en Papa.html
    const botonRegresar = document.getElementById("boton3");

    // 2. Verificamos que el botón realmente exista antes de darle una acción
    if (botonRegresar) {
        botonRegresar.addEventListener("click", function() {
            // 3. Colocamos el nombre EXACTO de tu página principal
            window.location.href = "Index.html"; 
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Cambiamos "tocame" por "boton2" que es el ID real de tu HTML
    const botonRegresar = document.getElementById("boton"); 
    
    botonRegresar.addEventListener("click", function() {
        window.location.href = "Index.HTML.html"; // Abajo te explico por qué cambié el nombre de este archivo
    });
});