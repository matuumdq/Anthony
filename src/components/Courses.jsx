import { cursos } from "../db"

const Courses = () => {
    
  return (
    <div id="courses">
        <h2 className="text-2xl text-center pt-8 uppercase font-extralight text-white">Mis Cursos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-lg px-6 md:mx-auto gap-5 py-10 ">
            {cursos.map(curso => (
                <div key={curso.id} className="w-full flex flex-col shadow-md text-white bg-black/50 p-8 rounded-2xl gap-4 cursor-default">
                    <img className="w-full h-40 rounded-t-lg" src={curso.img} alt={curso.name} />
                    <div className="flex items-center gap-4">
                        <h3 className="text-2xl">{curso.name}</h3>
                        <div className="w-full mx-auto border-b-2 border-green-700 mt-2"></div>
                    </div>
                    <p>{curso.explanation}</p>
                    <a href={curso.msg} target="_blank" rel="noreferrer" className="font-light bg-green-700 shadow-xl mx-auto ml-0 px-4 py-2 rounded-lg hover:scale-105 ease-in duration-300 text-white ">Mas Informacion</a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Courses