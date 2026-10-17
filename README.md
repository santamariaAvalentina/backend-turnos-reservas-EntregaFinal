# Backend Turnos y Reservas — Entrega Final

## Descripción del proyecto

Este proyecto consiste en el desarrollo de una API REST para la gestión de servicios y reservas de un sistema de turnos. Permite administrar servicios disponibles, crear y consultar reservas, asociar servicios existentes a las reservas y consultar la información relacionada entre ambas entidades.

El proyecto fue desarrollado con Node.js, Express y MongoDB, utilizando Mongoose para la persistencia de datos. También incorpora validaciones con Zod, vistas con Handlebars y comunicación en tiempo real mediante Socket.io.

## Tecnologías utilizadas

- **Node.js:** entorno de ejecución de JavaScript.
- **Express:** framework para desarrollar la API REST.
- **MongoDB Atlas:** base de datos NoSQL en la nube.
- **Mongoose:** modelado de datos y conexión con MongoDB.
- **Zod:** validación de los datos recibidos por la API.
- **Handlebars:** motor de plantillas para renderizar vistas.
- **Socket.io:** comunicación en tiempo real.
- **HTML:** estructura del contenido de las vistas.
- **CSS:** estilos y presentación visual, incluyendo el uso de SVG para gráficos vectoriales.
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
- Aplicar paginación a los resultados.
- Ordenar los resultados de las consultas.

### Gestión de reservas

- Crear reservas.
- Consultar todas las reservas.
- Consultar una reserva por su ID.
- Actualizar reservas.
- Modificar parcialmente una reserva.
- Eliminar reservas.
- Asociar servicios existentes a una reserva.
- Registrar la cantidad de cada servicio asociado.
- Consultar los servicios asociados mediante `populate`.

Las reservas almacenan referencias a los servicios mediante `ObjectId` y la cantidad correspondiente (`quantity`), evitando guardar el objeto completo del servicio.

### Validaciones

Se utiliza Zod para validar los datos de entrada antes de realizar las operaciones correspondientes en la base de datos.

### Vistas con Handlebars

El proyecto incorpora vistas para consultar servicios y reservas desde el navegador mediante el motor de plantillas Handlebars.

### Comunicación en tiempo real

Se utiliza Socket.io para implementar la comunicación en tiempo real relacionada con los servicios.

## Arquitectura del proyecto

El proyecto está organizado en capas para separar responsabilidades y facilitar el mantenimiento del código.

- **Routes:** definen las rutas y los endpoints de la API.
- **Controllers:** reciben las solicitudes HTTP y gestionan las respuestas.
- **Services:** contienen la lógica de negocio.
- **Repositories:** centralizan las operaciones de acceso a los datos.
- **DAO:** gestionan las consultas a la base de datos.
- **Models:** definen los esquemas y modelos de Mongoose.
- **Views:** contienen las plantillas de Handlebars.
- **Public:** contiene los archivos estáticos del proyecto.

## Instalación y ejecución

### Requisitos previos

Para ejecutar el proyecto se necesita:

- Node.js y npm instalados.
- Una cuenta de MongoDB Atlas.
- Una base de datos configurada y accesible en MongoDB Atlas.

### 1. Clonar el repositorio

```bash
git clone https://github.com/santamariaAvalentina/backend-turnos-reservas-EntregaFinal.git
```

### 2. Ingresar a la carpeta del proyecto

```bash
cd backend-turnos-reservas-EntregaFinal
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Configurar las variables de entorno

Crear un archivo `.env` en la raíz del proyecto, tomando como referencia el archivo `.env.example`.

Configurar las variables necesarias para la ejecución del servidor y la conexión con MongoDB Atlas.

Ejemplo del archivo `.env.example`:

```env
PORT=
NODE_ENV=
MONGO_URI=
```

**Importante:** completar las variables en el archivo `.env` local con los valores correspondientes. No publicar ese archivo ni compartir credenciales de acceso a la base de datos.

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
| GET | Consultar servicios con filtros, paginación y ordenamiento |
| GET | Consultar un servicio por ID |
| POST | Crear un servicio |
| PUT | Actualizar un servicio |
| PATCH | Modificar parcialmente un servicio |
| DELETE | Eliminar un servicio |

Los filtros y las opciones de consulta se reciben mediante parámetros de consulta (*query params*).

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

Para asociar un servicio a una reserva se utiliza la siguiente ruta:

`POST /api/bookings/:bid/services/:sid`

Los parámetros `:bid` y `:sid` representan el ID de la reserva y el ID del servicio, respectivamente.

## Colección de Postman

La colección de Postman contiene las solicitudes organizadas para probar los endpoints de servicios y reservas.

Incluye solicitudes para consultar, crear, actualizar, modificar parcialmente y eliminar recursos, así como para asociar servicios a las reservas.

**Enlace a la colección pública de Postman:**

[Ver colección Backend Turnos - Reservas](https://www.postman.com/santamaria-a-valentina-8613001/backend-turnos-reservas/collection/57536360-2062334a-a0c3-48fb-807d-c695cb856c77?action=share&source=copy-link&creator=57536360)

Para ejecutar las solicitudes contra la API, es necesario que el servidor esté iniciado y que las variables de entorno estén configuradas correctamente.

## Repositorio de GitHub

El código fuente del proyecto se encuentra disponible en el siguiente repositorio público:

[Ver repositorio Backend Turnos y Reservas — Entrega Final](https://github.com/santamariaAvalentina/backend-turnos-reservas-EntregaFinal)

## Autora

**Andrea Valentina Santamaria**

Proyecto realizado como parte de la formación en desarrollo Backend.
