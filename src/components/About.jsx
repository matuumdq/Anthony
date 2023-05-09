

const About = () => {
  return (
    <div className=" w-full py-5 ">
        <div className="h-auto md:max-h-auto lg:max-w-screen-lg flex flex-col md:flex-row md:gap-5 bg-red-300/40 w-[80vw] mx-auto rounded-lg">
            <div>
                <img className="h-auto sm:h-full md:max-h-[50vh] w-auto md:ml-0 bg-cover mx-auto md:rounded-l-lg rounded-t-lg md:rounded-r-none" src="https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className="w-full px-6 md:py-6">
                <div className="w-full border-b-2 border-white mt-4 mb-6"></div>
                <h2 className="text-3xl font-thin text-white my-3 w-full">Un poco de Mi</h2>
                <div className="flex flex-col gap-2 text-gray-100 font-thin pb-5">
                    <p className="">Nací en Italia en Milán pero viví toda mi vida en Pavía, un pueblito medioeval a media hora de Milán</p>
                    <p className="">A los 20 años decidí tomar una pausa de mis estudios pedagógicos y viajar por el continente Latino. Llegué a Argentina y de aquí no me fui nunca más, me casé y ahora trabajo como enseñante de italiano privado. </p>
                    <p className="">Mis pasiones son la enseñanza y la psicología; actualmente estoy estudiando la carrera de Coaching Ontológico en Buenos Aires y en mi tiempo libre me encanta practicar yoga y leer sobre filosofía.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About