'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/utils/api';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (token: string, userData: User) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const isLoggedIn = !!user;

  // Check if user is logged in on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
      try {
        const parsedUserData = JSON.parse(userData);
        setUser(parsedUserData);
        // Set axios default header for authenticated requests
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } catch (error) {
        console.error('Error parsing user data:', error);
        // Clear corrupted data
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
      }
    }
    
    setLoading(false);
  }, []);

  const login = (token: string, userData: User) => {
    // Ensure we have a proper name (not email)
    let cleanName = userData.name;
    
    // If name is empty, null, or looks like an email, extract from email
    if (!cleanName || cleanName.includes('@')) {
      cleanName = userData.email.split('@')[0];
    }
    
    const cleanUserData = {
      ...userData,
      name: cleanName
    };
    
    // Store authentication data
    localStorage.setItem('token', token);
    localStorage.setItem('userData', JSON.stringify(cleanUserData));
    
    // Mark that user has logged in at least once (hide register button)
    localStorage.setItem('hasLoggedIn', 'true');
    
    // Set user state
    setUser(cleanUserData);
    
    // Set axios default header for future requests
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    // Redirect to homepage after login
    router.push('/');
  };

  const logout = () => {
    // Clear authentication data but keep the hasLoggedIn flag
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    
    // Clear any other auth-related data that might exist
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    
    // Reset user state
    setUser(null);
    
    // Clear any axios default headers that might have been set
    delete api.defaults.headers.common['Authorization'];
    
    // Redirect to homepage after logout
    router.push('/');
  };

  const value = {
    user,
    isLoggedIn,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};