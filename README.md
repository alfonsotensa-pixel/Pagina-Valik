# VALIK | Pisos Industriales Sin Juntas (Región Bajío)

Landing page comercial B2B de alta conversión optimizada para **móviles, tablets y monitores de escritorio**, diseñada para captar directores de planta, inversionistas y propietarios industriales en **Querétaro, Guanajuato, San Luis Potosí y Aguascalientes**.

---

## 📱 Características Móviles y PWA (Progressive Web App)

- **Instalable en Móviles (PWA):** Compatible con la función *"Agregar a pantalla de inicio"* en iOS (Safari) y Android (Chrome).
- **Rendimiento Acelerado con Service Worker (`sw.js`):** Caché inteligente de assets locales para carga instantánea en conexiones 4G/5G en parques industriales.
- **Barra de Navegación y Menú Táctil:** Menú hamburguesa responsivo y botones de acción táctil optimizados.
- **Acceso Directo a WhatsApp:** Botón flotante y enlaces directos con plantilla de solicitud de cotización precargada.
- **Open Graph y Meta Tags:** Previsualizaciones completas con imagen, título y descripción al compartir por WhatsApp, LinkedIn y correo corporativo.

---

## 🚀 Cómo Subir y Publicar este Proyecto en tu Cuenta de GitHub

Tienes **dos opciones muy sencillas** para publicar este proyecto en tu cuenta de GitHub:

### Opción 1: Directo desde la web de GitHub (Sin instalar nada)

1. Ingresa a [GitHub.com](https://github.com/) e inicia sesión en tu cuenta.
2. Haz clic en el botón verde **"New"** para crear un nuevo repositorio.
3. Nómbralo: `pisos-industriales-bajio` (o el nombre que prefieras) y déjalo como **Público**.
4. Haz clic en **"Create repository"**.
5. En la pantalla que aparece, haz clic en **"uploading an existing file"**.
6. Arrastra y suelta todos los archivos y carpetas de esta carpeta:
   - `index.html`
   - `app.js`
   - `sw.js`
   - `manifest.json`
   - `robots.txt`
   - `sitemap.xml`
   - `README.md`
   - Carpeta `assets/` (con `assets/img/` y `assets/icons/`)
   - Carpeta `.github/`
7. Haz clic en el botón verde **"Commit changes"**.

---

### Opción 2: Usando Git desde la terminal / consola

Si tienes Git instalado en tu computadora, abre una terminal en esta carpeta y ejecuta:

```bash
# 1. Inicializar repositorio local
git init

# 2. Agregar todos los archivos
git add .

# 3. Crear el primer commit
git commit -m "feat: Landing page comercial B2B VALIK con soporte movil y PWA"

# 4. Renombrar la rama principal a main
git branch -M main

# 5. Conectar con tu repositorio de GitHub (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/pisos-industriales-bajio.git

# 6. Subir los archivos
git push -u origin main
```

---

## 🌐 Cómo Activar el Hosting Gratis en GitHub Pages

Una vez que tus archivos estén en tu repositorio de GitHub:

1. Entra a tu repositorio en GitHub y ve a la pestaña **Settings** (Configuración).
2. En el menú lateral izquierdo, haz clic en **Pages**.
3. En la sección **Build and deployment**:
   - **Source:** Selecciona `Deploy from a branch` (o `GitHub Actions`).
   - **Branch:** Selecciona `main` y la carpeta `/(root)`.
4. Haz clic en **Save**.
5. ¡Listo! En 1-2 minutos tu landing page estará disponible públicamente en una URL como:
   `https://TU_USUARIO.github.io/pisos-industriales-bajio/`

---

## 📂 Estructura del Proyecto

```text
pisos-postensados-bajio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Despliegue automatizado a GitHub Pages
├── assets/
│   ├── icons/
│   │   ├── favicon.svg           # Favicon vectorial de VALIK
│   │   ├── icon-192.svg          # Icono móvil PWA 192x192
│   │   └── icon-512.svg          # Icono móvil PWA 512x512
│   └── img/
│       └── piso-industrial-valik.jpg # Fotografía de alta resolución de nave
├── .gitignore                    # Exclusiones de control de versiones
├── app.js                        # Lógica interactiva (ROI, formulario, acordeón, Service Worker)
├── index.html                    # Landing page completa y responsiva
├── manifest.json                 # Web App Manifest para móviles
├── robots.txt                    # Configuración para motores de búsqueda
├── server.ps1                    # Servidor local ligero para pruebas
├── sitemap.xml                   # Mapa de sitio SEO
├── sw.js                         # Service Worker de alto rendimiento
└── README.md                     # Guía de publicación y documentación
```

---

## 🛠️ Tecnologías Utilizadas

- **HTML5 Semántico:** Estructura accesible y optimizada para SEO.
- **Tailwind CSS:** Diseño moderno, paleta corporativa y 100% responsivo.
- **Vanilla JavaScript (ES6+):** Lógica modular sin dependencias pesadas.
- **PWA & Service Worker:** Capacidad de instalación en móviles y caché sin conexión.
- **Vector Graphics (SVG):** Logotipos e iconografía nítida en pantallas retina.

---

© 2026 VALIK Bajío S.A. de C.V. Todos los derechos reservados.
