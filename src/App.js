import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/quiz" 
              element={<Quiz />} 
            />
            <Route 
              path="/register" 
              element={<Register />} 
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
