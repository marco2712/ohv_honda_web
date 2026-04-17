# OHV HONDA - Aplicación React y Node.js

Una aplicación web moderna y responsiva para OHV HONDA, un importador certificado de repuestos y accesorios automotrices.

## 📋 Estructura del Proyecto

```
ohv-honda-app/
├── backend/                   # Servidor Node.js/Express
│   ├── src/
│   │   ├── server.js         # Punto de entrada del servidor
│   │   ├── routes/           # Rutas API
│   │   ├── controllers/      # Lógica de negocio
│   │   └── models/           # Modelos de datos
│   ├── package.json
│   └── .env
│
├── frontend/                  # Aplicación React
│   ├── src/
│   │   ├── components/       # Componentes reutilizables
│   │   ├── pages/           # Páginas principales
│   │   ├── hooks/           # Custom hooks
│   │   ├── styles/          # Estilos globales
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/              # Assets estáticos
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
└── README.md
```

## 🛠️ Tecnologías

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **CORS** - Middleware para manejo de CORS
- **dotenv** - Gestión de variables de entorno

### Frontend
- **React 18** - Librería UI
- **Vite** - Build tool moderno
- **Tailwind CSS** - Framework CSS
- **React Router DOM** - Enrutamiento
- **Axios** - Cliente HTTP

## 🚀 Instalación

### Backend

```bash
cd backend
npm install
npm run dev
```

El servidor se ejecutará en `http://localhost:5000`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

La aplicación se ejecutará en `http://localhost:3000`

## 📦 Componentes Principales

### Frontend Components
- **Navbar** - Barra de navegación con soporte para modo oscuro
- **Hero** - Sección principal con video de fondo
- **BusinessLines** - Tarjetas de productos (Accesorios y Repuestos)
- **AboutUs** - Sección sobre la empresa
- **Stats** - Estadísticas de cobertura nacional
- **Footer** - Pie de página con contacto
- **Chatbot** - Asistente virtual

### API Endpoints

- `GET /api/health` - Verificar estado del servidor
- `GET /api/products` - Obtener todos los productos
- `GET /api/products/:id` - Obtener producto por ID
- `POST /api/products` - Crear nuevo producto

## 🎨 Características

- ✅ Diseño responsivo
- ✅ Modo oscuro/claro
- ✅ Animaciones de desplazamiento
- ✅ Chatbot interactivo
- ✅ API REST moderna
- ✅ Gestión de estado con React Hooks
- ✅ Enrutamiento con React Router

## 🔧 Variables de Entorno

### Backend (.env)
```
PORT=5000
NODE_ENV=development
API_URL=http://localhost:5000
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
```

## 📝 Scripts Disponibles

### Backend
```bash
npm run dev      # Iniciar en modo desarrollo
npm start        # Iniciar en modo producción
```

### Frontend
```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Compilar para producción
npm run preview  # Ver build de producción
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu característica
3. Commit los cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📞 Contacto

**OHV HONDA**
- Dirección: Cr15 8 40, Cali, Valle del Cauca
- Horario: LUN-VIE: 9:00 AM - 5:30 PM
- Email: contacto@ohvhonda.com

---

**Desarrollado con ❤️ para OHV HONDA**
