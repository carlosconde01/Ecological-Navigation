# Ecological-Navigation
 
## Descripción del Proyecto

Ecological Navigation es un sistema público creado para una ciudad ecológica cuyo medio de transporte es la bicicleta. Cualquier persona puede donar su bici y agregarla al sistema así como consultar las existentes. Para realizar o consultar una reservación, se requiere que el usuario se registre, verifique su cuenta e inicie sesión.

## Instalación y ejecución
1. Ejecutar comando: npm i
2. Conectar la base de datos MongoDB puerto 27017
3. Ejecutar comando: npm run devstart

## Pruebas 
Con el proyecto en ejecución, usar el comando: npm run mochatest

## Nuevo usuario
1. Acceder a la sección de usuarios desde el menú principal
2. Seleccionar la opción de nuevo usuario
3. Llenar los campos nombre, email, contraseña
4. Dar click en OK
5. Abrir el correo electrónico y utilizar la liga recibida para verificar la cuenta.

## Inicio de sesión
1. Acceder a la sección de iniciar sesión desde el menú principal <br/>
IMPORTANTE: Si el usuario ya ha inciado sesión esa opción estará oculta <br/>
2. Introducir correo, contraseña y dar click en iniciar sesión <br/>
IMPORTANTE: Sólo podrán iniciar sesión usuarios que hayan sido verificados. Si Ethereal no se encuentra en funcionamiento es posible editar el campo verificado del usuario en cuestión a través de MongoDB Compass.

## Cierre de sesión
1. Con sesión iniciada, dar click en el botón de cerrar sesión del menú principal <br/>
IMPORTANTE: Si el botón de cerrar sesión no se visualiza, significa que está oculto pues el usuario no ha iniciado sesión

## Nueva bicicleta
1. Acceder a la sección de añadir bicicleta desde el menú principal
2. Llenar los campos código, color, modelo, latitud y longitud
3. Dar click en Add

## Consultar reservaciones
1. Con sesión iniciada, seleccionar la opción de consultar reservaciones desde el menú principal <br/>
IMPORTANTE: En caso de no haber iniciado sesión, se despliega un mensaje indicando que se requiere iniciar sesión para acceder a esta funcionalidad

## Reservar bicicleta
1. Con sesión iniciada, seleccionar la opción de reservar bicicleta desde el menú principal
2. Introducir el código de la bicicleta a reservar, el inicio y el fin de la reservación.
3. Dar click en Reservar <br/>
IMPORTANTE: En caso de no haber iniciado sesión, se despliega un mensaje indicando que se requiere iniciar sesión para acceder a esta funcionalidad

## Extra

Para realizar una reservación de bicicleta, el sistema verifica que se encuentre disponible. En caso de que haya sido reservada en el mismo periodo seleccionado, se desplegará un mensaje pidiendo al usuario que reserve otra bicicleta o que intente en otra fecha.




