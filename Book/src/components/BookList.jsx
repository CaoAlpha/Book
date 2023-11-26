import { Button } from "@material-tailwind/react"

import { useGlobalContext } from "../contex"
import { Loader } from "./Loader"
import coverImg from "../assets/img/cover-not-found/cover-not-found.png"
import { Book } from "./Book"
import { SearchForm } from "./search"



//https://covers.openlibrary.org/b/id/240727-S.jpg


export const BookList = ({correoUsuario}) => {
    const {books, loading, resultTitle} = useGlobalContext();
    const booksWithCover = books.map((singleBook) => {
        return{
            ... singleBook,
            // removing works/ to get only  id
            id:(singleBook.id).replace("works/", ""),
            cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
        }
    });

    console.log(booksWithCover);



    return(
        
        <div className="flex flex-col items-center justify-start bg-[#F2F2F2] w-full h-auto">
            <div className=" relative flex justify-center items-center min-w-full bg-[#F2F2F2] w-full">
                <div className="flex flex-col justify-center items-center w-full max-w-[1900px]">
                    <div className="flex flex-col lg:flex-row-reverse justify-center w-full items-center mb-10">
                        <section className="flex flex-col items-center min-w-[250px] w-[80%] lg:w-[78%] mt-14 lg:mr-20 lg:ml-3 lg:h-[83vh] lg:rounded-md">
                            <div className="w-full mb-5">
                                <SearchForm/>
                            </div>
                            {loading?
                <Loader/>
                :
                            <div className="flex flex-col w-full h-auto mt-2 space-y-7 rounded-lg overflow-y-auto scrollbar-none">
                                <div className="flex justify-center items-center w-full h-[100vh] text-[15px] font-[sansation-regular] p-5 mb-7">
                                    <h2>{resultTitle}</h2>
                                </div>
                                <div className="flex flex-wrap justify-center w-full h-auto p-5 space-x-5 space-y-7">
                        
                                    {
                                        booksWithCover.slice(0, 10).map((item, index) => {
                                            return(
                                                <Book key={index} {...item} />
                                            )
                                        })
                                    }
                        
                                </div>
                            </div>
}
                        </section>
                
                        <section className="hidden lg:flex flex-col min-w-[300px] w-[80%] lg:w-[22%] lg:mt-14 lg:mr-3 lg:ml-20 lg:h-[83vh] lg:rounded-md">
                                <div className="flex items-end w-full h-[45px] mb-5">
                                    <h2 className="flex items-end w-full h-[45px] text-[23px] font-[sansation-regular]">Perfil</h2>
                                </div>
                                    
                                <div className="flex flex-col w-full mt-2 rounded-md overflow-y-auto scrollbar-none">
                                    <div className="flex flex-col mb-2 pt-14 pb-5 px-8 rounded-[7px] border-t-[2.5px] border-[#0094FF] bg-white space-y-8 shadow-md">
                                        <section className="flex flex-col items-center">
                                            <div className="flex justify-center items-center w-[120px] h-[120px] border-[3px] border-[#353C43] rounded-full p-1">
                                                <div className="w-full h-full rounded-full bg-[url('./assets/img/Profile.png')] bg-cover bg-center"></div>
                                            </div>
                                            <div className="relative flex flex-col items-center w-full mt-5">
                                                <h2 className="text-[20px] text-center font-[sansation-regular] leading-8">{correoUsuario}</h2>
                                                <p className="text-[17px]">19 años</p>
                                            </div>
                                        </section>

                                        <section className="flex flex-col items-center">
                                            <Button type='button' className="flex justify-between items-center w-full h-[40px] border-t-[1px] p-3 text-[#353C43] capitalize hover:text-[#0094FF] shadow-none">
                                                <h2 className="relative text-[17px]">Libros</h2>
                                                <h2 className="relative text-[17px]">0</h2>
                                            </Button>

                                            <Button type='button' className="flex justify-between items-center w-full h-[40px] border-t-[1px] p-3 text-[#353C43] capitalize hover:text-[#0094FF] shadow-none">
                                                <h2 className="relative text-[17px]">Reseñas</h2>
                                                <h2 className="relative text-[17px]">0</h2>
                                            </Button>

                                            <Button type='button' className="flex justify-between items-center w-full h-[40px] border-t-[1px] p-3 border-b-[1px] text-[#353C43] capitalize hover:text-[#0094FF] shadow-none">
                                                <h2 className="relative text-[17px]">Listas</h2>
                                                <h2 className="relative text-[17px]">0</h2>
                                            </Button>
                                        </section>

                                        <section className="flex justify-between items-center w-full">
                                            <Button type='button' className="flex justify-around items-center w-[48%] h-[35px] bg-[#353C43] capitalize rounded-md font-[sansation-regular]">
                                                <div className="bg-[url('./assets/img/icons/Favorite.png')] h-[15px] w-[15px] bg-cover"/>
                                                <h2 className="text-[12px]">
                                                    Preferencias
                                                </h2>
                                            </Button>

                                            <Button type='button' className="flex justify-around items-center w-[48%] h-[35px] bg-[#0094FF] capitalize rounded-md font-[sansation-regular]">
                                            <div className="bg-[url('./assets/img/icons/Pen.png')] h-[18px] w-[18px] bg-cover"/>
                                                <h2 className="text-[12px]">
                                                    Editar
                                                </h2>
                                            </Button>
                                        </section>
                                    </div>
                                    <div className=" mt-2 rounded-[7px] bg-white">
                                        <div className="flex items-center p-5 w-full h-[40px] bg-gradient-to-r from-[#0094FF] to-[#00E0FF] rounded-t-[7px]">
                                            <h2 className="text-[15px] text-white font-[sansation-regular]">Sobre mi</h2>
                                        </div>
                                        <div className="p-8">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut itaque nostrum placeat nobis harum maiores reprehenderit quis unde iste voluptatum, eaque soluta ad quidem ducimus corrupti magnam modi odio iure?</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut itaque nostrum placeat nobis harum maiores reprehenderit quis unde iste voluptatum, eaque soluta ad quidem ducimus corrupti magnam modi odio iure?</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut itaque nostrum placeat nobis harum maiores reprehenderit quis unde iste voluptatum, eaque soluta ad quidem ducimus corrupti magnam modi odio iure?</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                    </div> 
                </div> 
            </div>
        </div>             
    )
}