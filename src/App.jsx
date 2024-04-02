import { createContext, useState } from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import DetailsPage from './components/Pages/DetailsPage'
import ContactPage from './components/Pages/ContactPage'
import Portfolio from './components/Pages/Portfolio'
import AboutPage from './components/Pages/AboutPage'



import './App.css'


export const ThemeContext = createContext(null)
function App() {
  const [val, setval] = useState(() => {
    const initval = localStorage.getItem("value");
    return initval ? initval : "true";
  })







  return (
    <ThemeContext.Provider value={{ val, setval }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutPage />} />




      </Routes>
    </ThemeContext.Provider>
  );
}

export default App
