import { useState, useContext } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../utils/AuthContext';
import '../styles/Login.css';  


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      alert('Logged in successfully');
      console.log('Logged in successfully');
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      {/* Left Section */}
      <div className="left-section">
        <div className="left-text">
          <h3>Keep track of your <span id='expense'>expenses</span> and <span id='task'>tasks</span> efficiently.</h3>
          
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h2>Login</h2>
        <p className='subheading'>Sign in to an existing account. </p>
        <p className='subheading'>Don&apos;t have an account? <span className='register-link'><Link to='/register'>Register</Link></span></p>
        <form onSubmit={handleLogin}>
          <div className='form-div'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='form-div'>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
