import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/About'
import Blog from './pages/Blog'
import Speaking from './pages/Speaking'
import './App.css'
import './index.css'

function AppContent({ isDarkMode, setIsDarkMode }) {
    const location = useLocation()

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0)
    }, [location.pathname])

    useEffect(() => {
        // run the fade-in reveal once when the app mounts
        document.querySelectorAll('.fade-in').forEach((el, i) => {
            el.style.animationDelay = (i * 0.08) + 's'
            el.classList.add('visible')
        })
    }, [])

    return (
        <>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/speaking" element={<Speaking />} />
            </Routes>
            <Footer />
        </>
    )
}

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check localStorage for saved preference
        const saved = localStorage.getItem('theme')
        if (saved) {
            return saved === 'dark'
        }
        // Check system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    useEffect(() => {
        // Apply theme to document
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    }, [isDarkMode])

    // Scroll to top on page refresh
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Router>
            <AppContent isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </Router>
    )
}
