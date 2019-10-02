# Angularcrud

# Importancia de los contenedores
 los contenedores permiten a un desarrollador empaquetar una aplicación con todas las partes que necesita para funcionar, como bibliotecas y otras dependencias, y enviarla en un solo paquete. Al hacerlo, el desarrollador puede estar seguro de que la aplicación se ejecutará en cualquier otra máquina, independientemente de las configuraciones personalizadas que la máquina pueda tener que puedan diferir de la máquina utilizada para escribir y probar el código.

 # Uso de contenedores
Eficiencia de C,I
Compatibilidad y mantenibilidad,
Despliegue continuo y pruebas,
Plataformas multi-nube,
Seguridad


## Ejecutar aplicacion

Correr `ng serve -o` para ejecutar Angular.

## Ejecutar server en Docker

Estando enla raiz del proyecto angularcrud, correr `cd /api` para cambiar a la carpeta api conde estan los servicios.

`docker-compose build` para vrear el paquete de ejecucion con als imagenes
y `docker-compose up` para levartar los servicios.

## Consumir servicio de la API Estudiantes

En Postman consumir la API `localhost:4000/student/` para obtener la coleccion de Estudiantes.

Consumir `localhost:4000/student/add` para aguardar un estudiante:

Ejemplo:

`{
	"student_name":"Aurelio",
	"courses":[{"matematicas":5}, {"ingles":3},{"español":4}],
	"email_student":"aure@g.com",
	"id_student":"231343"
}`



## Link a repositorio

 [Repositorio](https://github.com/JohnaGaleano/node-angular-docker-mongodb).