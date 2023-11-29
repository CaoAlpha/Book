
import { SearchForm } from "../components/search"
import { useState, useEffect } from "react"

import { TarjetaBook } from "../components/TarjetaBook"
import { TarjetaGenero } from "../components/TarjetaGenero"
import { motion } from "framer-motion";
import { PerfilSide } from "../components/perfil/PerfilSide"

export const Home = ({correoUsuario, nombreUsuario, usuarioBook}) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    

    return(
        <>
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }} className="flex justify-center">
            <div className="flex flex-col items-center justify-start bg-[#F2F2F2] w-full h-auto">
                <div className=" relative flex justify-center items-center min-w-full bg-[#F2F2F2] w-full">
                    <div className="flex flex-col justify-center items-center w-full max-w-[1900px]">
                        <div className="flex flex-col lg:flex-row-reverse justify-center w-full items-center mb-10">
                            <section className="flex flex-col items-center min-w-[250px] w-[80%] lg:w-[78%] mt-14 lg:mr-20 lg:ml-3 lg:h-[83vh] lg:rounded-md">
                                <div className="w-full mb-5">
                                    <SearchForm/>
                                </div>
                                <div className="flex flex-col w-full h-auto mt-2 space-y-7 rounded-lg overflow-y-auto scrollbar-none">
                                
                                    <section className="flex flex-col w-[100%] h-auto p-1 mb-10 rounded-lg">
                                            <h2 className="text-[15px] mb-3 font-[sansation-regular]">CIENCIA FICCIÓN Y FANTASÍA</h2>
                                            
                                            <div className="flex justify-start space-x-8 items-center rounded-lg overflow-x-auto scrollbar-none bg-transparent h-[200px]">
                                                <div className="rounded-lg">
                                                <TarjetaBook genero="Literatura Juvenil / Fantasía" titulo="SILVER: EL PRIMER LIBRO DE LOS SUEÑOS" autor="Kerstin Gier" imagen='https://1.bp.blogspot.com/-MbvrBYGqCjo/WEjFKv-8eWI/AAAAAAAACIo/RVUabEMYghIoBRVZDN60tcxwdZa2gN1HwCLcB/s1600/Silber_german_cover.jpg'/>
                                                </div>
                                                <div className="rounded-lg">
                                                <TarjetaBook genero="Ciencia ficción y Fantasía" titulo="1984" autor="George Orwell" imagen='https://mir-s3-cdn-cf.behance.net/project_modules/disp/45e35918679645.5603ee8f024f6.jpg'/>
                                                </div>
                                                <div className="rounded-lg">
                                                <TarjetaBook genero="Ciencia ficción y Fantasía" titulo="ASESINO DE BRUJAS: LA BRUJA BLANCA" autor="Kerstin Gier" imagen='https://www.elsotano.com/imagenes_grandes/9786077/978607748237.JPG'/>
                                                </div>
                                                <div className="rounded-lg">
                                                <TarjetaBook genero="Literatura Juvenil / Fantasía" titulo="EL RETRATO DE DORIAN GRAY" autor="Oscar Wilde" imagen='https://www.normainfantilyjuvenil.com/pe/uploads/2020/09/resized/800_el-retrato-de-dorian.png'/>
                                                </div>
                                                <div className="rounded-lg">
                                                <TarjetaBook genero="Literatura Juvenil / Fantasía" titulo="SILVER: EL PRIMER LIBRO DE LOS SUEÑOS" autor="Kerstin Gier" imagen='./src/assets/img/fondos/Silber_german_cover.jpg'/>
                                                </div>
                                                
                                            </div>
                                    </section>

                                    <section className="flex flex-col w-[100%] h-auto p-1 mb-10 rounded-lg">
                                            <h2 className="text-[15px] mb-3 font-[sansation-regular]">CLÁSICOS UNIVERSALES</h2>
                                            
                                            <div className="flex justify-start space-x-8 items-center rounded-lg overflow-x-auto scrollbar-none bg-transparent h-[200px]">
                                                <div className="rounded-lg">
                                                <TarjetaBook genero="Clásicos universales" titulo="EL RETRATO DE DORYAN GRAY" autor="Oscar Wilde" imagen='https://www.normainfantilyjuvenil.com/co/uploads/2019/01/9789580013396.jpg'/>
                                                </div>
                                                <div className="rounded-lg">
                                                <TarjetaBook genero="Clásicos universales" titulo="ORGULLO Y PREJUICIO" autor="Jane Austen" imagen='https://libreriadelau.vtexassets.com/arquivos/ids/25042599/9789585350069.jpg?v=637862385082300000'/>
                                                </div>
                                                <div className="rounded-lg">
                                                <TarjetaBook genero="Clásicos universales" titulo="EL CONDE DE MONTECRISTO" autor="Alejandro Dumas" imagen='https://covers.alibrate.com/b/59872e92cba2bce50c1b7929/06d27f27-09cf-4135-a431-1d6f54c184e3/share'/>
                                                </div>
                                                <div className="rounded-lg">
                                                <TarjetaBook genero="Literatura Juvenil / Fantasía" titulo="SILVER: EL PRIMER LIBRO DE LOS SUEÑOS" autor="Kerstin Gier" imagen='./src/assets/img/fondos/Silber_german_cover.jpg'/>
                                                </div>
                                                <div className="rounded-lg">
                                                <TarjetaBook genero="Literatura Juvenil / Fantasía" titulo="SILVER: EL PRIMER LIBRO DE LOS SUEÑOS" autor="Kerstin Gier" imagen='./src/assets/img/fondos/Silber_german_cover.jpg'/>
                                                </div>
                                                
                                            </div>
                                    </section>

                                    <section className="flex flex-col w-[100%] h-auto p-1 rounded-lg">
                                            <h2 className="text-[15px] font-[sansation-regular]">GÉNEROS</h2>
                                            
                                            <div className="flex justify-start space-x-8 items-center rounded-lg overflow-x-auto scrollbar-none bg-transparent h-[210px]">
                                                <div className="rounded-lg">
                                                <TarjetaGenero color="bg-[#00A7CB]" genero='LITERATURA JUVENIL' imagen='https://2.bp.blogspot.com/-iHSmD9SRU9s/VDhMkzW2_oI/AAAAAAAAK0w/IVe_QCU07xo/s1600/HP3_1.jpeg'/>
                                                </div>
                                                <div className="rounded-lg">
                                                <TarjetaGenero color="bg-[#00E7AF]" genero='NOVELA GRÁFICA Y COMICS' imagen='https://i.pinimg.com/736x/a3/f0/6d/a3f06d22d81c86c1b9aa63441d3282f8.jpg'/>
                                                </div>
                                                <div className="rounded-lg">
                                                <TarjetaGenero color="bg-[#FFD600]" genero='LITERATURA CONTEMPORANEA' imagen='https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg'/>
                                                </div>
                                                <div className="rounded-lg">
                                                <TarjetaGenero color="bg-[#FF005C]" genero='LITERATURA ROMANTICA' imagen='https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/625453f3986326e6a6ff7a9d_6034d7d1f3e0f54abdb2b276_Jane-eyre-charlotte-bronte-editorial-alma.jpeg'/>
                                                </div>
                                                <div className="rounded-lg">
                                                <TarjetaGenero color="bg-[#3A507B]" genero='TERROR POLICIAL Y SUSPENSO' imagen='https://images.cdn1.buscalibre.com/fit-in/360x360/c2/64/c2642a2bdb609dd25793f0cb8dc73305.jpg'/>
                                                </div>
                                                
                                            </div>
                                    </section>
                                    
                                </div>
                            </section>

                            <PerfilSide correoUsuario={correoUsuario} nombreUsuario={nombreUsuario} usuarioBook={usuarioBook}/>
                            
                        </div>
                    </div>
                </div>
            </div>
            </motion.div>
        </>
    )
}