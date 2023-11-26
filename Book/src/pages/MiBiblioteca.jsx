import { RaitingStart } from "../components/Rating"

export const MiBiblioteca = () => {      
    return(
        <>
        
        <div className="flex flex-col items-center justify-start bg-[#F2F2F2] w-full h-auto">
                <div className=" relative flex justify-center items-center min-w-full bg-[#F2F2F2] w-full">
                    <div className="flex flex-col justify-center items-center w-full max-w-[1900px]">
                        <div className="flex flex-col lg:flex-row-reverse justify-center w-full items-center mb-10">
            <div className="flex bg-white h-[220px] w-[390px] m-5 rounded-lg shadow">
                <div className="w-[38%] bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/disp/45e35918679645.5603ee8f024f6.jpg')] bg-contain bg-no-repeat rounded-l-lg"/>
                
                <div className="w-[62%]">
                    <section className="flex flex-col justify-center w-[200px] h-[75%] p-3">
                        <h2>Literatura Juvenil / Fantasía</h2>
                        <h1 className="text-[15px] text-black font-[sansation-regular] leading-6 mt-2">SILBER: EL PRIMER LIBRO DE LOS SUEÑOS</h1>
                        <h2>Kerstin Gier</h2>
                        <div className="mt-3">
                        <RaitingStart/>
                        <h2>Calificación general: 8.2</h2>
                        </div>
                    </section>

                    <section className="flex justify-end items-end w-full h-auto p-3">
                        
                        <div className="flex justify-center w-[110px] h-[35px] bg-[#343C53] px-4 rounded-full text-[15px] font-[sansation-regular]">
                            <select className="block w-full rounded-full text-white focus:outline-none bg-transparent hover:bg-transparent focus:bg-transparent">
                                <option className="font-[sansation-regular] text-[15px] text-black">Por leer</option>
                                <option className="font-[sansation-regular] text-[15px] text-black">Leyendo</option>
                                <option className="font-[sansation-regular] text-[15px] text-black">Leído</option>
                            </select>
                        </div>
    
                    </section>
                </div>
                

            </div>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}