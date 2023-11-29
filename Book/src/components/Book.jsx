import { Button } from "@material-tailwind/react"
import { RaitingStart } from "../components/Rating"
import { Link } from "react-router-dom"
export const Book = (book) => {
    
    return(
        <>
            <div className="flex bg-white h-[200px] w-[345px] rounded-lg drop-shadow-[0px_3px_2px_rgba(0,0,0,0.1)] hover:h-[205px] hover:w-[350px] transition-all duration-200">
                    <img src={book.cover_img} className={`w-[38%] object-cover rounded-l-lg`}/>
                    <div className="w-[62%]">
                    <section className="flex flex-col justify-center w-[200px] h-[75%] p-5">
                            <h2>---</h2>
                            <Link to={`/book/${book.id}`} {... book}><h1 className="text-[15px] text-black font-[sansation-regular] leading-6 mt-2">{book.title}</h1></Link>
                            <h2>{`${book.author}`}</h2>
                            <div className="mt-3">
                                {RaitingStart()}
                                <h2>Calificación general: 8.2</h2>
                            </div>
                        </section>
                    </div>
            </div>

            
        </>
        
        
    )
}