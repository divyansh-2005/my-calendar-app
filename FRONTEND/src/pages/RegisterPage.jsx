import { useState, useContext } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../utils/AuthContext';
import '../styles/Register.css';  

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axiosInstance.post('auth/register', { username, email, password });
      localStorage.setItem('token', response.data.token);
      alert('Registration successfully');
      setUser(response.data.user);
      console.log('Registration successfully');
      navigate('/');
    } catch (err) {
      setError(err?.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <div className="left-section">
        {/* <img src={mysvg} alt="Calendar and tasks" className="image-section" /> */}
        <div className="left-text"><h3>Manage your daily <span id='expense'>expenses</span> and <span id='task'>tasks</span> in <span id='place'>one place</span>.</h3></div>
      </div>
      <div className="right-section">
        <h2>Register</h2>
        <p className='subheading'>Create a new account.</p>
        <p className='subheading'>Already have an account? <span className='login-link'><Link to='/login'>Login</Link></span></p>
        <form onSubmit={handleRegister}>
          <div className='form-div'>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="John doe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='form-div'>
          <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='form-div'>
          <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='form-div'>
          <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              placeholder="Retype Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button id='register_button' type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
