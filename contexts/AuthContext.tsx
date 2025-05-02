import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react"
import Cookies from "js-cookie"

interface User {
  id: string
  name?: string
  email?: string
  phoneNumber?: string
  role: "user" | "admin"
}

interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  setAuthUser: (user: User) => void
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  logout: () => {},
  setAuthUser: (user: User) => {},
  loading: true,
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const token = Cookies.get("token")
    if (token) {
      // In a real app, you would validate the token and get user data
      // For now, we'll just set a basic user object based on the token type
      const tokenData = token.split(".")[0] // Simple way to check token type

      setUser({
        id: "3",
        name: "Regular User",
        email: "user@example.com",
        role: "user",
      })
    }
    setLoading(false)
  }, [])

  const setAuthUser = (payload: User) => {
    setUser(payload)
  }

  const logout = () => {
    Cookies.remove("token")
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        logout,
        setAuthUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
