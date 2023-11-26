export const SelectItem = () =>{
  
    

    return(
      <section className="flex justify-end items-end w-full h-auto mt-2 px-5">
                    <form className={`flex justify-center w-[100px] h-[30px] bg-[#343C53] px-4 rounded-full text-[14px] font-[sansation-regular]`}>
                        <select name="valor" className="block w-full rounded-full text-white focus:outline-none bg-transparent hover:bg-transparent focus:bg-transparent">
                            <option className="font-[sansation-regular] text-[15px] text-black">Por leer</option>
                            <option className="font-[sansation-regular] text-[15px] text-black">Leyendo</option>
                            <option className="font-[sansation-regular] text-[15px] text-black">Leído</option>
                        </select>
                    </form>
                </section>
    )
}