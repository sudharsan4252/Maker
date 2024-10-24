import { RecentImage } from "./RecentImages";
import UploadBar from "./UI/uploadBar";

const UploadSection=()=>{
return(
    
        <div className="w-full h-[550px] border border-gray-500 rounded-lg">
        <div className="p-2 flex h-full w-full gap-2 bg-[#ecf0f1]">
                <UploadBar/>
                <RecentImage/>
            </div>
    </div>
        
    
)
}
export default UploadSection;