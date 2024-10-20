import { cn } from "@/lib/utlis";

interface ButtonProps {
    handleClick: ()=>void;
    content:String;
    image:boolean;
}

const Button = ({ handleClick,content,image }: ButtonProps) => {
    // Function that handles the button click
    function contentaction(){
        if(content==="upload" && image){
            content="reupload"
        }
    }
    contentaction();
    return (
        <div>
            <button className={cn('text-center min-w-16 w-full h-8 p-1 rounded-md',content==="next"?'bg-orange-500': image ? 'bg-green-300' : 'bg-orange-500 ')} onClick={handleClick}>{content}</button>
        </div>
    );
};

export default Button;
