import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (email: string, password: string, name: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Load từ localStorage nếu có
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (email: string, password: string): boolean => {
    // Demo: Kiểm tra email/password giả (thay bằng API thật sau)
    if (email === "user@example.com" && password === "password") {
      const fakeUser: User = { id: "1", email, name: "User Demo" };
      setUser(fakeUser);
      localStorage.setItem("user", JSON.stringify(fakeUser));
      return true;
    }
    return false;
  };

  const register = (email: string, password: string, name: string): boolean => {
    // Demo: Luôn thành công, nhưng kiểm tra email tồn tại
    if (localStorage.getItem("users")?.includes(email)) {
      return false; // Email đã tồn tại
    }
    const newUser: User = { id: Date.now().toString(), email, name };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    // Lưu danh sách users giả
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
