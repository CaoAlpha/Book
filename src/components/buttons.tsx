import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function ButtonMateDark(nombre:string, id:string, type='button') {
  return (
    <Button type={type} id={id} className="w-[95%] h-[40px] font-[sansation-regular] text-white bg-[#353C43] hover:bg-[#4C5660] rounded-full text-[15px] md:text-[1.2rem] xl:text-[1.3rem] py-2 text-center mr-2 mb-2 normal-case">{nombre}</Button>
    )
}

export function ButtonGradient(nombre:string, id:string, type='button') {
  return (
    <Button type={type} id={id} className="w-[90%] h-[40px] md:w-[45%] md:h-[38px] xl:h-[3.5rem] font-[sansation-regular] text-white bg-gradient-to-r from-[#0094FF] to-[#00E0FF] hover:bg-gradient-to-bl rounded-full text-[15px] md:text-[1.2rem] xl:text-[1.3rem] py-2 text-center mr-2 mb-2 normal-case">{nombre}</Button>
  )
}

export function ButtonMateDarkRoute(nombre:string, id:string, ruta:string, type='button') {
  return (
    <Button type={type} id={id} className="w-[90%] h-[40px] md:w-[45%] md:h-[38px] xl:h-[3.5rem] font-[sansation-regular] text-white bg-[#353C43] hover:bg-[#4C5660] rounded-full text-[15px] md:text-[1.2rem] xl:text-[1.3rem] py-2 text-center mr-2 mb-2 normal-case"><Link to={ruta}>{nombre}</Link></Button>
    )
}

export function ButtonGradientRoute(nombre:string, id:string, ruta:string, type='button') {
  return (
    <Button type={type} id={id} className="w-[90%] h-[40px] md:w-[45%] md:h-[38px] xl:h-[3.5rem] font-[sansation-regular] text-white bg-gradient-to-r from-[#0094FF] to-[#00E0FF] hover:bg-gradient-to-bl rounded-full text-[15px] md:text-[1.2rem] xl:text-[1.3rem] py-2 text-center mr-2 mb-2 normal-case"><Link to={ruta}>{nombre}</Link></Button>
  )
}


export function CheckboxRippleEffect() {
  return (
    <div className="flex items-center">
      <label className="relative flex items-center cursor-pointer p-3 rounded-full" htmlFor="r1">
        <input type="checkbox" id="r1" className="peer relative appearance-none w-5 h-5 xl:w-[1.3rem] xl:h-[1.3rem] border rounded-[3px] border-blue-gray-200 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-[#353C43] checked:border-[#353C43] checked:before:bg-gray-900">

        </input>
          <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
          </span>
      </label>
      
      <label className="text-gray-700 font-light select-none cursor-pointer mt-px text-[1rem] md:text-[1rem] xl:text-[1.1rem]" htmlFor="r1">Recuerdame</label>
    </div>
  )
}

export function selectButton(id:string, nombre:string) {
  return (
    <Button type="button" className="flex items-center justify-center border-2 border-gray-100 hover:border-l-[#0094FF] bg-gray-100 h-[40px] w-[140px] rounded-full px-5 mb-[15px]">
      <label className="relative flex items-center cursor-pointer p-5 rounded-full" htmlFor={id}>
        <input type="checkbox" id={id} className="peer relative appearance-none w-full h-full border-none cursor-pointer transition-all">
        </input>
          <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 120 120" version="1.1" fill="#0094FF" stroke="currentColor" strokeWidth="0.1">
            <circle cx="60" cy="60" r="50" />
              
            </svg>
          </span>
      </label>
      <label className="flex justify-center items-center text-gray-700 font-light select-none cursor-pointer text-[1rem] md:text-[1rem] xl:text-[1.1rem] w-full h-full" htmlFor={id}>{nombre}</label>
    </Button>
  )
}


