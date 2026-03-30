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

## 2.Install Dependencies
npm install

## 3. Start Server
node server.js

## API ENDPOINTS
Authentication
POST /login
Authors
POST /authors
GET /authors
GET /authors/:id
PUT /authors/:id
DELETE /authors/:id
Books
POST /books
GET /books
GET /books/:id
PUT /books/:id
DELETE /books/:id
Borrow and Return
POST /books/:id/borrow (Protected)
POST /books/:id/return (Protected)
Students
POST /students
GET /students
GET /students/:id
Library Attendants
POST /attendants
GET /attendants

## Environment variables 
3.Add Values to .env file 
```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
