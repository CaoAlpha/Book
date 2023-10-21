import { Button } from "@material-tailwind/react";

export function ButtonMateDark(nombre:string) {
  return (
    <Button type="button" className="w-[90%] h-[30px] md:w-[45%] md:h-[38px] font-[sansation-regular] text-white bg-[#353C43] hover:bg-[#4C5660] rounded-full text-[10px] md:text-[12px] xl:text-[15px] py-2 text-center mr-2 mb-2">{nombre}</Button>
    )

}

export function ButtonGradient(nombre:string) {
  return (
    <Button type="button" className="w-[90%] h-[30px] md:w-[45%] md:h-[38px] font-[sansation-regular] text-white bg-gradient-to-r from-[#0094FF] to-[#00E0FF] hover:bg-gradient-to-bl rounded-full text-[10px] md:text-[12px] xl:text-[15px] py-2 text-center mr-2 mb-2"><a href="#">{nombre}</a></Button>
  )
}