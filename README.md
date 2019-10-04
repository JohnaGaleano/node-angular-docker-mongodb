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

## Consumir servicios de la API Estudiantes

* En Postman consumir la API `localhost:4000/student/` para obtener la coleccion de Estudiantes.

* Consumir `localhost:4000/student/add` para agregar un estudiante:

	Ejemplo estudiante 1:

	{
	"student_name":"venicio",
	"courses":{
		"math":5, 
	"english":3,
	"history":4, 
	"physics":3
	},
		"id_student":"23524",
		"student": true,
		"enrollment": 200000
}

	Ejemplo estudiante 2:

	{
	"student_name":"argelio",
	"courses":{
		"math":3, 
	"english":4,
	"history":3.5, 
	"physics":4
	},
		"id_student":"36343",
		"student": true,
		"enrollment": 342000

}


* Para el promedio de notas de un curso de debe consumir `http://localhost:4000/student/score/:course` donde course seria el campo de busqueda, ejemplo con los registros de los dos estudiantes anteriores:

	`http://localhost:4000/student/score/math`
	Resultado: 
	`4`
* Para actualizar varios registros se debe consumir `http://localhost:4000/student/enrollment/:quantity`
 en este ejemplo se actualiza el valor de la matricula para todos los estudiantes activos de la BD:
	 ejemplo:
	 `http://localhost:4000/student/enrollment/20000`


## Link a repositorio

 [Repositorio](https://github.com/JohnaGaleano/node-angular-docker-mongodb).