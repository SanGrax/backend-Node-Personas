# Backend CRUD para Personas

## Configuración e Instalación

1. Clonar este repositorio.
2. Instalar las dependencias con `npm install`.
3. Configurar la conexión a MongoDB en `config/db.js`.
4. Ejecutar el servidor con `npm start` o `npm run dev` (con nodemon).

## Uso

- **Crear Persona:** `POST /personas`
- **Obtener Todas las Personas:** `GET /personas`
- **Obtener Persona por ID:** `GET /personas/:id`
- **Actualizar Persona:** `PUT /personas/:id`
- **Eliminar Persona:** `DELETE /personas/:id`

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
