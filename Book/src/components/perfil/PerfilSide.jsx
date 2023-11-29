import { Button, button } from "@material-tailwind/react"
import buttonText from "@material-tailwind/react/theme/components/button/buttonText"
export const PerfilSide = ({correoUsuario, nombreUsuario, usuarioBook}) =>{
    return(
        <section className="hidden lg:flex flex-col min-w-[300px] w-[80%] lg:w-[22%] lg:mt-14 lg:mr-3 lg:ml-20 lg:h-[83vh] lg:rounded-md">
                                <div className="flex items-end w-full h-[45px] mb-5">
                                    <h2 className="flex items-end w-full h-[45px] text-[23px] font-[sansation-regular]">Perfil</h2>
                                </div>
                                    
                                <div className="flex flex-col w-full mt-2 rounded-md overflow-y-auto scrollbar-none">
                                    <div className="flex flex-col mb-2 pt-14 pb-5 px-8 rounded-[7px] border-t-[2.5px] border-[#0094FF] bg-white space-y-8 shadow-md">
                                        <section className="flex flex-col items-center">
                                            <div className="flex justify-center items-center w-[120px] h-[120px] border-[3px] border-[#353C43] rounded-full p-1">
                                                <div className="w-full h-full rounded-full bg-[url('./assets/img/Profile.png')] bg-cover bg-center"></div>
                                            </div>
                                            <div className="relative flex flex-col items-center w-full mt-5">
                                                <h2 className="text-[20px] text-center font-[sansation-regular] leading-8">{nombreUsuario}</h2>
                                                <p className="text-[17px]">19 años</p>
                                            </div>
                                        </section>

                                        <section className="flex flex-col items-center">
                                            <Button type={buttonText} className="flex justify-between items-center w-full h-[40px] border-t-[1px] p-3 text-[#353C43] capitalize hover:text-[#0094FF] shadow-none">
                                                <h2 className="relative text-[17px]">Libros</h2>
                                                <h2 className="relative text-[17px]">0</h2>
                                            </Button>

                                            <Button type={buttonText} className="flex justify-between items-center w-full h-[40px] border-t-[1px] p-3 text-[#353C43] capitalize hover:text-[#0094FF] shadow-none">
                                                <h2 className="relative text-[17px]">Reseñas</h2>
                                                <h2 className="relative text-[17px]">0</h2>
                                            </Button>

                                            <Button type={buttonText} className="flex justify-between items-center w-full h-[40px] border-t-[1px] p-3 border-b-[1px] text-[#353C43] capitalize hover:text-[#0094FF] shadow-none">
                                                <h2 className="relative text-[17px]">Listas</h2>
                                                <h2 className="relative text-[17px]">0</h2>
                                            </Button>
                                        </section>

                                        <section className="flex justify-between items-center w-full">
                                            <Button type={button} className="flex justify-around items-center w-[48%] h-[35px] bg-[#353C43] capitalize rounded-md font-[sansation-regular]">
                                                <div className="bg-[url('./assets/img/icons/Favorite.png')] h-[15px] w-[15px] bg-cover"/>
                                                <h2 className="text-[12px]">
                                                    Preferencias
                                                </h2>
                                            </Button>

                                            <Button type={button} className="flex justify-around items-center w-[48%] h-[35px] bg-[#0094FF] capitalize rounded-md font-[sansation-regular]">
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
    )
}