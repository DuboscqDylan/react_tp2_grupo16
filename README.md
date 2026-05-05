# 🎧 Spoofify

Aplicación web desarrollada con React que permite explorar canciones, buscar música, ver detalles y gestionar una lista de favoritos.

---

## 📌 Descripción

Spoofify es una SPA (Single Page Application) que simula un reproductor de música.  
Permite a los usuarios descubrir canciones, filtrarlas dinámicamente y guardar sus favoritas.

La aplicación consume datos desde una API simulada (MockAPI) y cuenta con múltiples páginas conectadas mediante React Router.

---

## 🚀 Funcionalidades

- 🔎 Búsqueda dinámica en tiempo real
- ❤️ Sistema de favoritos con persistencia (LocalStorage)
- 🌍 Multi-idioma (Español / Inglés)
- 🌙 Modo oscuro
- 📜 Scroll infinito (paginación)
- 🎵 Página de detalles de canciones

---

## 🛠️ Tecnologías utilizadas

- React
- Tailwind CSS
- React Router DOM
- i18next (multi-idioma)
- MockAPI (API simulada)

---

## 📂 Estructura del proyecto

```bash
    public/
    ├── flags/
    ├── favicon.svg
    └── icons.svg
    src/
    ├── assets/
    ├── components/
    ├── contexts/
    ├── hooks/
    ├── pages/
    ├── services/
    ├── App.jsx
    ├── i18n.js
    └── main.jsx

```
---

## ⚙️ Instalación y ejecución

1. Clonar el repositorio:

```bash
    git clone https://github.com/DuboscqDylan/react_tp2_grupo16.git
```

2. Entrar al proyecto:

```bash
    cd react_tp2_grupo16
```

3. Instalar dependencias:
   
```bash
    npm install
#librería de iconos
    npm install lucide-react
#multi-idioma
    npm install i18next react-i18next
```

4. Ejecutar el proyecto:
```bash
   npm run dev
```

## 🌐 API utilizada

Se utilizó MockAPI para simular los datos:

```bash
    GET /song
    GET /song/:id
```

## 👩‍💻 Integrantes
    Cyntia Nasabun
    Lucas Gabriel Cerda
    Dylan Duboscq

## 📋 Notas

    Se utilizó LocalStorage para persistir favoritos y preferencias (idioma y tema).
    Se implementó búsqueda avanzada con múltiples criterios.
    La aplicación fue diseñada con enfoque responsive y experiencia de usuario.

## 📎 Repositorio

    👉 https://github.com/DuboscqDylan/react_tp2_grupo16

## 📎 Linear

    👉 [https://linear.app/pwa-cerda-duboscq/project/tp2-react-2e7cc94acbec/overview]

## 📎 Vercel

    👉 []