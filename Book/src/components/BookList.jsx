import { Button } from "@material-tailwind/react"

import { useGlobalContext } from "../contex"
import { Loader } from "./Loader"
import coverImg from "../assets/img/cover-not-found/cover-not-found.jpg"
import { Book } from "./Book"
import { SearchForm } from "./search"
import { PerfilSide } from "./perfil/PerfilSide"

//https://covers.openlibrary.org/b/id/240727-S.jpg

export const BookList = ({correoUsuario, nombreUsuario, usuarioBook, softwareBook}) => {
    const {books, loading, resultTitle} = useGlobalContext();
    const booksWithCover = books.map((singleBook) => {
        return{
            ... singleBook,
            // removing works/ to get only  id
            id:(singleBook.id).replace("/works/", ""),
            cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
        }
    });


    return(
        
        <div className="flex flex-col items-center justify-start bg-[#F2F2F2] w-full h-auto">
            <div className=" relative flex justify-center items-center min-w-full bg-[#F2F2F2] w-full">
                <div className="flex flex-col justify-center items-center w-full max-w-[1900px]">
                    <div className="flex flex-col lg:flex-row-reverse justify-center w-full items-center mb-10">
                        <section className="flex flex-col items-center min-w-[250px] w-[80%] lg:w-[78%] mt-14 lg:mr-20 lg:ml-3 lg:h-[83vh] lg:rounded-md">
                            <div className="w-full mb-5">
                                <SearchForm/>
                            </div>
                            {loading? <Loader/>:
                                <div className="flex flex-col w-full h-auto mt-2 space-y-7 rounded-lg overflow-y-auto scrollbar-none">
                                
                                    <section className="flex flex-col w-[100%] h-auto p-1 mb-10 rounded-lg">
                                            <div className="flex justify-start space-x-8 items-center rounded-lg overflow-x-auto scrollbar-none bg-transparent h-[200px]">
                                                
                                                    {
                                                        booksWithCover.slice(0, 3).map((item, index) => {
                                                            return(
                                                                <div className="rounded-lg">
                                                                <Book key={index} {... item} />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                
                                            </div>
                                    </section>

                                    <section className="flex flex-col w-[100%] h-auto p-1 mb-10 rounded-lg">
                                            <div className="flex justify-start space-x-8 items-center rounded-lg overflow-x-auto scrollbar-none bg-transparent h-[200px]">
                                                
                                                        {
                                                            booksWithCover.slice(3, 6).map((item, index) => {
                                                                return(
                                                                    <div className="rounded-lg">
                                                                        <Book key={index} {... item} />
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    
                                                    
                                                </div>
                                    </section>

                                    <section className="flex flex-col w-[100%] h-auto p-1 rounded-lg">
                                            <div className="flex justify-start space-x-8 items-center rounded-lg overflow-x-auto scrollbar-none bg-transparent h-[210px]">
                                                
                                                        {
                                                            booksWithCover.slice(6, 9).map((item, index) => {
                                                                return(
                                                                    <div className="rounded-lg">
                                                                        <Book key={index} {... item} />
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                </div>
                                    </section>

                                    <section className="flex flex-col w-[100%] h-auto p-1 rounded-lg">
                                            <div className="flex justify-start space-x-8 items-center rounded-lg overflow-x-auto scrollbar-none bg-transparent h-[210px]">
                                                
                                                        {
                                                            booksWithCover.slice(9, 12).map((item, index) => {
                                                                return(
                                                                    <div className="rounded-lg">
                                                                        <Book key={index} {... item} />
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                </div>
                                    </section>
                                    
                                </div>
                            
                            
}
                        </section>
                
                        <PerfilSide correoUsuario = {correoUsuario} nombreUsuario={nombreUsuario} usuarioBook={usuarioBook} softwareBook={softwareBook}/>

                    </div> 
                </div> 
            </div>
        </div>             
    )
}