# School Library Management API

A RESTful API for managing a school library system, including books, authors, students, and borrowing operations, with JWT-based authentication for secure access.

![License](https://img.shields.io/badge/license-MIT-green)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Language](https://img.shields.io/badge/language-JavaScript-yellow)
![Framework](https://img.shields.io/badge/framework-Node.js-orange)

---

## Table of Contents

- Features
- Installation
- API Endpoints
- Environment Variables

---

## Project Information

- Author: asyncridwan
- Version: 1.0.0
- License: MIT
- API Documentation: https://documenter.getpostman.com/view/52602625/2sBXikpXNF
- Repository: https://github.com/asyncridwan/School-Libary-Managemet-API

---

## Features

- Manage books (create, update, delete, and view)
- Manage authors
- Manage students
- Manage library attendants
- Borrow and return books
- Track book availability status (IN / OUT)
- JWT-based authentication for protected routes
- Input validation for requests
- Relationship handling using MongoDB (authors, students, attendants)

---

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/asyncridwan/School-Libary-Managemet-API.git
cd School-Libary-Managemet-API
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables

1. **Create a `.env` file** in the root directory (same level as `package.json`)
2. **Copy the template** from `.env.example`:
```bash
cp .env.example .env
```

3. **Update the values** in your `.env` file with your own configuration:

```env
# Server Configuration
PORT=3000

# Database Configuration - Replace with your MongoDB connection string
MONGODB_URL=mongodb://localhost:27017/School_Libary_Management

# JWT Configuration - Generate a secure string (min 20 characters recommended)
JWT_SECRET=your_secret_key_here_change_this
```

**Important Notes:**
- `MONGODB_URL`: If using MongoDB locally, ensure MongoDB is running. For cloud, use MongoDB Atlas connection string (e.g., `mongodb+srv://username:password@cluster.mongodb.net/School_Libary_Management`)
- `JWT_SECRET`: Use a strong random string. You can generate one with: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
- Never commit the `.env` file to git (it's listed in `.gitignore`)

### 4. Start the Server

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Production mode**:
```bash
node server.js
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /login` - Login with credentials

### Authors
- `POST /authors` - Create author
- `GET /authors` - Get all authors
- `GET /authors/:id` - Get author by ID
- `PUT /authors/:id` - Update author
- `DELETE /authors/:id` - Delete author

### Books
- `POST /books` - Create book
- `GET /books` - Get all books
- `GET /books/:id` - Get book by ID
- `PUT /books/:id` - Update book
- `DELETE /books/:id` - Delete book

### Borrow and Return
- `POST /books/:id/borrow` - Borrow a book (Protected)
- `POST /books/:id/return` - Return a book (Protected)

### Students
- `POST /students` - Create student
- `GET /students` - Get all students
- `GET /students/:id` - Get student by ID

### Library Attendants
- `POST /attendants` - Create attendant
- `GET /attendants` - Get all attendants
