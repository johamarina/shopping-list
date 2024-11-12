# Proyecto Lista de Compras

## Descripción del Proyecto

El proyecto "Lista de Compras" permite gestionar listas de compras: crear, editar, eliminar y marcar artículos. Además, el sistema notifica en tiempo real cuando ocurren cambios en la lista, proporcionando una experiencia interactiva.

## Tecnologías

- **Backend**: Node.js con Express
- **API en Tiempo Real**: Node.js con Socket.IO
- **Base de datos**: MySQL

## Características Principales

### Gestión de Artículos:

- Crear, ver, editar y eliminar artículos.
- Marcar artículos como comprados.

### Notificaciones en Tiempo Real:

- Notificación instantánea cuando se añaden, editan o eliminan artículos.

## Endpoints (CRUD)

- **GET /items**: Obtener todos los artículos.
- **POST /items**: Crear un artículo.
- **PUT /items/:id**: Editar un artículo.
- **DELETE /items/:id**: Eliminar un artículo.

## API en Tiempo Real (Node.js + Socket.IO)

### Eventos:

- **itemAdded**: Notificar cuando se agrega un artículo.
- **itemUpdated**: Notificar cuando se actualiza un artículo.
- **itemDeleted**: Notificar cuando se elimina un artículo.

## Instrucciones de Ejecución

Configurar el archivo **.env**

Copia el archivo **.env.dist** a un nuevo archivo llamado **.env** en el directorio.
Rellena las variables de entorno en el archivo .env con los datos de conexión de la base de datos.

**Modo Desarrollo**

```bash
yarn dev
```

**Modo Producción**

```bash
yarn start
```
