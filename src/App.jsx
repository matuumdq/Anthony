import About from "./components/About";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Method from "./components/Method";
import Navbar from "./components/Navbar";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

function App() {
	return (
		<div className="bg-[url('https://cdn.pixabay.com/photo/2014/04/14/10/51/grass-323571_1280.jpg')]">
			<Hero />
			<div className="flex flex-col gap-3 fixed z-30 bottom-0 right-1 ">
				<a
					href="https://www.instagram.com"
					target="_blank"
					rel="noreferrer"
				>
					<BsInstagram className="text-white md:text-2xl hover:scale-110 ease-in duration-300 cursor-pointer" />
				</a>
				<a
					href="https://api.whatsapp.com/send?phone=+5492236681270&text=Hola,%20Antony%20"
					target="_blank"
					rel="noreferrer"
				>
					<BsWhatsapp className="text-white md:text-2xl hover:scale-110 ease-in duration-300 cursor-pointer" />
				</a>
			</div>
			<div className="bg-black/40">
				<Navbar />
				<About />
				<Method />
				<Courses />
				<Contact />

				<Footer />
			</div>
		</div>
	);
}

export default App;
