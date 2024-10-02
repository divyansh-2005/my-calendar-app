import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from './axiosInstance';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const checkUserStatus = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await axiosInstance.get('/auth/me');
        setUser(response.data.user); 
      } catch (error) {
        console.log('Error fetching user data:', error);
        setUser(null);
        logout()
      }
    }
  };

  useEffect(() => {
    checkUserStatus();
  }, []);



  return (
    <AuthContext.Provider value={{ user, setUser, logout ,checkUserStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
