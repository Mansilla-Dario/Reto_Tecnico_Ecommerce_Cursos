
# Reto Técnico para Backend Developer

En este repositorio encontrará mi desarrollo para el reto técnico que se me ha asignado. 
La propuesta se desarrolló a partir del STACK PERN, utilizando postgresql para la base de datos, Express y Node.js para el backend y servidor; React js para el frontend y conexiones mediante AXIOS
### 
#
## API Reference para AUTORES

#### Obtener  datos todos los autores

```http
  GET /api/authors
```
|  Description                |
| :------------------------- |
| Responde con los datos de los autores en la base de datos |

#### Crear nuevo autor

```http
  POST /api/authors/
```
| Parameter | Description                |
| :-------- | :------------------------- |
| `firstName` | **Required**. Recibe el String para el Nombre del autor |
| `lastName` | **Required**. Recibe el string para el apellido del autor |
| `email` | **Required**. Recibe el email del autor |
| `website` | **Required**. Recibe el website del autor |

#### Obtener los datos de un autor específico

```http
  GET /api/authors/:id
```

#### Actualizar  los datos de un autor específico

```http
  PUT /api/authors/:id
```

| Parameter | Description                |
| :-------- | :------------------------- |
| `firstName` |  Recibe el String para el Nombre del autor |
| `lastName` |  Recibe el string para el apellido del autor |
| `email` |  Recibe el email del autor |
| `website` |Recibe el website del autor |

#### Eliminar todos los datos de un autor específico

```http
  DELETE /api/authors/:id
```

## API Reference para Usuarios

#### Obtener  datos todos los usuarios

```http
  GET /api/users
```

|  Description                |
| :------------------------- |
|Responde con los datos de los usuarios en la base de datos |


#### Crear nuevo usuario

```http
  POST /api/users/
```

| Parameter | Description                |
| :-------- | :------------------------- |
| `firstName` | **Required**. Recibe el String para el Nombre del usuario |
| `lastName` | **Required**. Recibe el string para el apellido del usuario |
| `email` | **Required**. Recibe el email del usuario |
| `password` | **Required**. Recibe el password para el inicio de este usuario en el frontend |
| `adminRole` | **Required**.BOLEANO que permitirá evaluar si el usuario debe tener o no acceso a las opciones de BackOffice |

#### Obtener los datos de un usuario específico

```http
  GET /api/users/:id
```


#### Actualizar  los datos de un usuario específico

```http
  PUT /api/users/:id
```

| Parameter | Description                |
| :-------- | :------------------------- |
| `firstName` |  Recibe el String para el Nombre del usuario |
| `lastName` |  Recibe el string para el apellido del usuario |
| `email` |  Recibe el email del usuario |
| `password` |  Recibe el password para el inicio de este usuario en el frontend |
| `adminRole` | BOLEANO que permitirá evaluar si el usuario debe tener o no acceso a las opciones de BackOffice |

#### Eliminar todos los datos de un autor específico

```http
  DELETE /api/authors/:id
```

## API Reference para CURSOS

#### Obtener  datos todos los cursos

```http
  GET /api/courses
```
|  Description                |
| :------------------------- |
| Responde con los datos de los cursos en la base de datos |

#### Crear nuevo autor

```http
  POST /api/courses/
```
| Parameter | Description                |
| :-------- | :------------------------- |
| `courseName` | **Required**. Recibe el String para el Nombre del curso |
| `summary` | **Required**. Recibe el string para la descripción del curso |
| `authors_id` | **Required**. Recibe el id del autor al que se vinculará en una relacion de uno a muchos |

#### Obtener los datos de un curso específico

```http
  GET /api/courses/:id
```

#### Actualizar  los datos de un autor específico

```http
  PUT /api/courses/:id
```
| Parameter | Description                |
| :-------- | :------------------------- |
| `courseName` | Recibe el String para el Nombre del curso |
| `summary` |  Recibe el string para la descripción del curso |
| `authors_id` |  Recibe el id del autor al que se vinculará en una relacion de uno a muchos |

#### Eliminar todos los datos de un curso específico

```http
  DELETE /api/courses/:id
```
## API Reference para UserCourses

#### Tabla de relación muchos a muchos entre usuarios y cursos

#### Agregar  un Curso y Usuario a la relación

```http
  POST /api/ad-course
```

| Parameter | Description                |
| :-------- | :------------------------- |
| `userID` | **Required**. Recibe el id del Usuario a vincular|
| `courseID` | **Required**. Recibe el id del Autor a vincular  |
| `rating` | Recibe la puntuación que deja el usuario (por defecto queda en cero si no se recibe) |

#### Obtener todos los datos de esta tabla para un usuario determinado or su ID
```http
  GET /api/courses-rating
```
| Parameter | Description                |
| :-------- | :------------------------- |
| `userID` | **Required**. Recibe el id del usuario a consultar|


#### Elimina una relacion de la tabla a partir de los parámetros enviados
```http
  DELETE /api/users-added
```
| Parameter | Description                |
| :-------- | :------------------------- |
| `userID` | **Required**. Recibe el id del Usuario para comparar|
| `courseID` | **Required**. Recibe el id del Curso para comparar|


#### Obtener todos los datos de la tabla muchos a muchos entre usuarios y cursos
```http
  GET /api/courses-rating
```

#### Obtener el promedio de puntuacion que tiene un curso
```http
  POST /api/courses-rating
```
| Parameter | Description                |
| :-------- | :------------------------- |
| `courseID` | **Required**. Recibe el id del Curso para comparar|

## PENDIENTES
No logré finalizar el 100% de lo que me hubiera gustado, por lo que dejo listado a continuacion algunos pendientes por realizar.
- Cargar la imagen del thumbnail de cada curso a aws mediante s3 y guardar la url de cada imagen en ta tabla CURSOS para poder utilizarla y/o actualizarla.
- El loging se forzó a true con la variable de estado "userActive" en app.js del cliente. Esta variable debería modificarse mediante el loging consultando hacia el backend y recibiendo un token para el inicio o mantenimiento de la sesión.
- Existe una variable en la base de datos de cada usuario denominada "adminRole", esta se debería enviar en el token desde el backen para poder evaluar si el usuario debe o no tener acceso a la seccion de BackOffice.
- Debería crear un loader ante la carga por peticiones al backend para que el usuario no se quede esperando sin conocer que sucede.
- Debo utilizar los "try/catch" y ante errores de consulta al servidor ofrecerle una respuesta al usuario o derivarlo a una página de "error 500"
- Me hubiera gustado subir la base de datos creada a un S3 o servicio remoto para hostear las tablas.


