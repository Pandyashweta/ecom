import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  password?: string; // In a real app, never store plain text passwords!
  role: 'user' | 'admin';
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  joinedDate: string;
  address?: string;
  profileImage?: string;
}

interface AuthContextType {
  user: User | null;
  users: User[];
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string, phone: string) => boolean;
  logout: () => void;
  verifyEmail: () => void;
  verifyPhone: () => void;
  updateProfile: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>(() => {
    const stored = localStorage.getItem('mock_users');
    return stored ? JSON.parse(stored) : [];
  });

  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('mock_current_user');
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    localStorage.setItem('mock_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('mock_current_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('mock_current_user');
    }
  }, [user]);

  // Initialize default admin if no users exist
  useEffect(() => {
    if (users.length === 0) {
      const adminUser: User = {
        id: '1',
        name: 'Admin User',
        email: 'admin@arahouse.com',
        password: 'admin',
        role: 'admin',
        isEmailVerified: true,
        isPhoneVerified: true,
        joinedDate: new Date().toISOString(),
      };
      setUsers([adminUser]);
    }
  }, []);

  const login = (email: string, password: string) => {
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      toast.success('Welcome back!');
      return true;
    }
    toast.error('Invalid credentials');
    return false;
  };

  const signup = (name: string, email: string, password: string, phone: string) => {
    if (users.some(u => u.email === email)) {
      toast.error('Email already exists');
      return false;
    }
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      phone,
      password,
      role: 'user',
      isEmailVerified: false,
      isPhoneVerified: false,
      joinedDate: new Date().toISOString(),
    };
    setUsers([...users, newUser]);
    setUser(newUser);
    toast.success('Account created successfully!');
    return true;
  };

  const logout = () => {
    setUser(null);
    toast.success('Logged out');
  };

  const verifyEmail = () => {
    if (!user) return;
    const updatedUser = { ...user, isEmailVerified: true };
    setUser(updatedUser);
    setUsers(users.map(u => u.id === user.id ? updatedUser : u));
    toast.success('Email verified successfully!');
  };

  const verifyPhone = () => {
    if (!user) return;
    const updatedUser = { ...user, isPhoneVerified: true };
    setUser(updatedUser);
    setUsers(users.map(u => u.id === user.id ? updatedUser : u));
    toast.success('Phone verified successfully!');
  };

  const updateProfile = (data: Partial<User>) => {
    if (!user) return;
    const updatedUser = { ...user, ...data };
    setUser(updatedUser);
    setUsers(users.map(u => u.id === user.id ? updatedUser : u));
    toast.success('Profile updated');
  };

  return (
    <AuthContext.Provider value={{ user, users, login, signup, logout, verifyEmail, verifyPhone, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};