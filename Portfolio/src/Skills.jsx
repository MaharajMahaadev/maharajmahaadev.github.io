import { certificates, skills}  from "./data";

function Skills(){
    

    return(
        <div>
        <div className="grid grid-flow-col grid-cols-3 gap-4 m-4">
            <div className="bg-slate-100  drop-shadow-lg p-4"><p>Education</p><p>Bennett University, Greater Noida <br></br>B.Tech. Computer Science Engineering <br></br> Specialisation: Artifical Intelligence</p></div>
            <div className="bg-slate-100  drop-shadow-lg p-4"><p>Web Developer Intern</p><p>Technet Softwares</p><ul><li>Aided in the development process of the frontend of websites.</li><li>Collaborated with the team to convert designs to implementation in terms of UI and UX architecture.</li></ul></div>
            <div className="bg-slate-100  drop-shadow-lg p-4 text-pretty"><p>Frontend Developer Intern</p><p>Braun Exports</p><p>Implementation of website, optimisations, working with the team to understand requirements. Development of
            frontend with cross browser and device consistency.</p></div>
        </div>
        <div className="">
            <div className="m-4 grid grid-cols-3 bg-slate-100 shadow-lg">
                <p className="border-y-2 p-2 bg-rose-500">Certification</p>
                <p className="border-y-2 p-2 bg-rose-500">Certification Provider</p>
                <p className="border-y-2 p-2 bg-rose-500">Link</p>
                {
                    certificates.map((state, index) => (
                        <>
                       <p className=" border-2 p-2">{state.name}</p>
                       <p className=" border-2 p-2">{state.provider}</p>
                       <p className=" border-2 p-2 text-blue-300"><a href={state.link}>Link</a></p>
                       </>
                    ))
                }
            </div>
            <div className="m-4 grid grid-cols-4 border-2 bg-slate-100 ">
                {
                    skills.map((state, index) => (
                        <p className="border-2 p-2 grid grid-flow-col grid-cols-2"> {state.name}
                        <meter value={state.level} min="0" max="10" low="4" high="8" optimum="10">{state.level}</meter>
                        </p>
                    ))
                }
            </div>
        </div>
        </div>
    )
}

export default Skills;