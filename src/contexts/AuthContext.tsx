import React, { createContext, useContext, useState, useEffect } from 'react';
import { users, User } from '@/data/users';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (email: string, password: string, firstName: string, lastName: string) => boolean;
  logout: () => void;
  isLoading: boolean;
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('shopmart_user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        // Verify user still exists in our data
        const existingUser = users.find(u => u.id === parsedUser.id);
        if (existingUser) {
          setUser(existingUser);
        } else {
          localStorage.removeItem('shopmart_user');
        }
      } catch (error) {
        localStorage.removeItem('shopmart_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, password: string): boolean => {
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser && foundUser.isActive) {
      setUser(foundUser);
      localStorage.setItem('shopmart_user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const signup = (email: string, password: string, firstName: string, lastName: string): boolean => {
    // Check if user already exists
    if (users.find(u => u.email === email)) {
      return false;
    }

    const newUser: User = {
      id: `user-${Date.now()}`,
      email,
      password,
      firstName,
      lastName,
      role: 'user',
      createdAt: new Date().toISOString(),
      isActive: true
    };

    // In a real app, this would be sent to a server
    users.push(newUser);
    setUser(newUser);
    localStorage.setItem('shopmart_user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('shopmart_user');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};