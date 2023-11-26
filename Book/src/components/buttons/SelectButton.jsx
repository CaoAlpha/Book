export function SelectButton({id, nombre}) {

    return (
      <div className="flex items-center justify-center h-[40px] w-[140px] rounded-full">
        <label className="relative flex items-center cursor-pointer p-5 rounded-full" htmlFor={id}>
          <input type="checkbox" name={id} id={id} className="peer relative appearance-none w-full h-full border-none cursor-pointer transition-all">
          </input>
            <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 120 120" version="1.1" fill="#0094FF" stroke="currentColor" strokeWidth="0.1">
              <circle cx="60" cy="60" r="50" />
                
              </svg>
            </span>
        </label>
        <label className="flex justify-center items-center text-gray-700 font-light select-none cursor-pointer text-[1rem] md:text-[1rem] xl:text-[1.1rem] w-full h-full" htmlFor={id}>{nombre}</label>
      </div>
    )
}