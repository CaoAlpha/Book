export function InputForm(
    type:string,
    id:string,
    placeholder:string,
    img:string,
  ) {
    return (
      <>
        <label htmlFor={id} className="block mb-2 text-[1.2rem] font-[sansation-regular]">{placeholder}</label>
        <div className="flex">
        <span className="bg-white inline-flex items-center px-3 text-[1.5rem] rounded-l-full border border-neutral-400">
            <img src={img} alt="icon" className="w-[20px] h-[20px] text-gray-500">
                
            </img>
        </span>
        <input type={type} id={id} required className="bg-white rounded-none rounded-r-full w-full h-[40px] border text-[#353C43] focus:ring-blue-700 focus:border-blue-700 block flex-1 min-w-0 text-[1.2rem] border-neutral-400 p-3 border-l-0 font-[sansation-regular]" placeholder={placeholder}/>
        </div>
      </>
    );
  }

export function dropDown(id:string, nombre:string, opciones:string[]){
  let box = [];
  for (let i = 0; i < opciones.length; i++) {
    box.push(<option value={opciones[i]} className="font-[sansation-light]">{opciones[i]}</option>);
  }
  
  return(
    <>
      <label htmlFor={id} className="block mb-2 text-[1.2rem] font-[sansation-regular] text-[#353C43]">{nombre}</label>
      <select id={id} className="bg-white border text[#353C43] text-[1.2rem] rounded-full focus:ring-blue-700 focus:border-blue-700 block flex-1 min-w-0 w-full border-neutral-400 p-3 font-[sansation-regular] mb-12">
        <option selected>{nombre}</option>
        {box}
        
      </select>
    </>
  )
}