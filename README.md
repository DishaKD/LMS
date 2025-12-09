# 📚 Library Management System

A full-stack CRUD-based Library Management System built using **.NET 8 Web API**, **Entity Framework Core**, **SQLite**, **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

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

# 🛠 Backend Setup

```bash
# 1️⃣ Restore Dependencies
dotnet restore

# 2️⃣ Add Initial Migration
dotnet ef migrations add InitialCreate

# 3️⃣ Update Database
dotnet ef database update

# 4️⃣ Run the Application
dotnet run


