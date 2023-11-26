import { Button } from "@material-tailwind/react";

export function ButtonGradient({nombre, id, type}) {
    return (
      <Button type={type} id={id} className="w-[90%] h-[40px] md:w-[45%] md:h-[38px] xl:h-[3.5rem] font-[sansation-regular] text-white bg-gradient-to-r from-[#0094FF] to-[#00E0FF] hover:bg-gradient-to-bl rounded-full text-[15px] md:text-[1.2rem] xl:text-[1.3rem] py-2 text-center mr-2 mb-2 normal-case">{nombre}</Button>
    )
}