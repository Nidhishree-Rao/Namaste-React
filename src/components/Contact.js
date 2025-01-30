const Contact = () =>
{
    return(
        <div>
            <h1 className="font-bold text-2xl p-3 m-3">Contact Us</h1>
            <form>
                <input type="text" className="border border-black p-2 m-1" placeholder="name"></input>
                <input type="text" className="border border-black p-2 m-1" placeholder="message"></input>
                <button className="border border-black p-2 m-1 rounded-lg bg-gray-100">Submit</button>
            </form>
        </div>
    )
   
}


export default Contact