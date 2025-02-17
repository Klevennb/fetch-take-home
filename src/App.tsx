import Avatar from 'components/Avatar'
import logo from 'assets/logo.svg'
import { Routes, Route } from 'react-router-dom'
import Home from 'screens/Home'
import About from 'screens/About'
import NotFound from 'screens/NotFound'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>  )
}

export default App
