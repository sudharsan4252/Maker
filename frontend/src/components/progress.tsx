interface progessProps{
    state:boolean,
}
const Progress=({state}:progessProps)=>{
    return(
        <div id="progess" className="w-full h-full" >
            {state && <div className="w-screen h-[200]">
                progress of what is happenning there will be shown here
            </div>}
        </div>
    )
}
export default Progress;