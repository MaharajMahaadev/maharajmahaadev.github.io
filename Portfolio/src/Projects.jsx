import { projects } from "./data";

function Projects() {
    return (
        <div className="grid grid-cols-3 gap-4 mr-4 ml-4 h-auto">
            { projects.map((state, index) =>
            <div className="relative text-center hover:scale-105 duration-500 border-2 border-black h-fit">
                <img src={state.image} alt="MyMark"></img>
                    <div className="p-2 pb-5 bg-slate-100">
                        <p className="font-bold p-2">{state.name}</p>
                        <p className="text-justify p-2">{state.desc}</p>
                        <p className="m-2">{state.date}</p>
                        <a className="bg-rose-500 p-2" href={state.link}>Show More</a>
                    </div>
                    <div className="absolute inset-0 h-fit w-fit bg-rose-500 p-2">
                        <p>{state.name}</p>
                    </div>
            </div>
            )}
            </div>
            )
}

export default Projects