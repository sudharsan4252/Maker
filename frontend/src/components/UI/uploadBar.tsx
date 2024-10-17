"use client";
import { useState } from "react";

const UploadBar=()=>{
    const [image,setImage]=useState(true);
    return(
        <div className="p-2">
            {!image ?
            <div className="flex flex-col border border-gray-600 rounded-lg p-3 w-full">
            <button className="text-center bg-orange-300 w-full h-8 p-1 rounded-md" onClick={()=>setImage(!image)}>Upload</button>
            <label htmlFor="">Enter the Image Url</label>
            <input type="text" className="bg-yellow-50 rounded-sm" />
                </div> : <div className="flex flex-col border border-gray-600 rounded-lg p-3 w-full h-full relative"  >
                <img className="relative w-full" src="" alt="uploaded Image" />
                <div className="absolute bottom-1 right-1">
                        <button className="text-center bg-orange-300 w-full h-8 p-1 rounded-md" onClick={()=>setImage(!image)}>ChangeImage</button>
                </div>
            </div> }
            

            
        </div>
    )
}
export default UploadBar;