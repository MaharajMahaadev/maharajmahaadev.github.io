
function Contact(){
    return(
        <div>
            <form className="flex flex-col w-1/3">
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email"></input>
                <input type="text" placeholder="Subject"></input>
                <input type="text" placeholder="Body"></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact;