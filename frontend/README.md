# 🎨 Frontend - React Application

Interfaz de usuario en React 18 para Galileo Project.

## 📦 Instalación

```bash
cd frontend
npm install
```

## 🚀 Ejecución

```bash
npm start  # Puerto 3000
```

## 🛠️ Tech Stack

- React 18
- TypeScript
- React Router v6
- Axios
- Jest + React Testing Library

## 📝 Scripts

- `npm start` - Desarrollo (hot reload)
- `npm run build` - Producción
- `npm test` - Tests
- `npm run eject` - Expone configuración

## 🔗 Consumir APIs

Los servicios están en puertos locales:
- AI Bot: `http://localhost:3001/graphql`
- Users: `http://localhost:3002/graphql`
- Courses: `http://localhost:3003/graphql`
- Cart: `http://localhost:3004/graphql`
- Notifications: `http://localhost:3005`

Usa Axios o Apollo Client para conectar.