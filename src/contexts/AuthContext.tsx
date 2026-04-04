import React, { createContext, useContext, useState } from "react";
import { MockUser, mockUsers } from "@/data/mockData";

interface AuthContextType {
  user: MockUser | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  switchRole: (role: MockUser["role"]) => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<MockUser | null>(mockUsers[0]); // default to developer

  const login = (email: string, _password: string) => {
    const found = mockUsers.find((u) => u.email === email);
    if (found) {
      setUser(found);
      return true;
    }
    setUser(mockUsers[0]);
    return true;
  };

  const logout = () => setUser(null);

  const switchRole = (role: MockUser["role"]) => {
    const found = mockUsers.find((u) => u.role === role);
    if (found) setUser(found);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
};
