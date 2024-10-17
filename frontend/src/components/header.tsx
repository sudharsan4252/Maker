const Header=()=>{
    const message="hi there new to meet you guys happy to see you here";
    const UserName="vrishab"
return(
    <div>
        {
        message? <div className="w-screen h-10 p-1 bg-[#e74c3c]">
            <div className="flex gap-2 justify-center items-center text-[#CAD3C8] text-lg font-bold animate-textScroller">
                <div><span className="text-[#82589F] text-lg font-extrabold">Note: </span> {message}</div>
            </div>
            </div> : <div></div>
        }
    <div className="text-2xl font-bold px-2">
       Hii {UserName} !... Nice to meet you
        </div>    
    </div>
)
}
export default Header;