import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
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
import ThemeToggle from './components/themetoggle.jsx';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [expenses, setExpenses] = useState([]);
  const [todos, setTodos] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <AuthProvider>  
      <Router>
        <div className={`App ${darkMode ? 'dark' : ''}`}>
          <Navbar />
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
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
            <Route path="/AboutUs" element={<AboutUsPage></AboutUsPage>} /> 
            <Route path="ContactUs" element={<ContactUsPage/>} />
          </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;