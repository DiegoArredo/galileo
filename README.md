# 🚀 Galileo Backend

> **Contexto Académico:** Backend desarrollado para la Escuela de Ingeniería de la Universidad Católica del Norte (UCN). Está diseñado bajo una arquitectura orientada a microservicios para demostrar escalabilidad, integraciones de terceros y comunicación entre servicios.
> **Equipo:** Maria Victoria, Diego Arredondo, Blaudio Vargas.

## 🎯 Descripción General

Galileo Backend contiene los servicios necesarios para una plataforma de educación en línea: gestión de usuarios, catálogo de cursos, carrito de compras, pagos, asistencia mediante Inteligencia Artificial y notificaciones.

## 🏗️ Arquitectura de Microservicios

Los servicios se comunican a través de GraphQL y colas de mensajería:

* **Users Service (NestJS):** Gestión de autenticación, registro y actualización de perfiles de usuario.
* **Courses Service (NestJS):** Administración del catálogo de cursos.
* **Cart & Payment Service (NestJS):** Gestión del carrito de compras e integración con Webpay (Transbank).
* **AI Bot Service (NestJS):** Asistencia inteligente mediante la API de GroqCloud.
* **Notification Service (Go):** Envío de correos electrónicos y otras notificaciones relacionadas con las transacciones.

```text
galileo-backend/
├── ai-bot-service/          # NestJS + GraphQL (IA)
├── users-service/           # NestJS + GraphQL + PostgreSQL
├── courses-service/         # NestJS + GraphQL
├── cart-service/            # NestJS + GraphQL
├── notification-service/   # Go + REST
└── README.md
```

## 💻 Stack Tecnológico

* **Backend:** NestJS (Node.js), Go.
* **Comunicación:** GraphQL, RabbitMQ.
* **Base de Datos:** PostgreSQL.
* **Integraciones:** Transbank (Webpay), GroqCloud API (IA).

## ⚡ Instalación y Despliegue Local

### Variables de Entorno

Copia el archivo de ejemplo y configura tus variables:

```bash
cp .env.example .env
# Edita .env con tus valores (credenciales, API keys, etc.)
```

Consulta [.env.example](./.env.example) para ver todas las variables disponibles.

### Servicios Node.js

Ejecuta estos comandos desde la raíz del repositorio:

```bash
cd ai-bot-service
npm install
npm run start:dev  # Puerto 3001
```

Repite el proceso para `users-service`, `courses-service` y `cart-service` (puertos 3002-3004).

### Notification Service (Go)

```bash
cd notification-service
go mod download
go run main.go  # Puerto 3005
```

## 🌐 Endpoints

| Servicio | URL |
|----------|-----|
| AI Bot GraphQL | http://localhost:3001/graphql |
| Users GraphQL | http://localhost:3002/graphql |
| Courses GraphQL | http://localhost:3003/graphql |
| Cart GraphQL | http://localhost:3004/graphql |
| Notifications | http://localhost:3005 |

## 📖 Documentación específica

* [ai-bot-service/README.md](./ai-bot-service/README.md)
* [users-service/README.md](./users-service/README.md)
* [courses-service/README.md](./courses-service/README.md)
* [cart-service/README.md](./cart-service/README.md)
* [notification-service/README.md](./notification-service/README.md)
