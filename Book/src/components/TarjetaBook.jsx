import { useState } from "react"
import { RaitingStart } from "../components/Rating"
import { SelectItem } from "./inputForm/SelectItem"

export const TarjetaBook = ({genero, titulo, autor, imagen}) => {

    return(
        <div className="flex bg-white h-[200px] w-[345px] rounded-lg drop-shadow-[0px_3px_2px_rgba(0,0,0,0.1)] hover:h-[205px] hover:w-[350px] transition-all duration-200">
            <img src={imagen} className={`w-[38%] object-cover rounded-l-lg`}/>
            <div className="w-[62%]">
                <section className="flex flex-col justify-center w-[200px] h-[75%] p-5">
                    <h2>{genero}</h2>
                    <h1 className="text-[15px] text-black font-[sansation-regular] leading-6 mt-2">{titulo}</h1>
                    <h2>{autor}</h2>
                    <div className="mt-3">
                        {RaitingStart()}
                        <h2>Calificación general: 8.2</h2>
                    </div>
                </section>

                <SelectItem/>
            </div>
        </div>
    )
}