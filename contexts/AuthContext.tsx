import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { authAPI } from '../services/api';

interface User {
  id: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  loginWithPhone: (phoneNumber: string, otp: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  registerWithPhone: (phoneNumber: string, otp: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: async () => {},
  loginWithPhone: async () => {},
  register: async () => {},
  registerWithPhone: async () => {},
  logout: () => {},
  loading: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const token = Cookies.get('token');
    if (token) {
      // In a real app, you would validate the token and get user data
      // For now, we'll just set a basic user object based on the token type
      const tokenData = token.split('.')[0]; // Simple way to check token type
      
      if (tokenData === 'admin') {
        setUser({
          id: '1',
          name: 'Admin User',
          email: 'admin@example.com',
          role: 'admin',
        });
      } else if (tokenData === 'phone') {
        setUser({
          id: '2',
          phoneNumber: '+2348012345678',
          role: 'user',
        });
      } else {
        setUser({
          id: '3',
          name: 'Regular User',
          email: 'user@example.com',
          role: 'user',
        });
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // In a real app, this would call the API
      // For now, we'll simulate a successful login with hardcoded credentials
      if (email === 'admin@example.com' && password === 'admin123') {
        // Admin login
        Cookies.set('token', 'admin.jwt.token', { expires: 1 }); // 1 day
        setUser({
          id: '1',
          name: 'Admin User',
          email: 'admin@example.com',
          role: 'admin',
        });
      } else if (email === 'user@example.com' && password === 'user123') {
        // Regular user login
        Cookies.set('token', 'email.jwt.token', { expires: 1 }); // 1 day
        setUser({
          id: '3',
          name: 'Regular User',
          email: 'user@example.com',
          role: 'user',
        });
      } else {
        // In a real app, this would be handled by the API response
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const loginWithPhone = async (phoneNumber: string, otp: string) => {
    setLoading(true);
    try {
      // In a real app, this would call the API to verify the OTP
      // For now, we'll simulate a successful login with a hardcoded OTP
      if (otp === '1234') {
        Cookies.set('token', 'phone.jwt.token', { expires: 1 }); // 1 day
        setUser({
          id: '2',
          phoneNumber,
          role: 'user',
        });
      } else {
        throw new Error('Invalid OTP');
      }
    } catch (error) {
      console.error('Phone login failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      // In a real app, this would call the API to register the user
      // For now, we'll simulate a successful registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, the user would be logged in automatically after registration
      // Here we'll just return success and let the login page handle the login
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const registerWithPhone = async (phoneNumber: string, otp: string) => {
    setLoading(true);
    try {
      // In a real app, this would call the API to verify the OTP and register the user
      // For now, we'll simulate a successful registration
      if (otp === '1234') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In a real app, the user would be logged in automatically after registration
        // Here we'll just return success and let the login page handle the login
      } else {
        throw new Error('Invalid OTP');
      }
    } catch (error) {
      console.error('Phone registration failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    Cookies.remove('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        loginWithPhone,
        register,
        registerWithPhone,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

