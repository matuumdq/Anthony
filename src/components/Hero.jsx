
const Hero = () => {
  return (
    <div className="max-w-full h-screen bg-[url('https://upload.wikimedia.org/wikipedia/commons/a/a2/Piazza_Venezia_-_Il_Vittoriano.jpg')] bg-cover">
        <div className=" max-w-full h-full flex flex-col justify-center mx-5 md:mx-20 gap-4">
            <h1 className="text-4xl text-teal-500 font-semibold w-full ">CIAO!<strong> Sono Anthony</strong></h1>
            <p className="font-semibold text-teal-600">Tu profesor de italiano </p>
            <a href="#form" className="font-light bg-emerald-500 shadow-xl mx-auto ml-0 px-4 py-2 rounded-md hover:scale-105 ease-in duration-300 text-white">Contactame </a>

        </div>
    </div>
  )
}

export default Hero