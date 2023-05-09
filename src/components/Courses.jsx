import { cursos } from "../db"

const Courses = () => {
    
  return (
    <div className=" bg-gradient-to-b from-transparent to-rose-800/50">
        <h2 className="text-2xl text-center pt-8 uppercase font-extralight text-white">Mis Cursos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-lg px-6 md:mx-auto gap-5 py-10 ">
            {cursos.map(curso => (
                <div key={curso.id} className="w-full flex flex-col border border-gray-400 shadow-md text-white bg-red-400 p-8 rounded-md gap-4 cursor-default">
                    <img className="w-full max-h-56" src={curso.img} alt={curso.name} />
                    <div className="flex items-center gap-4">
                        <h3 className="text-2xl">{curso.name}</h3>
                        <div className="w-full mx-auto border-b-2 border-white mt-2"></div>
                    </div>
                    <p>{curso.explanation}</p>
                    <a href={curso.msg} target="_blank" rel="noreferrer" className="font-light bg-red-600/40 shadow-xl mx-auto ml-0 px-4 py-2 rounded-md hover:scale-105 ease-in duration-300 text-white">Mas Informacion</a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Courses