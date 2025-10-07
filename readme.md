# 🔖 Bookmark Landing Page
Este proyecto es una implementación de una landing page moderna para un servicio de gestión de marcadores. Está desarrollado con un enfoque en la accesibilidad y la funcionalidad CSS-Only, eliminando la dependencia de JavaScript para las características clave de interacción.

## ✨ Características Principales
Diseño Responsivo: Implementación completa de Media Queries para asegurar una visualización óptima en dispositivos móviles, tabletas y escritorio.

Navegación Móvil: Menú de navegación tipo "hamburguesa" con funcionalidad de apertura y cierre (requiere el archivo main.js referenciado).

Estilos Modulares: Uso de clases e IDs claros para una fácil depuración y mantenimiento.

### 🛠️ Tecnologías Utilizadas
Este proyecto fue construido utilizando únicamente tecnologías fundamentales de la web.

HTML5: Estructura semántica del contenido, incluyendo elementos modernos como `<hgroup>`, `<figure>`, y atributos ARIA.

CSS3: Estilizado, diseño responsivo y la lógica completa para la funcionalidad de pestañas.

Git: Control de versiones del proyecto.

### 🚀 Cómo Empezar
Sigue estos pasos para obtener una copia local del proyecto y ejecutarla en tu máquina.

**Prerrequisitos**
No necesitas herramientas especiales, solo un navegador web moderno (Chrome, Firefox, Edge, Safari).

**Instalación**
Clona el repositorio (si está en Git) o descarga el código fuente:

**Bash**

git clone [https://github.com/blackfel666/bookmark-landing-page.git]
Navega al directorio del proyecto:

**Bash**

cd bookmark-landing-page
Abre el archivo index.html en tu navegador. Puedes hacerlo directamente desde tu explorador de archivos o usando la terminal:

**Bash**

start index.html 

**O para macOS/Linux:**

open index.html

### 📂 Estructura del Proyecto
La estructura del directorio es la siguiente:

```
├── index.html
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── ... (SVGs e iconos)
│   │       └── ... (Imágenes de la landing)
│   │
│   ├── js/
│   │   └── main.js
│   │
│   └── styles/
│       ├── abstracts/     <-- 1. HERRAMIENTAS Y VARIABLES
│       │   ├── _variables.scss  # Colores, tipografía y breakpoints ($)
│       │   └── _mixins.scss     # Mixins para media queries (@mixin)
│       │
│       ├── base/          <-- 2. ESTILOS BASE Y GLOBALES
│       │   ├── _reset.scss      # Estilos para *, body, y reseteo
│       │   └── _typography.scss # Estilos para h1, h2, h3, p, y reglas @font-face
│       │
│       ├── components/    <-- 3. ELEMENTOS REUTILIZABLES
│       │   ├── _buttons.scss    # Estilos de botones base (.boton)
│       │   └── _rrss-icons.scss # Estilos de los iconos de redes sociales (.icon-rrss)
│       │
│       ├── layout/        <-- 4. ESTRUCTURAS PRINCIPALES
│       │   ├── _header.scss     # Estilos de <header>, nav y menú móvil
│       │   └── _footer.scss     # Estilos de <footer> y navegación inferior
│       │
│       ├── pages/         <-- 5. SECCIONES ESPECÍFICAS
│       │   ├── _hero.scss       # Estilos de la sección principal (#simple-bookmark-manager)
│       │   ├── _features.scss   # Estilos de #features y la lógica del carrusel CSS-Only
│       │   ├── _faq.scss        # Estilos de la sección de preguntas (#faqs)
│       │   └── _contact.scss    # Estilos del formulario de contacto (#contact-us)
│       │
│       └── style.scss     # 📦 ARCHIVO MAESTRO: Importa todos los parciales anteriores
│
└── README.md
```

### ✍️ Autor
[Blackfel666 / Yohann Velasquez] - Desarrollo Front-End

### 📄 Licencia
Este proyecto está bajo la Licencia MIT - mira el archivo LICENSE.md (si tienes uno) para detalles.

### 💡 Próximos Pasos / Mejoras
Implementar SASS