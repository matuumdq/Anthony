
const Navbar = () => {
  return (
    <div className='bg-black/60 text-xs sm:text-base font-thin sticky top-0 h-12 flex gap-2 sm:gap-4 uppercase justify-center items-center text-white'>
        <a href="#about" className="hover:text-emerald-500 ease-in duration-300">Sobre mi</a>
        <a href="#method" className="hover:text-emerald-500 ease-in duration-300">Metodologia</a>
        <a href="#courses" className="hover:text-emerald-500 ease-in duration-300">Cursos</a>
        <a href="#form" className="hover:text-emerald-500 ease-in duration-300">Contacto</a>
    </div>
  )

}

export default Navbar