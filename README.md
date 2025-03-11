# Amigo Secreto (Secret Friend)

## Descripción del Proyecto
Una aplicación web simple que permite a los usuarios agregar nombres de amigos a una lista y luego realizar un sorteo aleatorio para seleccionar un "amigo secreto". Esta aplicación puede ser útil para juegos de intercambio de regalos o actividades similares.

## Requerimientos
- Interfaz para agregar nombres de amigos a una lista
- Visualización de la lista de amigos agregados
- Funcionalidad para realizar un sorteo aleatorio entre los amigos agregados
- Mostrar el resultado del sorteo en la pantalla

## Funciones Implementadas

### `agregarAmigo()`
- Obtiene el nombre ingresado por el usuario en el campo de entrada
- Valida que el campo no esté vacío
- Agrega el nombre a la lista de amigos
- Actualiza la interfaz de usuario para mostrar la lista actualizada
- Limpia y enfoca el campo de entrada para facilitar la adición de más nombres

### `actualizarListaAmigos()`
- Limpia la lista de amigos mostrada en la interfaz de usuario
- Crea un elemento de lista para cada amigo en el array
- Muestra todos los amigos agregados en la interfaz de usuario

### `sortearAmigo()`
- Verifica que haya al menos un amigo en la lista
- Selecciona aleatoriamente a un amigo de la lista
- Muestra el resultado del sorteo en la interfaz de usuario

## Logros Alcanzados
- Implementación exitosa de la funcionalidad principal para agregar amigos y realizar sorteos
- Interfaz de usuario simple e intuitiva
- Validación de entrada para evitar nombres vacíos
- Experiencia de usuario mejorada con enfoque automático y limpieza del campo de entrada

## Instrucciones de Uso
1. Ingresa el nombre de un amigo en el campo de entrada
2. Haz clic en el botón para agregar el amigo a la lista
3. Repite los pasos 1 y 2 para agregar todos los amigos deseados
4. Haz clic en el botón de sorteo para seleccionar aleatoriamente a un amigo
5. El resultado del sorteo se mostrará en la pantalla
