import { Routes, Route } from 'react-router-dom'
import Home from 'screens/Home'
import About from 'screens/About'
import NotFound from 'screens/NotFound'
import Login from 'screens/Login'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProtectedRoute from 'components/ProtectedRoute'
import Dashboard from 'screens/Dashboard'
import { useAuth } from 'hooks/useAuth'

const queryClient = new QueryClient()

function App() {
  const { isAuthenticated, getUser } = useAuth()
  getUser()
  
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Home />} />
        <Route path="/login" element={isAuthenticated ? <Dashboard /> : <Login />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}

export default App
