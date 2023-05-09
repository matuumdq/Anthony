
const Method = () => {
  return (
    <div className=" w-full py-10 ">
        <div className="shadow-lg h-auto md:max-h-auto lg:max-w-screen-lg flex flex-col md:flex-row md:gap-5 bg-red-400/95 w-[80vw] mx-auto rounded-l-sm">
            <div className="w-full px-6 md:pt-6">
                <h2 className="text-3xl font-thin text-white my-3 w-full">Metodologia</h2>
                {/* <div className="w-full border-b-2 border-white mb-5"></div> */}
                <p className="border-l-2 pl-4 mb-4 text-sm md:w-5/6 text-gray-200">Mi trabajo nació un poco antes de la pandemia, de la pasión por enseñar y, por supuesto, del buen manejo del idioma</p>
                <div className="flex flex-col gap-2 text-gray-100 font-extralight pb-5">
                    <ul className="mx-auto md:mx-4 flex flex-col gap-3">
                        <li>• Online</li>
                        <li>• Contextos reales para facilitar el aprendizaje</li>
                        <li>• Aprende Leyendo, escribiendo y hablando</li>
                        <li>• Y lo mas importante, divirtiendonos!</li>
                    </ul>
                </div>
            </div>
            <div>
                <img className="h-auto sm:h-full md:max-h-[50vh] w-auto md:ml-0 bg-cover mx-auto" src="https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Method