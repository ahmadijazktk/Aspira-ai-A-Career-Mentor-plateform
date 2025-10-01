import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  gender?: "male" | "female";
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  signup: (name: string, email: string, password: string, gender?: "male" | "female") => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string) => {
    // Simulate login - check if user exists in storage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      navigate("/dashboard");
    } else {
      const newUser: User = {
        id: "1",
        name: email.split("@")[0],
        email,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        gender: "male"
      };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      navigate("/dashboard");
    }
  };

  const signup = (name: string, email: string, password: string, gender: "male" | "female" = "male") => {
    // Simulate signup with gender-specific avatars
    const avatarStyle = gender === "female" ? "avataaars-neutral" : "avataaars";
    const newUser: User = {
      id: "1",
      name,
      email,
      avatar: `https://api.dicebear.com/7.x/${avatarStyle}/svg?seed=${email}`,
      gender,
    };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    navigate("/dashboard");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("aiChatQuestions");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
//changes had been made