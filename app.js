    // Array para almacenar los amigos
    const listaDeAmigos = [];
    
    function agregarAmigo(){
        // Obtener el valor del campo de entrada
        const inputAmigo = document.getElementById('amigo');
        const nombreAmigo = inputAmigo.value.trim();
        
        // Validar que el campo no esté vacío
        if(nombreAmigo === '') {
            alert('Por favor, ingresa un nombre válido');
            return;
        }
        
        // Agregar el nombre a la lista
        listaDeAmigos.push(nombreAmigo);
        
        // Actualizar la lista en la UI
        actualizarListaAmigos();
        
        // Limpiar el campo de entrada
        inputAmigo.value = '';
        
        // Enfocar el campo para agregar más nombres fácilmente
        inputAmigo.focus();
    }
    
    function actualizarListaAmigos() {
        const listaAmigosElement = document.getElementById('listaAmigos');
        listaAmigosElement.innerHTML = '';
        
        // Crear un elemento de lista para cada amigo
        listaDeAmigos.forEach(amigo => {
            const li = document.createElement('li');
            li.textContent = amigo;
            listaAmigosElement.appendChild(li);
        });
    }
    
    function sortearAmigo() {
        // Verificar que haya al menos un amigo en la lista
        if(listaDeAmigos.length === 0) {
            alert('Agrega al menos un amigo para realizar el sorteo');
            return;
        }
        
        // Seleccionar un amigo aleatorio
        const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        const amigoSeleccionado = listaDeAmigos[indiceAleatorio];
        
        // Mostrar el resultado
        const resultadoElement = document.getElementById('resultado');
        resultadoElement.textContent = `El amigo secreto sorteado es: ${amigoSeleccionado}`;
    }