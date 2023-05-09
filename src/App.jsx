import About from "./components/About"
import Contact from "./components/Contact"
import Courses from "./components/Courses"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Method from "./components/Method"

function App() {
  
  return (
    <div className="bg-red-800/70">
        <Hero />
        <About />
        <Method />
        <Courses />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
