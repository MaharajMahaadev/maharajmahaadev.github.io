import me from "../images/me.png"

function Home(){
    return(
        <div className="flex flex-row">
            <img className='h-[60vh] m-[10vh] rounded-full m' src={me}></img>
            <div className="h-[60vh] m-[10vh] p-[5vh] rounded-lg overflow-clip justify-center">
                <p className="text-4xl font-bold  mb-8">Hey! I'm <p className="text-rose-500">Maharaj Mahaadev</p></p>
                <p className="text-xl pt-[2vh] text-justify">I'm a B.Tech CSE graduate and a <b>frontend developer</b> specialised in <b>artificial intelligence and machine learning.</b> Highly skilled in problem-solving and <b>DSA.</b> Taken courses in <b>Software Devlelopment,</b> Career Skills and Digital Marketing.</p>
            </div>
        </div>
    )
}

export default Home;