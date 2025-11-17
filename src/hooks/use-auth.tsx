import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type AuthState = {
  isAuthenticated: boolean;
  login: (username: string, password: string) => { success: boolean; message?: string };
  logout: () => void;
};

const STORAGE_KEY = "wardrobewiz-auth";

const AuthContext = createContext<AuthState | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    setIsAuthenticated(stored === "true");
  }, []);

  const login = (username: string, password: string) => {
    if (username === "admin" && password === "admin123") {
      setIsAuthenticated(true);
      window.localStorage.setItem(STORAGE_KEY, "true");
      return { success: true };
    }
    return { success: false, message: "Invalid credentials. Hint: admin / admin123" };
  };

  const logout = () => {
    setIsAuthenticated(false);
    window.localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

