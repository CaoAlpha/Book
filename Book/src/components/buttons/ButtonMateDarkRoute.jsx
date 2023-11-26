import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function ButtonMateDarkRoute({nombre, id, ruta, type}) {
    return (
      <Button type={type} id={id} className="w-[90%] h-[40px] md:w-[45%] md:h-[38px] xl:h-[3.5rem] font-[sansation-regular] text-white bg-[#353C43] hover:bg-[#4C5660] rounded-full text-[15px] md:text-[1.2rem] xl:text-[1.3rem] py-2 text-center mr-2 mb-2 normal-case"><Link to={ruta}>{nombre}</Link></Button>
      )
}