# 🔔 Notification Service

Sistema de notificaciones en tiempo real: Email, SMS y Push.

## 🚀 Instalación

```bash
cd services/notification-service
go mod download
```

## ⚡ Ejecución

```bash
go run main.go          # Desarrollo - Puerto 3005
go build
./notification-service  # Producción
```

## 🌐 REST API

```
POST http://localhost:3005/api/notify
POST http://localhost:3005/api/email
POST http://localhost:3005/api/sms
```

## 📋 Variables de Entorno

```env
PORT=3005
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-password
TWILIO_ACCOUNT_SID=xxx
TWILIO_AUTH_TOKEN=xxx
```

## 🧪 Tests

```bash
go test ./...
go test -v ./...
```
