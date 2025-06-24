#  Course Management System

A full-stack web application where users can browse, enroll, and manage courses. Built using MERN stack, this project demonstrates practical implementation of JWT authentication, Firebase auth, protected routes, MongoDB operations, and modern frontend design.

## Live Site
🔗 [Live Website](https://course-management-system-4bb8d.web.app)

---

## Purpose

This project is a complete Course Management Platform that allows:
- Users to register, login (with email or social login), and enroll in courses.
- Admin users to add, edit, delete and manage courses.
- Each course has a seat limit, and users can enroll in a maximum of 3 courses at a time.
- All interactions are protected with JWT and private routes.

---

## Technology Stack

### Frontend:

- React.js
- Tailwind CSS
- DaisyUI
- React Router DOM
- Firebase Authentication
- Axios

### Backend:

- Express.js
- MongoDB
- Firebase Admin SDK
- JWT (JSON Web Tokens)
- dotenv
- CORS

---

## Key Features

- 🔐 Firebase Authentication (email/password login)
- 🧑‍🏫 Instructor role: Create and manage courses
- 🧑‍🎓 Student role: Enroll in and view available courses
- 🛡️ Admin role: Promote users, manage users and courses
- 📊 Dashboard views for each user type
- 🎯 Dynamic routing and protected/private routes
- ⚡ Real-time feedback and notifications

---

## Dependencies

### Frontend:

- react
- react-dom
- react-router-dom
- tailwindcss
- daisyui
- firebase
- axios

### Backend:

- express
- mongodb
- cors
- jsonwebtoken
- dotenv
- firebase-admin

---

## How to Run Locally

### Frontend:

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/frontend-repo.git

2. Navigate to the project folder:
   ```bash
   cd Course-Management-System-repo
   
3. Install dependencies:
   ```bash
   npm install
   
4. Start the development server:
   ```bash
   npm run dev



## Key Endpoints

| Method | Route                        | Description                     |
|--------|-----------------------------|---------------------------------|
| POST   | `/jwt`                      | Generate JWT from Firebase user |
| GET    | `/users`                    | Get all users (admin only)      |
| PATCH  | `/users/:id`                | Update user role                |
| POST   | `/courses`                  | Add a new course (instructor)   |
| GET    | `/courses`                  | Get all available courses       |
| GET    | `/courses/:id`              | Get single course by ID         |
| DELETE | `/courses/:id`              | Delete course (admin/instructor)|
| PUT    | `/courses/:id`              | Update course details           |

*(Add or update based on your actual API structure.)*

---

## Environment Variables

Create a `.env` file in the root of your project and add:





