# 🚀 Galileo E-Learning Platform

> **Contexto Académico:** Proyecto desarrollado para la Escuela de Ingeniería de la Universidad Católica del Norte (UCN). Diseñado bajo una arquitectura orientada a microservicios para demostrar escalabilidad, integraciones de terceros y comunicación entre servicios.
> **Equipo:** Maria Victoria, Diego Arredondo, Blaudio Vargas.

[👉 AQUÍ UN GIF PRINCIPAL: Muestra un recorrido rápido de 5 segundos navegando por la vista principal de cursos y entrando al detalle de uno]

---

## 🎯 Descripción General

**Galileo E-Learning** es una plataforma de educación en línea diseñada para facilitar la exploración, compra y acceso a cursos digitales. El sistema permite a los estudiantes gestionar su perfil, navegar por un catálogo interactivo, utilizar un carrito de compras con pagos seguros y recibir asistencia mediante Inteligencia Artificial.

---

## 🏗️ Arquitectura de Microservicios

Para asegurar la modularidad y escalabilidad, el backend fue dividido en responsabilidades específicas, comunicándose a través de GraphQL y colas de mensajería:

* **Users Service (NestJS):** Gestión de autenticación, registro y actualización de perfiles de usuario (nombre, profesión, país).
* **Courses Service (NestJS):** Administra el catálogo completo, permitiendo la creación y visualización de cursos con detalles como precio, categoría y profesor.
* **Cart & Payment Service (NestJS):** Gestiona el ciclo de vida del carrito de compras y la integración con la pasarela de pagos Webpay (Transbank).
* **AI Bot Service (NestJS):** Proporciona asistencia inteligente integrada al frontend, utilizando la API de GroqCloud para responder preguntas frecuentes y recomendar cursos.
* **Notification Service (Go):** Microservicio ligero escrito en Go que envía correos electrónicos con el resumen de la transacción una vez finalizada la compra.

```
galileo-project/
├── frontend/              # React 18 + TypeScript
├── services/              # Microservicios
│   ├── ai-bot-service/    # NestJS + GraphQL (IA)
│   ├── users-service/     # NestJS + GraphQL + PostgreSQL
│   ├── courses-service/   # NestJS + GraphQL
│   ├── cart-service/      # NestJS + GraphQL
│   └── notification-service/ # Go + REST
└── README.md
```

---

## 💻 Stack Tecnológico

* **Frontend:** React 18, TypeScript, Apollo Client (para consumo de GraphQL), React Router.
* **Backend:** NestJS (Node.js), Go.
* **Comunicación:** GraphQL, RabbitMQ (para comunicación asíncrona entre Carrito, Cursos y Pagos).
* **Base de Datos:** PostgreSQL.
* **Integraciones:** Transbank (Webpay), GroqCloud API (IA).

---

## ✨ Funcionalidades Principales

1. **Catálogo y Carrito Dinámico:** Exploración de cursos y gestión de compras con actualizaciones de estado mediante mutaciones de GraphQL.
2. **Checkout Seguro:** Integración de pasarela de pago y validación de transacciones.
3. **Asistente IA:** Panel de chat flotante en la interfaz para resolver dudas de los estudiantes en tiempo real.
4. **Dashboard de Usuario:** Panel "Mi Cuenta" para editar el perfil, revisar el historial de compras y acceder a los cursos adquiridos.

[👉 AQUÍ UN GIF DEL CARRITO Y PAGO: Un clip corto agregando un curso al carrito y mostrando la vista del historial de compras]
[👉 AQUÍ UN GIF DEL CHATBOT: Un clip de 3-4 segundos abriendo el panel flotante de IA y recibiendo una respuesta]

---

## ⚡ Instalación y Despliegue Local

### Variables de Entorno
Copia el archivo de ejemplo y configura tus variables:
```bash
cp .env.example .env
# Edita .env con tus valores (credenciales, API keys, etc.)
```
Ver [.env.example](./.env.example) para referencia de todas las variables disponibles.

### Frontend
```bash
cd frontend
npm install
npm start  # Puerto 3000
```

### Servicios Node.js
```bash
cd services/ai-bot-service
npm install
npm run start:dev  # Puerto 3001
# Repetir para otros servicios (3002-3004)
```

### Notification Service (Go)
```bash
cd services/notification-service
go mod download
go run main.go  # Puerto 3005
```

## 🌐 Accesos

| Servicio | URL |
|----------|-----|
| Frontend | http://localhost:3000 |
| AI Bot GraphQL | http://localhost:3001/graphql |
| Users GraphQL | http://localhost:3002/graphql |
| Courses GraphQL | http://localhost:3003/graphql |
| Cart GraphQL | http://localhost:3004/graphql |
| Notifications | http://localhost:3005 |

## 📖 Ver documentación específica en cada carpeta

- [frontend/README.md](./frontend/README.md)
- [services/ai-bot-service/README.md](./services/ai-bot-service/README.md)
- [services/users-service/README.md](./services/users-service/README.md)
- [services/courses-service/README.md](./services/courses-service/README.md)
- [services/cart-service/README.md](./services/cart-service/README.md)
- [services/notification-service/README.md](./services/notification-service/README.md)
