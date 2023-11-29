import { Button } from "@material-tailwind/react"
import { useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useGlobalContext } from "../contex"

export const SearchForm = () => {
    const {setSearchTerm, setResultTitle} = useGlobalContext();
    const searchText = useRef('');
    const navigate = useNavigate();

    useEffect(() => searchText.current.focus(),[]);
    const handleSubmit = (e) => {
        e.preventDefault();
        let tempSearchTerm = searchText.current.value.trim();
        if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
            setSearchTerm("the lost world");
            setResultTitle("Please Enter Something ...")
        }else{
            setSearchTerm(searchText.current.value);
        }

        navigate("/book");
    }
    return(
        <>
            <div className="flex items-center w-full h-[45px] bg-white rounded-full pl-8 border-[#d7d7d7] border-[1.5px] shadow-[0_1px_5px_1px_rgba(0,0,0,0.05)]">
                <form onSubmit={handleSubmit} className="flex space-x-4 items-center w-full h-full">    
                    <Button className="shadow-none" onClick={handleSubmit}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 30 30">
                        <path d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z"></path>
                    </svg>
                    </Button>
                    <input type="text" placeholder="Buscar ..." ref={searchText} className="focus:outline-none focus:border-0 flex items-center bg-transparent w-full h-full rounded-r-full text-[15px] placeholder:text-[#cfcfcf] text-[#353c43] appearance-none"></input>
                </form>
                

            </div>
        </>
    )
}