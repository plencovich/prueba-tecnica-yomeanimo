## Laravel + Inertia con ReactJS

### Prueba técnica para Yomeanimo.com

#### Version 07.2024

### Instalación

1. Clonar Repo `git clone git@github.com:plencovich/prueba-tecnica-yomeanimo.git`

2. Ejecutar `npm install`

3. Ejecutar `composer install`

4. Copiar el arhivo `.env.example` por `.env` y configurar los datos de conexion a base de datos y otras variables necesarias.

5. Crea la key desde consola `php artisan key:generate`.

6. Crear el archivo de base de datos `touch database/database.sqlite`

7. Ejecutar las migraciones `php artisan migrate`

8. Ejecutar en localhost el projecto con `npm run dev` y luego `php artisan serve`
