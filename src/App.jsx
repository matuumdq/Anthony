import About from "./components/About"
import Contact from "./components/Contact"
import Courses from "./components/Courses"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Method from "./components/Method"
import Navbar from "./components/Navbar"

function App() {
  
  return (
    <div className="bg-[url('https://cdn.pixabay.com/photo/2014/04/14/10/51/grass-323571_1280.jpg')]">
        <Hero />
        <div className="bg-black/40">
            <Navbar />
            <About />
            <Method />
            <Courses />
            <Contact />
            <Footer />
        </div>
    </div>
  )
}

export default App
