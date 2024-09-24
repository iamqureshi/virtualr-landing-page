import Features from "./components/Features"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Workflow from "./components/Workflow"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero/>
        <Features/>
        <Workflow/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  )
}

export default App