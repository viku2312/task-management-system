# Task Management System

A full-stack Task Management System built using Node.js, Express.js, MongoDB, React.js, and JWT Authentication.

## Features

### Authentication
- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Authentication
- Protected Routes

### Role Based Access
- User Role
- Admin Role
- Authorization Middleware

### Task Management
- Create Task
- Read Tasks
- Update Task
- Delete Task

### Frontend
- React.js
- React Router DOM
- Axios API Integration
- Login Page
- Register Page
- Dashboard

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose ODM
- JWT Authentication
- Middleware Based Security

---

# Tech Stack

## Frontend
- React.js
- Vite
- Axios
- React Router DOM

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs

---

# Project Structure

```text
Task-Management-System
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── validators
│   │   └── utils
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── index.html
│   └── package.json
│
└── README.md
```

---

# Installation

## Backend Setup

```bash
cd backend

npm install

npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# Environment Variables

Create `.env` file inside backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# API Endpoints

## Authentication

### Register

```http
POST /api/v1/auth/register
```

### Login

```http
POST /api/v1/auth/login
```

---

## Tasks

### Get All Tasks

```http
GET /api/v1/tasks
```

### Create Task

```http
POST /api/v1/tasks
```

### Update Task

```http
PUT /api/v1/tasks/:id
```

### Delete Task

```http
DELETE /api/v1/tasks/:id
```

---

# Security Features

- JWT Authentication
- Password Hashing
- Protected APIs
- Role Based Authorization
- Input Validation
- Error Handling Middleware

---

# Scalability Notes

This project follows a modular MVC architecture.

Future scalability improvements:

- Redis Caching
- Docker Deployment
- Nginx Load Balancing
- Microservices Architecture
- CI/CD Pipeline
- Kubernetes Deployment

---

# Testing

The APIs were tested using:

- Thunder Client
- Postman

---

# Author

Vivek Kumar

Backend Developer Internship Assignment


