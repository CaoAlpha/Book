import { Button } from "@material-tailwind/react"

export const TarjetaGenero = ({color, genero, imagen}) => {
    return(
        <div className="flex flex-col items-center space-y-2">
            <Button className="flex flex-col items-center h-170px w-[198px]">
                <section className={`h-[150px] w-full rounded-lg ${color} drop-shadow-lg`}>
                    <img src={`${imagen}`} alt="imagen" className="h-full w-full rounded-lg object-cover object-center opacity-50"/>
                </section>   
            </Button>
            <h2 className="font-[sansation-regular] text-center h-1">{genero}</h2>
        </div>
    )
}