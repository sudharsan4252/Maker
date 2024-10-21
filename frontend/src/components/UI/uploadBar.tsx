"use client";
import { useState } from "react";
import Button from "./Button";

const UploadBar=()=>{
    function next(){
        return setImage(!image);
    }
    function upload(){
        alert("move to new")
    }
    const [image,setImage]=useState(true);
    return(
        <div className="p-2 flex h-full w-full gap-2 bg-[#ecf0f1]">
            <div className="flex relative items-center border rounded border-purple-400 h-full w-4/5 p-0 pb-10 bg-[#55E6C1]"> 
                <div className="absolute flex  gap-2 bottom-2 right-2 items-center">
                    <Button handleClick={next} content={"upload"} image={image}/>
                    <Button handleClick={upload} content={"next"} image={image}/>
                </div>
            {!image ?
            <div className="flex mx-5  border border-dashed flex-col  border-gray-600 rounded-lg p-3 h-4/5 w-full ">
            <label htmlFor="">Enter the Image Url</label>
            <input type="text" className=" bg-yellow-50 rounded-sm" />
                </div> : <div className="flex  border-gray-600 rounded-lg p-1 w-full relative  h-full "  >
                        <img className="relative w-full" src="https://cdn-ghkoj.nitrocdn.com/kjYfdEBKRwdYwvHQyjaYBdTGFpFGjqYW/assets/images/optimized/rev-39d8e95/sertifier.com/blog/wp-content/uploads/2020/10/certificate-text-samples.jpg" alt="uploaded Image" />
            </div> }
            </div>
            <div className="border border-gray-600 w-1/5 rounded bg-[#9AECDB]">
                <div>
                </div>
            </div>
            

            
        </div>
    )
}
export default UploadBar;