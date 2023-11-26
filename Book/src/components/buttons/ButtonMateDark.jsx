import { Button } from "@material-tailwind/react";

export function ButtonMateDark(nombre, id, type='button') {
    return (
      <Button type={type} id={id} className="w-[95%] h-[40px] font-[sansation-regular] text-white bg-[#353C43] hover:bg-[#4C5660] rounded-full text-[15px] md:text-[1.2rem] xl:text-[1.3rem] py-2 text-center mr-2 mb-2 normal-case">{nombre}</Button>
      )
  }