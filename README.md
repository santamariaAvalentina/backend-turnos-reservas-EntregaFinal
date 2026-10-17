# Backend Turnos y Reservas

## Descripción del proyecto

Este proyecto consiste en el desarrollo de una API REST para la gestión de servicios y reservas de un sistema de turnos. Permite realizar operaciones CRUD (crear, consultar, actualizar y eliminar) sobre servicios y reservas, gestionar la asociación entre ambos y consultar información relacionada.

El proyecto fue desarrollado con Node.js, Express y MongoDB, utilizando Mongoose para la interacción con la base de datos. También incorpora validaciones con Zod, vistas con Handlebars y comunicación en tiempo real mediante Socket.io.

## Tecnologías utilizadas

- **Node.js:** entorno de ejecución de JavaScript.
- **Express:** framework para desarrollar la API REST.
- **MongoDB Atlas:** base de datos NoSQL en la nube.
- **Mongoose:** modelado de datos y conexión con MongoDB.
- **Zod:** validación de datos recibidos por la API.
- **Handlebars:** motor de plantillas para renderizar vistas.
- **Socket.io:** comunicación en tiempo real.
- **Postman:** pruebas de los endpoints de la API.
- **Git y GitHub:** control de versiones y almacenamiento del código fuente.

## Funcionalidades principales

### Gestión de servicios

- Crear servicios.
- Consultar todos los servicios.
- Consultar un servicio por su ID.
- Actualizar servicios.
- Modificar parcialmente un servicio.
- Eliminar servicios.
- Filtrar servicios por categoría y disponibilidad.
- Aplicar paginación.
- Ordenar los resultados de las consultas.

### Gestión de reservas

- Crear reservas.
- Consultar todas las reservas.
- Consultar una reserva por su ID.
- Actualizar reservas.
- Modificar parcialmente una reserva.
- Eliminar reservas.
- Asociar servicios a una reserva.
- Definir la cantidad de cada servicio asociado.
- Consultar los servicios asociados a una reserva mediante `populate`.

### Validaciones

Se utiliza Zod para validar los datos recibidos en las solicitudes antes de procesarlos.

### Vistas con Handlebars

El proyecto incorpora vistas para consultar servicios y reservas desde el navegador.

### Actualización en tiempo real

Se utiliza Socket.io para comunicar actualizaciones de los servicios en tiempo real.

## Arquitectura del proyecto

El proyecto está organizado en capas para separar las responsabilidades y facilitar el mantenimiento del código.

- **Routes:** definen las rutas y los endpoints.
- **Controllers:** reciben las solicitudes y gestionan las respuestas HTTP.
- **Services:** contienen la lógica de negocio.
- **Repositories:** centralizan las operaciones de acceso a los datos.
- **DAO:** gestionan las consultas a la base de datos.
- **Models:** definen los esquemas de Mongoose.
- **Views:** contienen las plantillas de Handlebars.
- **Public:** contiene los archivos estáticos del proyecto.

## Instalación y ejecución

### Requisitos previos

Para ejecutar el proyecto se necesita tener instalado:

- Node.js.
- npm.
- Una cuenta y una base de datos configurada en MongoDB Atlas.

### 1. Clonar el repositorio

```bash
git clone https://github.com/santamariaAvalentina/backend-turnos-reservas-preentrega8.git
```

### 2. Ingresar a la carpeta del proyecto

```bash
cd backend-turnos-reservas-preentrega8
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Configurar las variables de entorno

Crear un archivo `.env` en la raíz del proyecto y configurar las variables necesarias para la conexión con MongoDB Atlas y el puerto del servidor.

**Importante:** no compartir las credenciales de la base de datos ni subir el archivo `.env` al repositorio.

### 5. Iniciar el servidor

```bash
npm start
```

El servidor utiliza el puerto `8080`, según la configuración del proyecto.

## Endpoints de la API

### Servicios

Ruta base: `/api/services`

| Método HTTP | Operación |
|---|---|
| GET | Consultar todos los servicios, con filtros, paginación y ordenamiento |
| GET | Consultar un servicio por ID |
| POST | Crear un servicio |
| PUT | Actualizar un servicio |
| PATCH | Modificar parcialmente un servicio |
| DELETE | Eliminar un servicio |

### Reservas

Ruta base: `/api/bookings`

| Método HTTP | Operación |
|---|---|
| GET | Consultar todas las reservas |
| GET | Consultar una reserva por ID |
| POST | Crear una reserva |
| PUT | Actualizar una reserva |
| PATCH | Modificar parcialmente una reserva |
| DELETE | Eliminar una reserva |
| POST | Asociar un servicio a una reserva |

Para asociar un servicio a una reserva se utiliza la ruta:

`POST /api/bookings/:bid/services/:sid`

Los parámetros `:bid` y `:sid` representan, respectivamente, el ID de la reserva y el ID del servicio.

## Colección de Postman

La colección contiene las solicitudes organizadas para probar los endpoints de servicios y reservas, incluyendo los métodos GET, POST, PUT, PATCH y DELETE, según corresponda.

**Enlace a la colección pública de Postman:**

[Ver colección Backend Turnos - Reservas en Postman](https://www.postman.com/santamaria-a-valentina-8613001/backend-turnos-reservas/collection/57536360-2062334a-a0c3-48fb-807d-c695cb856c77?action=share&source=copy-link&creator=57536360)

Para ejecutar las solicitudes contra la API, el servidor debe estar iniciado y las variables de entorno necesarias deben estar configuradas.

## Repositorio de GitHub

El código fuente del proyecto se encuentra disponible en el siguiente repositorio:

[Ver repositorio Backend Turnos y Reservas en GitHub](https://github.com/santamariaAvalentina/backend-turnos-reservas-preentrega8)

## Autora

**Andrea Valentina Santamaria**

Proyecto realizado como parte de la formación en desarrollo Backend