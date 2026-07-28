import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TickerBanner from './components/TickerBanner'
import TopEvents from './components/TopEvents'
import FeaturedArtists from './components/FeaturedArtists'
import UpcomingEvents from './components/UpcomingEvents'
import PromoSection from './components/PromoSection'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
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

export default App
