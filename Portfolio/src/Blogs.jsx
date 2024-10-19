import { blogs } from "./data"

function Blogs() {    
    return (
        <div className="grid grid-cols-2 gap-4 mr-4 ml-4 h-auto">
            {
                blogs.map((state) => (
                    <div className="relative text-center hover:scale-105 duration-500 h-[50vh] border-2 border-black">
                        <a href={state[0]} target="_blank">
                            <div className="relative">
                                <img className="w-[100%] h-[50vh]" src={state[1]} alt="BFS"></img>
                                <p className="absolute inset-0 bg-rose-500 h-fit">{state[2]}</p>
                            </div>
                        </a>
                    </div>))
            }
        </div>

    )
}

export default Blogs