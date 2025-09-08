# 🔗 URL Shortener - Frontend

Una aplicación web moderna y responsive para acortar URLs, construida con **Astro** y **Tailwind CSS**.

## ✨ Características

- 🌐 **Interfaz moderna y responsive** - Funciona perfectamente en desktop y móvil
- 🎨 **Diseño con tonalidades verdes** - UI limpia y atractiva
- 📊 **Estadísticas de URLs** - Rastrea el número de accesos
- 🗑️ **Gestión de enlaces** - Elimina URLs cuando ya no las necesites
- 🔍 **Consulta de URLs existentes** - Busca estadísticas por código corto
- 📋 **Copia con un clic** - Botón para copiar URLs al portapapeles
- ⚡ **Carga rápida** - Optimizada para rendimiento

## 🚀 Funcionalidades

### Acortar URLs
- Ingresa cualquier URL larga
- Obtén un enlace corto instantáneamente
- Copia el enlace con un solo clic

### Ver Estadísticas
- Consulta cuántas veces se ha accedido a tu URL
- Ve la URL original y el código corto
- Información presentada de forma clara y visual

### Gestión de Enlaces
- Elimina URLs que ya no necesites
- Busca estadísticas de URLs existentes por código corto
- Interfaz intuitiva para todas las operaciones

## 🛠️ Tecnologías

- **[Astro](https://astro.build/)** - Framework web moderno
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utilitario
- **JavaScript Vanilla** - Para interactividad del lado del cliente
- **Fetch API** - Para comunicación con el backend

## 📋 Prerequisitos

- Node.js (versión 18 o superior)
- Backend API ejecutándose en `http://localhost:8080`

## 🚀 Instalación y Uso

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Arge2004/url-shortener-frontend.git
   cd shortener-ui
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   - Visita `http://localhost:4321`
   - ¡Comienza a acortar URLs!

## 📡 API Backend

La aplicación espera que el backend esté ejecutándose en `http://localhost:8080` con los siguientes endpoints:

- `POST /api/urls` - Crear URL corta
- `GET /api/urls/{shortCode}` - Obtener estadísticas
- `DELETE /api/urls/{shortCode}` - Eliminar URL
- `GET /{shortCode}` - Redireccionar a URL original

## 🎨 Diseño y UX

### Paleta de Colores
- **Verde principal**: `#16a34a` (green-600)
- **Verde hover**: `#15803d` (green-700)
- **Fondos verdes**: `#f0fdf4` (green-50)
- **Acentos**: Azul y púrpura para estadísticas

### Características de UX
- **Feedback visual** - Estados de carga y confirmaciones
- **Responsive design** - Mobile-first approach
- **Accesibilidad** - Contraste adecuado y navegación por teclado
- **Animaciones suaves** - Transiciones CSS para mejor experiencia

## 🔧 Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye para producción
npm run preview      # Previsualiza build de producción

# Utilidades
npm run astro        # Ejecuta comandos de Astro CLI
```

## 📱 Responsive Design

La aplicación está optimizada para:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)


