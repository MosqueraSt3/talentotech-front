# Talento Tech

Este proyecto es una aplicación web que permite la gestión de reservas de hotel. Está diseñado con un enfoque de arquitectura **Atomic Design** para asegurar una experiencia escalable y mantenible. El proyecto utiliza tecnologías modernas y está creado con **Vite** para un entorno de desarrollo rápido y eficiente.

---

## Tabla de Contenido

- [Acerca del Proyecto](#acerca-del-proyecto)
- [Instalación](#instalación)
- [Arquitectura](#arquitectura)
- [Dependencias y Paquetes Importantes](#dependencias-y-paquetes-importantes)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Scripts de Desarrollo](#scripts-de-desarrollo)

---

## Acerca del Proyecto

El **Hotel Reservation System** permite a los usuarios gestionar la creación, lectura, actualización y eliminación (CRUD) de reservas en hoteles. La aplicación está diseñada para ser amigable con el usuario y con un flujo de navegación intuitivo, ideal tanto para usuarios como administradores.

Características principales:

- Registro de usuarios.
- Gestión de reservas (CRUD).
- Visualización y filtrado de reservas.
- Interfaz amigable y responsive.

El sistema es útil tanto para huéspedes que desean realizar o consultar sus reservas como para administradores que necesitan gestionar disponibilidad y confirmaciones.

---

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-username/hotel-reservation-system.git
   cd hotel-reservation-system
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Configura las variables de entorno**

4. **Inicia el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

   Esto abrirá la aplicación en tu navegador en `http://localhost:3000/`.

---

## Arquitectura

Este proyecto sigue el enfoque de **Atomic Design** para mantener la separación de componentes y promover el desarrollo escalable y mantenible.

- **Atoms**: Los componentes más básicos, como botones, inputs, etc.
- **Molecules**: Combinación de varios `atoms` para crear componentes más complejos como formularios o listas.
- **Organisms**: Composiciones más grandes que agrupan moléculas para formular secciones completas como el formulario de registro o la lista de reservas.
- **Templates**: Páginas compuestas por organismos y molecules, como la página de inicio o la página de administración.

---

## Dependencias y Paquetes Importantes

1. **Vite**: Herramienta de construcción ligera y moderna.
2. **React**: Biblioteca para el desarrollo de interfaces de usuario.
3. **Bootstrap**: Framework CSS para diseño responsivo y componentes reutilizables.
4. **Date-fns**: Utilizado para la manipulación de fechas en el sistema.
5. **Axios**: Para manejar peticiones HTTP.
6. **React Router**: Para la gestión de rutas y navegación en la aplicación.

---

## Estructura del Proyecto

```
/src
  /assets         # Recursos estáticos (imágenes, etc.)
  /components     # Componentes Atómicos, Moleculares y Orgánicos
    /atoms
    /molecules
    /organisms
    /templates
  /services       # Lógica de servicios y API (axios requests)
  /pages          # Páginas principales de la aplicación
  /utils          # Utilidades y funciones genéricas
  App.jsx         # Punto de entrada del proyecto
  main.jsx        # Configuración de Vite y entrada
  index.html      # Archivo HTML principal
  index.css       # Estilo global de la aplicación
```

---

## Scripts de Desarrollo

- **`npm run dev`**: Inicia el servidor de desarrollo y compila los archivos en tiempo real.
- **`npm run build`**: Compila el proyecto para producción.
- **`npm run preview`**: Abre la aplicación desplegada en un entorno de producción.
- **`npm test`**: Ejecuta las pruebas del proyecto.
