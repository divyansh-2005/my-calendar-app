import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';  // Ensure styles are defined here for the trailing ray
import Navbar from './components/Navbar';
import HomePage from './pages/Homepage';
import ExpensePage from './pages/ExpensePage';
import ToDoPage from './pages/ToDoPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer';
import { AuthProvider } from './utils/AuthContext';
import UserProfile from './pages/UserProfile';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUs';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [expenses, setExpenses] = useState([]);
  const [todos, setTodos] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // Trailing ray effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const ray = document.createElement('div');
      ray.classList.add('trailing-ray');
      document.body.appendChild(ray);

      // Set position of the ray
      ray.style.left = `${e.pageX}px`;
      ray.style.top = `${e.pageY}px`;

      // Remove the ray after some time
      setTimeout(() => {
        ray.remove();
      }, 500); // Adjust for longer or shorter ray trail effect
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <AuthProvider>  
      <Router>
        <div className="App">
          <Navbar />
          <main>
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
              <Route path="/profile" element={<UserProfile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
