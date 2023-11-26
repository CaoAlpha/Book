import { Button } from "@material-tailwind/react";

export const ButtonIcon = ({id, imagen, style}) => {
    return(
      <>
        <Button type='button' id={id} className={`${style} flex items-center bg-transparent w-auto md:p-2 shadow-none`} ><img src={imagen}></img></Button>
      </>
    )
  }