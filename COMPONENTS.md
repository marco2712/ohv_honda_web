# Arquitectura de Componentes - OHV HONDA

## Estructura de Componentes React

```
frontend/src/
├── components/          # Componentes reutilizables
│   ├── Navbar.jsx      # Barra de navegación principal
│   ├── Hero.jsx        # Sección hero con video
│   ├── BusinessLines.jsx # Líneas de negocio (tarjetas)
│   ├── AboutUs.jsx     # Sección sobre nosotros
│   ├── Stats.jsx       # Estadísticas y cobertura
│   ├── Footer.jsx      # Pie de página
│   └── Chatbot.jsx     # Asistente virtual
│
├── pages/              # Páginas principales (para futuro)
│
├── hooks/              # Custom hooks
│   └── useScrollReveal.js # Hook para animaciones de scroll
│
├── styles/             # Estilos globales
│   └── globals.css     # CSS personalizado y animaciones
│
├── App.jsx             # Componente raíz
└── main.jsx            # Punto de entrada
```

## Detalles de Componentes

### 1. **Navbar** (Barra de Navegación)
- Logotipo OHV HONDA
- Enlaces de navegación responsivos
- Toggle de modo oscuro/claro
- Carrito de compras
- Perfil de usuario
- Menú móvil colapsable

**Props:**
- `darkMode: boolean` - Estado del modo oscuro
- `setDarkMode: function` - Función para cambiar modo

**Características:**
- Sticky position
- Efecto glass-morphism
- Responsive design

---

### 2. **Hero** (Sección Principal)
- Video de fondo con overlay
- Título principal (waterfall animation)
- Subtítulo y descripción
- Dos botones CTA (Call-to-Action)
- Número de sección (01)

**Características:**
- Video responsive
- Animaciones de entrada
- Gradiente técnico
- Altura variable

---

### 3. **BusinessLines** (Líneas de Negocio)
- Dos tarjetas principales:
  - Accesorios
  - Repuestos Honda
- Grid responsivo (1 columna móvil, 2 columnas desktop)
- Efecto hover en imágenes
- Enlace CTA en cada tarjeta

**Características:**
- Card design moderno
- Imágenes con grayscale toggle
- Animaciones de reveal
- Texto descriptivo

---

### 4. **AboutUs** (Sobre Nosotros)
- Imagen editorial (sticky)
- Badge EST. 2012
- Sección de identidad
- Grid de características (2 columnas)
- Quote/testimonio
- Iconos con Material Symbols

**Características:**
- Layout Bento
- Sticky positioning
- Multiple reveal animations
- Contenedor con quote destacado

---

### 5. **Stats** (Estadísticas)
- Título principal
- Grid de 4 estadísticas
- Números grandes
- Mapa de cobertura nacional
- Botón de llamada a acción

**Estadísticas:**
- 32 Departamentos Cubiertos
- 400+ Socios Activos
- 12k SKUs Únicos
- 99% Precisión de Entrega

---

### 6. **Footer** (Pie de Página)
- Logo y descripción
- Enlaces rápidos (3 secciones)
- Enlaces legales
- Información de contacto
- Horario de operación
- Redes sociales
- Copyright

**Secciones:**
- Información de empresa
- Enlaces Rápidos
- Legal
- Contacto

---

### 7. **Chatbot** (Asistente Virtual)
- Botón flotante
- Ventana de chat expandible
- Historial de mensajes
- Input de texto
- Respuestas automáticas
- Avatar del asistente

**Características:**
- Animación suave
- Estado de apertura/cierre
- Scroll automático
- Respuesta simulada

---

### 8. **useScrollReveal** (Custom Hook)
Hook personalizado para animaciones de scroll.

**Uso:**
```javascript
import { useScrollReveal } from './hooks/useScrollReveal'

export default function MyComponent() {
  useScrollReveal()
  return <div className="reveal-on-scroll">Contenido</div>
}
```

**Características:**
- Intersection Observer
- Animaciones suaves
- Eficiente en performance

---

## Flujo de Datos

```
App
├── Navbar (darkMode state)
├── Hero
├── BusinessLines
├── AboutUs
├── Stats
├── Footer
└── Chatbot (messages state)
```

## Estilos Globales

### Animaciones
- `reveal-on-scroll` - Aparición al desplazarse
- `fade-in-scroll` - Desvanecimiento al desplazarse
- `waterfall-text` - Caída de caracteres
- Delays: `delay-100`, `delay-200`, `delay-300`

### Colores Principales
- Primary: `#98001b` (Rojo Honda)
- Secondary: `#5f5e5e` (Gris)
- Tertiary: `#614504` (Marrón)
- Surface: `#f7fafd` (Blanco azulado)

### Tipografía
- Headline: Manrope (800, 700, 400)
- Body: Inter (400, 500, 600)
- Label: Inter (400, 500, 600)

---

## Integración con API

Los componentes pueden consumir datos de la API:

```javascript
// Ejemplo
const response = await axios.get('/api/products')
```

**Endpoints disponibles:**
- `GET /api/products` - Lista de productos
- `GET /api/products/:id` - Producto específico
- `POST /api/products` - Crear producto
- `GET /api/health` - Estado del servidor

---

## Performance Optimizations

- ✅ Code splitting con Vite
- ✅ Lazy loading de componentes
- ✅ Optimización de imágenes
- ✅ Minificación automática
- ✅ Caching eficiente

---

## Testing

Para agregar tests:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

Ubicar tests junto a componentes con extensión `.test.jsx`

---

## Próximos Pasos

- [ ] Página de productos detallada
- [ ] Carrito de compras
- [ ] Sistema de autenticación
- [ ] Base de datos MongoDB
- [ ] Integración de pagos
- [ ] Dashboard de administrador
- [ ] Notificaciones en tiempo real

