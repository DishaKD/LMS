# 📚 Library Management System

A full-stack CRUD-based Library Management System built using **.NET 10 Web API**, **Entity Framework Core**, **SQLite**, **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Tech Stack

### **Backend**
- .NET 10  
- Entity Framework Core  
- SQLite  

### **Frontend**
- React + Vite  
- TypeScript  
- Tailwind CSS  

---

## ✅ Features

### **Backend**
- REST API with CRUD operations  
- Automatic DB creation using EF Core Migrate  
- Clean layered architecture:
  - Controller → Service → Repository → Database

### **Frontend**
- View all books  
- Add books  
- Edit books  
- Delete books  

---


---

# Backend Setup

```bash
# Naviagte to Backend
cd LMS-Backend

# Restore Dependencies
dotnet restore

# Add Initial Migration
dotnet ef migrations add InitialCreate

# Update Database
dotnet ef database update

# Run the Application
dotnet run

```

# Frontend Setup

```bash
# Naviagte to Backend
cd library-frontend

# Install Dependencies
npm install

# Run the Application
npm run dev

```

