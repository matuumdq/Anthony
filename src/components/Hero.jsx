
const Hero = () => {
  return (
    <div className="max-w-full h-[60vh] bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.6),rgba(255,255,255,0.3)),url('https://images.pexels.com/photos/625219/pexels-photo-625219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover">
        <div className=" max-w-full h-full flex flex-col justify-center mx-5 md:mx-20 gap-4">
            <h1 className="text-4xl text-rose-600/80 font-semibold w-full ">CIAO!<strong> Sono Anthony</strong></h1>
            <p className="font-thin text-white">Tu profesor de italiano </p>
            <a href="#form" className="font-light bg-red-600/40 shadow-xl mx-auto ml-0 px-4 py-2 rounded-md hover:scale-105 ease-in duration-300 text-white">Contactame </a>

        </div>
    </div>
  )
}

export default Hero