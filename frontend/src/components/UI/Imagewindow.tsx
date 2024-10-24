import { imageStatus, imagesUrl } from "@/store/atoms/images"
import { useState } from "react"
import { atom, useSetRecoilState } from "recoil"

interface image{
    image:string,
}
export const ImagerWindow=({image}:image)=>{
    const url=useSetRecoilState(imagesUrl);
    function removerfn(){
        setavailable(false);
        url()
        // need to filter and remove only the specific item in them
    }
    const [available,setavailable]=useState(false)
    return <div className="w-full h-1/3 p-2">
        {available?
        <div>
            <img className="relative" src={image} alt="images" />
            <button onClick={removerfn} className="bg-red-600 w-5 h-5 rounded-full">X</button>
            
        </div>
        :
        <div className="w-full bg-gray-400 ">
            no image
        </div>
        }
    </div>
}