
const Method = () => {
  return (
    <div id="method" className=" w-full py-10 ">
        <div className="shadow-lg h-auto md:max-h-auto lg:max-w-screen-lg flex flex-col md:flex-row md:gap-5 bg-emerald-400/40 w-[80vw] mx-auto rounded-l-sm">
            <div className="w-full px-6 md:pt-6">
                <h2 className="text-3xl font-thin text-white my-3 w-full">Metodologia</h2>
                {/* <div className="w-full border-b-2 border-white mb-5"></div> */}
                <p className="border-l-2 pl-4 mb-4 text-sm md:w-5/6 text-gray-200">En mis cursos aprenderemos el idioma italiano arrancando de los contextos reales del día a día y de ahí analizaremos con calma la parte gramatical. En la medida que voy conociendo el alumno decido donde fortalecer los aspectos quizás más débiles que detienen su aprendizaje del idioma. </p>
                <p className="border-l-2 pl-4 mb-4 text-sm md:w-5/6 text-gray-200">Para mí, como profesor, es muy importante conocer a mis estudiantes para poder ofrecer la mejor versión de la enseñanza. Cada uno de ellos tiene aspectos más y algunos menos fuertes en su proceso de formación, y mi “misión” es la de consolidar estos últimos para que el alumno tenga una comprensión integral del idioma.</p>
                <p className="border-l-2 pl-4 mb-4 text-sm md:w-5/6 text-gray-200">Como en cualquier escuela del mundo los niños aprenden gradualmente su idioma leyendo, escribiendo y hablando, mi método también se basa en ese mismo proceso, a medida que el estudiante se entregue a la práctica y al ejercicio. </p>
                <p className="border-l-2 pl-4 mb-4 text-sm md:w-5/6 text-gray-200">Y, en fin, la cosa más importante: ¡Divertirse! Por lo general si aprendemos y al mismo tiempo nos divertimos, retenemos muchísimp más contenido que de cualquier otra manera.</p>
                <p className="border-l-2 pl-4 mb-4 text-sm md:w-5/6 text-gray-200">Mi formato de enseñanza, siendo puramente virtual, abarca muchas personas en todas partes del globo y en mis clases uso herramientas visuales y auditivas para facilitar la asimilación de los contenidos lingüísticos.</p>
            </div>
            <div>
                <img className="h-auto sm:h-full md:max-h-[50vh] w-auto md:ml-0 bg-cover mx-auto" src="https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Method