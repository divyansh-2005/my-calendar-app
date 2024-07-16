# My Calendar App - Backend

## Overview

This is the backend for the My Calendar App, built using Node.js, Express, and MongoDB. The backend provides secure API endpoints for user authentication, expense tracking, to-do management, and notes management.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user data, expenses, todos, and notes.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JSON Web Tokens (JWT)**: For secure user authentication.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (Atlas or local)
- Postman or any API client for testing

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/divyansh-2005/my-calendar-app-backend.git
   cd my-calendar-app-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory and add the following environment variables:

   ```plaintext
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. **Connect to MongoDB** (either local or Atlas) using your connection string in the `.env` file.

### Running the Server

Start the server with:

```bash
npm start
```

The server will run on `http://localhost:5000`.

## API Endpoints

### Authentication

- **Register User**
  - `POST /api/auth/register`
  - Body: `{ "username": "user", "email": "user@example.com", "password": "password" }`

- **Login User**
  - `POST /api/auth/login`
  - Body: `{ "email": "user@example.com", "password": "password" }`

### Expenses

- **Get All Expenses** (requires token)
  - `GET /api/expenses`
  - Headers: `{ "x-auth-token": "token" }`

- **Get Expenses by Date** (requires token)
  - `GET /api/expenses/:date`
  - Headers: `{ "x-auth-token": "token" }`

- **Create Expense** (requires token)
  - `POST /api/expenses`
  - Body: `{ "date": "YYYY-MM-DD", "amount": 100, "category": "Food", "description": "Dinner" }`
  - Headers: `{ "x-auth-token": "token" }`

- **Update Expense** (requires token)
  - `PUT /api/expenses/:id`
  - Body: `{ "amount": 150, "category": "Food", "description": "Dinner updated" }`
  - Headers: `{ "x-auth-token": "token" }`

- **Delete Expense** (requires token)
  - `DELETE /api/expenses/:id`
  - Headers: `{ "x-auth-token": "token" }`

### Todos

- **Get All Todos** (requires token)
  - `GET /api/todos`
  - Headers: `{ "x-auth-token": "token" }`

- **Get Todos by Due Date** (requires token)
  - `GET /api/todos/:date`
  - Headers: `{ "x-auth-token": "token" }`

- **Create Todo** (requires token)
  - `POST /api/todos`
  - Body: `{ "title": "Todo title", "description": "Description", "dueDate": "YYYY-MM-DD" }`
  - Headers: `{ "x-auth-token": "token" }`

- **Update Todo** (requires token)
  - `PUT /api/todos/:id`
  - Body: `{ "title": "Updated title", "completed": true }`
  - Headers: `{ "x-auth-token": "token" }`

- **Delete Todo** (requires token)
  - `DELETE /api/todos/:id`
  - Headers: `{ "x-auth-token": "token" }`

### Notes

- **Get All Notes** (requires token)
  - `GET /api/notes`
  - Headers: `{ "x-auth-token": "token" }`

- **Get Notes by Date** (requires token)
  - `GET /api/notes/:date`
  - Headers: `{ "x-auth-token": "token" }`

- **Create Note** (requires token)
  - `POST /api/notes`
  - Body: `{ "date": "YYYY-MM-DD", "title": "Note title", "content": "Note content" }`
  - Headers: `{ "x-auth-token": "token" }`

- **Update Note** (requires token)
  - `PUT /api/notes/:id`
  - Body: `{ "title": "Updated title", "content": "Updated content" }`
  - Headers: `{ "x-auth-token": "token" }`

- **Delete Note** (requires token)
  - `DELETE /api/notes/:id`
  - Headers: `{ "x-auth-token": "token" }`

## Testing with Postman

Use Postman to test the API endpoints. Set the headers to include `x-auth-token` for authenticated requests. Follow the steps to register and login a user to obtain the JWT for further operations.

## License

This project is licensed under the MIT License.

