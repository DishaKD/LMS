# 📚 Library Management System

A full-stack CRUD-based Library Management System built using **.NET 8 Web API**, **Entity Framework Core**, **SQLite**, **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Tech Stack

### **Backend**
- .NET 8 Web API  
- Entity Framework Core  
- SQLite  

### **Frontend**
- React + Vite  
- TypeScript  
- Tailwind CSS  
- Axios  

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

# 🛠 Backend Setup

### **1️⃣ Install EF Core Tools**
```bash
dotnet tool install --global dotnet-ef
dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet run

