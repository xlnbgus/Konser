import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar         from './components/Navbar'
import HeroSection    from './components/HeroSection'
import TickerBanner   from './components/TickerBanner'
import TopEvents      from './components/TopEvents'
import FeaturedArtists from './components/FeaturedArtists'
import UpcomingEvents from './components/UpcomingEvents'
import PromoSection   from './components/PromoSection'
import HowItWorks     from './components/HowItWorks'
import Footer         from './components/Footer'

import LoginPage    from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function LandingPage() {
  return (
    <div style={{ minHeight:'100vh', background:'#0a0a0f' }}>
      <Navbar />
      <HeroSection />
      <TickerBanner />
      <TopEvents />
      <FeaturedArtists />
      <UpcomingEvents />
      <PromoSection />
      <HowItWorks />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<LandingPage />} />
        <Route path="/login"    element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}
