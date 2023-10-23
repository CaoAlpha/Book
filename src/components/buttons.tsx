import { Button } from "@material-tailwind/react";

export function ButtonMateDark(nombre:string, id:string) {
  return (
    <Button type="button" id={id} className="w-[90%] h-[30px] md:w-[45%] md:h-[38px] font-[sansation-regular] text-white bg-[#353C43] hover:bg-[#4C5660] rounded-full text-[10px] md:text-[12px] xl:text-[15px] py-2 text-center mr-2 mb-2">{nombre}</Button>
    )

}

export function ButtonGradient(nombre:string, id:string) {
  return (
    <Button type="button" id={id} className="w-[90%] h-[30px] md:w-[45%] md:h-[38px] font-[sansation-regular] text-white bg-gradient-to-r from-[#0094FF] to-[#00E0FF] hover:bg-gradient-to-bl rounded-full text-[10px] md:text-[12px] xl:text-[15px] py-2 text-center mr-2 mb-2"><a href="#">{nombre}</a></Button>
  )
}


export function CheckboxRippleEffect() {
  return (

    <div className="flex items-center">
      <label className="relative flex items-center cursor-pointer p-3 rounded-full" htmlFor="r1">
        <input type="checkbox" id="r1" className="peer relative appearance-none w-5 h-5 xl:w-[1.2rem] xl:h-[1.2rem] border rounded-[3px] border-blue-gray-200 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-[#353C43] checked:border-[#353C43] checked:before:bg-gray-900">

        </input>
          <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
          </span>
      </label>
      
      <label className="text-gray-700 font-light select-none cursor-pointer mt-px text-[11px] md:text[12px] xl:text-[0.9rem]" htmlFor="r1">Recuerdame</label>
    </div>
  
  )
}