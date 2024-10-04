import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import ExpensePage from "./pages/ExpensePage";
import ToDoPage from "./pages/ToDoPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import { AuthProvider } from "./utils/AuthContext";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [expenses, setExpenses] = useState([]);
  const [todos, setTodos] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <AuthProvider>
      <Router>
        {/* Use flex-col and min-h-screen to ensure footer is pushed to bottom */}
        <div className="flex flex-col min-h-screen">
          <Navbar />

          {/* Main content grows to take up space */}
          <main className="flex-grow flex justify-center items-center">
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    selectedDate={selectedDate}
                    expenses={expenses}
                    totalExpense={totalExpense}
                    onDateClick={handleDateClick}
                    setTotalExpense={setTotalExpense}
                  />
                }
              />
              <Route
                path="/expenses"
                element={
                  <ExpensePage
                    selectedDate={selectedDate}
                    expenses={expenses}
                    setExpenses={setExpenses}
                    setTotalExpense={setTotalExpense}
                  />
                }
              />
              <Route
                path="/todos"
                element={
                  <ToDoPage
                    selectedDate={selectedDate}
                    todos={todos}
                    setTodos={setTodos}
                  />
                }
              />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </main>

          {/* Footer is always at the bottom */}
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
