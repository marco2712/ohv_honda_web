# Guía de Desarrollo

## Requisitos Previos
- Node.js 14+ 
- npm o yarn

## Configuración Inicial

### 1. Backend Setup
```bash
cd backend
npm install
```

Crea un archivo `.env` con las variables requeridas:
```
PORT=5000
NODE_ENV=development
```

### 2. Frontend Setup
```bash
cd frontend
npm install
```

## Desarrollo

### Ejecutar ambos servidores

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Accede a la aplicación en `http://localhost:3000`

## Estructura de Componentes

### Componentes Principales

**Navbar.jsx**
- Barra de navegación responsiva
- Toggle de modo oscuro
- Menú móvil

**Hero.jsx**
- Sección principal con video
- Llamadas a acción
- Animaciones de bienvenida

**BusinessLines.jsx**
- Tarjetas de productos
- Grid responsivo
- Efectos hover

**AboutUs.jsx**
- Sección de identidad
- Características principales
- Quote de la empresa

**Stats.jsx**
- Estadísticas nacionales
- Mapa de cobertura
- Números clave

**Footer.jsx**
- Enlaces rápidos
- Información de contacto
- Información legal

**Chatbot.jsx**
- Asistente virtual
- Mensajería en tiempo real
- Interfaz flotante

## API

### Endpoints Disponibles

#### GET /api/health
Verifica el estado del servidor.

**Response:**
```json
{
  "status": "OK",
  "message": "Servidor de OHV HONDA activo"
}
```

#### GET /api/products
Obtiene la lista de todos los productos.

**Response:**
```json
{
  "success": true,
  "data": [...],
  "count": 2
}
```

#### GET /api/products/:id
Obtiene un producto específico.

#### POST /api/products
Crea un nuevo producto.

**Body:**
```json
{
  "name": "Producto",
  "category": "accesorios",
  "description": "Descripción",
  "price": 0
}
```

## Hooks Personalizados

### useScrollReveal()
Hook para animaciones de scroll.

```javascript
import { useScrollReveal } from './hooks/useScrollReveal'

export default function MyComponent() {
  useScrollReveal()
  
  return <div className="reveal-on-scroll">Contenido</div>
}
```

## Estilos

- **Tailwind CSS** - Framework principal
- **Custom CSS** - Animaciones personalizadas en `globals.css`
- **Colores personalizados** - Definidos en el config de Tailwind

## Despliegue

### Backend
```bash
npm run build
npm start
```

### Frontend
```bash
npm run build
```

Los archivos compilados estarán en `dist/`

## Troubleshooting

### Puerto ya está en uso
```bash
# Cambiar puerto en vite.config.js o backend .env
```

### Problema de CORS
- Verificar que CORS está habilitado en Express
- Verificar proxy en vite.config.js

### Problemas con módulos
```bash
rm -rf node_modules package-lock.json
npm install
```

## Performance

- Lazy loading de componentes
- Optimización de imágenes
- Code splitting automático con Vite
- Minificación en producción

## SEO

- Meta tags en index.html
- Contenido semántico
- Estructura heading correcta
- Alt text en imágenes

---

¡Listo para desarrollar! 🚀
