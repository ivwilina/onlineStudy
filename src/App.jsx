import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { AuthProvider } from './context/AuthProvider'
import HomeNonLogin from './pages/home/HomeNonLogin'
import FlashcardHome from './pages/flashcard/FlashcardHome'
import FlashcardDetail from './pages/flashcard/FlashcardDetail'
import FlashcardWords from './pages/flashcard/FlashcardWords'


function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/welcome" element={<HomeNonLogin />} />
              <Route path="/flashcard" element={<FlashcardHome />} />
              <Route path="/flashcard/:categoryId" element={<FlashcardDetail />} />
              <Route path="/flashcard/:categoryId/words" element={<FlashcardWords />} />
              <Route path="/flashcard/:categoryId/learn" element={<FlashcardHome />} />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App
