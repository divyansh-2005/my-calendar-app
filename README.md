# 📅 My Calendar App

## 📝 Overview

**My Calendar App** is a full-stack application designed to help users manage their schedules, expenses, to-dos, and notes all in one place. The app provides a seamless and intuitive user interface for efficient day-to-day management, along with robust backend support for secure data handling and user authentication.

<table align="center">
    <thead align="center">
        <tr border: 2px;>
            <td><b>🌟 Stars</b></td>
            <td><b>🍴 Forks</b></td>
            <td><b>🐛 Issues</b></td>
            <td><b>🔔 Open PRs</b></td>
            <td><b>🔕 Close PRs</b></td>
        </tr>
     </thead>
    <tbody>
         <tr>
            <td><img alt="Stars" src="https://img.shields.io/github/stars/divyansh-2005/my-calendar-app?style=flat&logo=github"/></td>
            <td><img alt="Forks" src="https://img.shields.io/github/forks/divyansh-2005/my-calendar-app?style=flat&logo=github"/></td>
            <td><img alt="Issues" src="https://img.shields.io/github/issues/divyansh-2005/my-calendar-app?style=flat&logo=github"/></td>
            <td><img alt="Open Pull Requests" src="https://img.shields.io/github/issues-pr/divyansh-2005/my-calendar-app?style=flat&logo=github"/></td>
            <td><img alt="Close Pull Requests" src="https://img.shields.io/github/issues-pr-closed/divyansh-2005/my-calendar-app?style=flat&color=critical&logo=github"/></td>
        </tr>
    </tbody>
</table>



## ✨ Features

- 🔐 **User Authentication**: Secure login and registration using JWT (JSON Web Tokens).
- 💰 **Expense Tracking**: Keep track of daily expenses with detailed categories and descriptions.
- ✅ **To-Do Management**: Create, update, and manage tasks with due dates.
- 🗒️ **Notes Management**: Store and organize notes with timestamps.
- 📱 **Responsive Design**: Works across desktop and mobile devices.

### 💵 How to Contribute

   ![image](https://github.com/user-attachments/assets/5263dc32-ce09-4835-b964-7f996e970eb5)

   #### 1. Fork the repository to your GitHub account.
   #### 2. Clone the forked repository to your local machine.
   ```bash
   git clone https://github.com/YOUR_USERNAME/my-calendar-app.git
   ```
   #### 3. Create a new branch for your changes.
   ```bash
   git checkout -b feature/your-feature
   ```
   #### 4. Make your changes, whether they're bug fixes, new features, or improvements.
   #### 5. add the change in your branch
   ```bash
   git add .
   ```
   #### 6. Commit your changes with descriptive commit messages.
   ```bash
   git commit -m "Add your descriptive commit message here"
   git push origin feature/your-feature
   ```
   #### 7. Open a Pull Request (PR) against the main repository.
### Additional Notes
   #### Start working on the issue, Don't wait to get it assigned by the maintainers
   #### Your every contribution counts, Thanks for contributing to my-calendar-app

## 💻 Technologies Used

### Frontend

- ⚛️ **React.js**: JavaScript library for building user interfaces.
- 🛣️ **React Router**: Declarative routing for React applications.
- 🌐 **Axios**: Promise-based HTTP client for the browser and Node.js.
- 🎨 **CSS Modules**: Scoped CSS for modular and reusable styling.
- 🖌️ **Material-UI**: React components for faster and easier web development.
- 🗂️ **Context API**: For state management across the application.

### Backend

- 🟢 **Node.js**: JavaScript runtime for server-side development.
- 🚀 **Express**: Web framework for building RESTful APIs.
- 📂 **MongoDB**: NoSQL database for storing user data, expenses, to-dos, and notes.
- 🔗 **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- 🔑 **JWT (JSON Web Tokens)**: For secure user authentication.
- 🛡️ **Bcrypt.js**: For password hashing.

## 🚀 Deployment

- 💻 **Frontend**: Deployed on **Vercel**.
- 🌐 **Backend**: Deployed on **Heroku**.
- 💾 **Database**: Hosted on **MongoDB Atlas**.

## 🚧 Getting Started

### Prerequisites

#### Frontend:

- ⚙️ Node.js (v14 or higher)
- 📦 npm or yarn
- ⚛️ react and vite

#### Backend:

- 🟢 Node.js (v14 or higher)
- 📂 MongoDB (Atlas or local)
- 🛠️ Postman or any API client for testing

## 🛠 Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/divyansh-2005/my-calendar-app.git
cd my-calendar-app
```

#### 2. Setting up the Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory of the backend and add the following environment variables:

   ```plaintext
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start the backend server:

   ```bash
   npm run dev
   ```

   The server will run on `http://localhost:5000`.

#### 3. Setting up the Frontend

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:3000`.

## Project Structure

```plaintext
my-calendar-app/
├── backend/           # Backend Node.js and Express API
│   ├── models/        # Mongoose models
│   ├── routes/        # Express routes
│   ├── controllers/   # Request handlers
│   ├── middleware/    # Middleware functions
│   ├── config/        # Configuration files
│   └── ...
├── frontend/          # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── context/     # Context API for state management
│   │   ├── services/    # Axios services for API calls
│   │   └── ...
│   └── ...
└── README.md          # Project README file
```

## 📑 API Endpoints

Refer to the [Backend Documentation](backend/README.md) for detailed information on available API endpoints.

## 🧪 Testing

### Backend

Use Postman or any other API client to test backend endpoints. Set the headers to include `x-auth-token` for authenticated requests.

### Frontend

Ensure that the backend server is running. Use your browser to access the frontend on `http://localhost:3000` and interact with the application.

## 🛠 Deployment

### Backend

1. Push the backend code to your Heroku repository.
2. Set the environment variables on Heroku using the `.env` file.

### Frontend

1. Deploy the frontend on Vercel by linking your repository.
2. Ensure the frontend is configured to communicate with the deployed backend.

## 📜 License

This project is licensed under the MIT License.

## 🙌 Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
For more information on how to contribute, please refer to our [CONTRIBUTING.md](CONTRIBUTING.md).

## Our Valuable Contributors
[![Contributors](https://contrib.rocks/image?repo=divyansh-2005/my-calendar-app)](https://github.com/divyansh-2005/my-calendar-app/graphs/contributors)

---

For any questions or issues, feel free to contact me or raise an issue in the repository.
