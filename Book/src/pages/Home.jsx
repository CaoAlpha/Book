import { Button, button } from "@material-tailwind/react"
import { NavbarDefault } from "../components/navBar"
import buttonText from "@material-tailwind/react/theme/components/button/buttonText"

export const Home = ({correoUsuario}) => {
    return(
        <>
            <div className="flex flex-col items-center justify-start bg-gradient-to-tr from-white to-zinc-200 min-w-[250px] min-h-[600px]">
            
                <div className=" relative min-w-fit 2xl:w-[1400px] bg-[#F2F2F2] min-h-screen">
                    
                    <section className="sticky top-0 min-w-full 2xl:w-[1400px]">
                            {NavbarDefault()}
                    </section>
                    
                    <div className="flex flex-col justify-center my-0">

                        <div className="flex flex-col lg:flex-row-reverse justify-center items-center overflow-hidden min-h-[600px]">

                            <section className="flex flex-col min-w-[250px] w-[80%] lg:w-[78%] lg:mt-14 lg:mr-20 lg:ml-3 lg:h-[52rem] lg:rounded-md">
                                <div className="w-full h-[20px] mb-5">
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                </div>

                                <div className="flex flex-col mt-2 p-5 rounded-[7px] bg-gray-200 overflow-y-auto scrollbar-none">
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                    <h2 className="text-[23px] font-[sansation-regular]">Buscar</h2>
                                </div>
                            </section>

                            <section className="flex flex-col min-w-[250px] w-[80%] lg:w-[22%] lg:mt-14 lg:mr-3 lg:ml-20 lg:h-[52rem] lg:rounded-md">
                                <div className="w-full h-[20px] mb-5">
                                    <h2 className="text-[23px] font-[sansation-regular]">Perfil</h2>
                                </div>
                                    
                                <div className="flex flex-col w-full mt-2 rounded-md overflow-y-auto scrollbar-none drop-shadow-md">
                                    <div className="flex flex-col mb-2 pt-14 pb-5 px-8 rounded-[7px] border-t-[2.5px] border-[#0094FF] bg-white space-y-8 drop-shadow-sm">
                                        <section className="flex flex-col items-center">
                                            <div className="flex justify-center items-center w-[120px] h-[120px] border-[3px] border-[#353C43] rounded-full p-1">
                                                <div className="w-full h-full rounded-full bg-[url('./assets/img/Profile.png')] bg-cover bg-center"></div>
                                            </div>
                                            <div className="relative flex flex-col items-center w-full mt-5">
                                                <h2 className="text-[20px] text-center font-[sansation-regular] leading-8">{correoUsuario}</h2>
                                                <p className="text-[17px]">19 años</p>
                                            </div>
                                        </section>

                                        <section className="flex flex-col items-center">
                                            <Button type={buttonText} className="flex justify-between items-center w-full h-[40px] border-t-[1px] p-3 text-[#353C43] hover:text-[#0094FF]">
                                                <h2 className="relative text-[17px]">Libros</h2>
                                                <h2 className="relative text-[17px]">0</h2>
                                            </Button>

                                            <Button type={buttonText} className="flex justify-between items-center w-full h-[40px] border-t-[1px] p-3 text-[#353C43] hover:text-[#0094FF]">
                                                <h2 className="relative text-[17px]">Reseñas</h2>
                                                <h2 className="relative text-[17px]">0</h2>
                                            </Button>

                                            <Button type={buttonText} className="flex justify-between items-center w-full h-[40px] border-t-[1px] p-3 border-b-[1px] text-[#353C43] hover:text-[#0094FF]">
                                                <h2 className="relative text-[17px]">Listas</h2>
                                                <h2 className="relative text-[17px]">0</h2>
                                            </Button>
                                        </section>

                                        <section className="flex justify-between items-center w-full">
                                            <Button type={button} className="flex justify-evenly items-center w-[48%] h-[30px] bg-[#353C43] rounded-md font-[sansation-regular]">
                                                <div className="bg-[url('./assets/img/icons/Favorite.png')] h-[15px] w-[15px] bg-cover"/>
                                                <h2 className="text-[12px]">
                                                    Preferencias
                                                </h2>
                                            </Button>

                                            <Button type={button} className="flex justify-evenly items-center w-[48%] h-[30px] bg-[#0094FF] rounded-md font-[sansation-regular]">
                                            <div className="bg-[url('./assets/img/icons/Pen.png')] h-[18px] w-[18px] bg-cover"/>
                                                <h2 className="text-[12px]">
                                                    Editar
                                                </h2>
                                            </Button>
                                        </section>
                                    </div>
                                    <div className=" mt-2 rounded-[7px] bg-white">
                                        <div className="flex items-center p-5 w-full h-[40px] bg-gradient-to-r from-[#0094FF] to-[#00E0FF] rounded-t-[7px]">
                                            <h2 className="text-[15px] text-white font-[sansation-regular]">Sobre mi</h2>
                                        </div>
                                        <div className="p-8">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut itaque nostrum placeat nobis harum maiores reprehenderit quis unde iste voluptatum, eaque soluta ad quidem ducimus corrupti magnam modi odio iure?</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut itaque nostrum placeat nobis harum maiores reprehenderit quis unde iste voluptatum, eaque soluta ad quidem ducimus corrupti magnam modi odio iure?</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut itaque nostrum placeat nobis harum maiores reprehenderit quis unde iste voluptatum, eaque soluta ad quidem ducimus corrupti magnam modi odio iure?</p>
                                        </div>
                                    </div>
                                </div>
                            </section>      
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}