# 🚀 Galileo Project

Monorepo con arquitectura de microservicios. Frontend en React y 5 servicios backend (NestJS + Go).

## 📚 Estructura

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

## 🛠️ Stack

- **Frontend**: React 18, TypeScript, Axios, React Router
- **Backend**: NestJS (Node.js), Go, GraphQL, PostgreSQL
- **Testing**: Jest

## ⚡ Instalación

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
