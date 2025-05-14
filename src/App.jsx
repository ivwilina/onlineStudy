import './App.css'
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import FlashCard from "./pages/flashcard/Flashcards";
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/flashcard' element={<FlashCard/>} />
          <Route path='/personal' element={<Personal/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
