import { RaitingStart } from "../components/Rating"
export const Book = (book) => {
    return(
        <div className="flex bg-white h-[200px] w-[345px] rounded-lg drop-shadow-[0px_3px_2px_rgba(0,0,0,0.1)] hover:border-b-4 hover:border-b-[#0094FF] transition-all duration-200">
            <img src={book.cover_img} className={`w-[38%] object-cover object-center rounded-l-lg`}/>
            <div className="w-[62%]">
                <section className="flex flex-col justify-center w-[200px] h-[75%] p-5">
                    <h2>---</h2>
                    <h1 className="text-[15px] text-black font-[sansation-regular] leading-6 mt-2 uppercase">{book.title}</h1>
                    <h2>{book.author}</h2>
                    <div className="mt-3">
                        {RaitingStart()}
                        <h2>Calificación general: 8.2</h2>
                    </div>
                </section>

                <section className="flex justify-end items-end w-full h-auto mt-2 px-5">
                    <div className="flex justify-center w-[100px] h-[30px] bg-[#343C53] px-4 rounded-full text-[14px] font-[sansation-regular]">
                        <select className="block w-full rounded-full text-white focus:outline-none bg-transparent hover:bg-transparent focus:bg-transparent">
                            <option className="font-[sansation-regular] text-[15px] text-black">Por leer</option>
                            <option className="font-[sansation-regular] text-[15px] text-black">Leyendo</option>
                            <option className="font-[sansation-regular] text-[15px] text-black">Leído</option>
                        </select>
                    </div>
                </section>
            </div>
        </div>
    )
}