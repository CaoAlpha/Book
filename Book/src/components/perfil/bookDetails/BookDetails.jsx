import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Loader } from "../../Loader";
import coverImg from "../../../assets/img/cover-not-found/cover-not-found.jpg"
import { PerfilSide } from "../PerfilSide";
import { motion } from "framer-motion";
import { TarjetaBook } from "../../TarjetaBook";
import { TarjetaGenero } from "../../TarjetaGenero";
import { SearchForm } from "../../search";
import { RaitingStart } from "../../Rating";
import { SelectItem } from "../../inputForm/SelectItem";
import { Button } from "@material-tailwind/react";
import { Reseña } from "../../../core/sistema/Reseña";
import { toast } from "react-toastify";

const URL = 'https://openlibrary.org/works/';

export const BookDetails = ({correoUsuario, nombreUsuario, usuarioBook, softwareBook}) => {
    const {id} = useParams();
    const [loading, setLoading] = useState(false)
    const [book, setBook] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        async function getBookDetails(){
            try{
                const response = await fetch(`${URL}${id}.json`)
                const data = await response.json();

                if(data){
                    console.log(data)
                    const {description, title, covers, subject_places, subject_times, subjects} = data;
                    const newBook = {
                        description: description ? description.value : 'No se encontró descripción para este ejemplar',
                        title: title,
                        cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`:coverImg,
                        subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
                        subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
                        subjects: subjects ? subjects.join(", ") : "No subjects found"
                    };
                    setBook(newBook);
                }else{
                    setBook(null);
                }
                setLoading(false);
            }catch(error){
                console.log(error)
                setLoading(false)
            }
        }
        getBookDetails();
    }, [id]);

    let render;
    if(softwareBook.mostrar_resennas(id).length===0){
        render = <div>AÚN NO HAY RESEÑAS PARA ESTE LIBRO. ¡SÉ EL PRIMERO!</div>
    }else{
        const lista_reseñas = softwareBook.mostrar_resennas(id);
        render = lista_reseñas.map((value, i) => {
            return(
                <div className="flex items-center w-full p-5 mt-8 ">
                    <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] p-[3px] border-[1.5px] border-black rounded-full">
                            <img src="\src\assets\img\Profile.png" alt="foto" className="object-cover object-center"/>
                        </div>
                    </div>
                    <div className="flex flex-col w-full p-2 mx-5">
                        <div className="">
                            <h2 className="text-[15px] font-[sansation-regular]">{value.usuario.nombre}</h2>
                        </div>
                        <div className="flex items-center w-full">
                            {value.descripcion}
                        </div>
                        <div className="flex mt-4">
                            <label className="flex swap swap-rotate">
                                <input type="checkbox" />
                                <svg className="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                                <svg className="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                                Me gusta
                            </label>

                            <div className="flex mx-5">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
<g fill="#353c43" ><g transform="scale(5.12,5.12)"><path d="M25,4.0625c-12.58594,0 -22.9375,8.86328 -22.9375,19.9375c0,6.42578 3.5625,12.09375 8.9375,15.71875c-0.00781,0.21484 0,0.54688 -0.28125,1.59375c-0.34766,1.29297 -1.03516,3.125 -2.46875,5.15625l-1.03125,1.4375l1.78125,0.03125c6.17578,0.02734 9.75391,-4.03125 10.3125,-4.6875c1.82422,0.40625 3.72266,0.6875 5.6875,0.6875c12.58203,0 22.9375,-8.86328 22.9375,-19.9375c0,-11.07422 -10.35547,-19.9375 -22.9375,-19.9375zM25,5.9375c11.71484,0 21.0625,8.15234 21.0625,18.0625c0,9.91016 -9.34766,18.0625 -21.0625,18.0625c-2.00391,0 -3.94922,-0.24219 -5.78125,-0.6875l-0.5625,-0.125l-0.375,0.46875c0,0 -2.89062,3.25781 -7.5,4.03125c0.83203,-1.49219 1.46484,-2.87891 1.75,-3.9375c0.39844,-1.48047 0.40625,-2.5 0.40625,-2.5v-0.5l-0.4375,-0.28125c-5.22656,-3.3125 -8.5625,-8.58984 -8.5625,-14.53125c0,-9.91016 9.34375,-18.0625 21.0625,-18.0625z"></path></g></g>
</svg>
Comentar
                            </div>
                        </div>

                    </div>
                    
                </div>
            )
        })
        }
    const add_resenna = () =>{
        if(document.getElementById('comentarioReseña').value!=''){
            const newReseña = new Reseña(usuarioBook.resennas.length, usuarioBook, id, document.getElementById('comentarioReseña').value)
            usuarioBook.add_resenna(newReseña);
            softwareBook.add_resenna(newReseña)
            toast.success('Pensamiento publicado :D', {
                position:'top-center',
                autoClose:2000,
                hideProgressBar:true  ,
                pauseOnHover: false,
                closeOnClick:false,
                draggable:true,
                progress:undefined,
              });
        }else{
            toast.warning('Por favor ingrese un mensaje', {
                position:'top-center',
                autoClose:2000,
                hideProgressBar:true  ,
                pauseOnHover: false,
                closeOnClick:false,
                draggable:true,
                progress:undefined,
              });
        }
        
    }

    if(loading) return <Loader/>;
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
                                <div className="flex flex-col w-full h-auto mt-2 space-y-7 rounded-lg overflow-y-auto scrollbar-none shadow-none">
                                
                                    <section className="flex flex-col w-full shadow-md bg-white rounded-lg">
                                        <div className={`w-full h-[80px] bg-center`}>
                                            <img src={book?.cover_img} alt="portada no encontrada" className="w-full h-[80px] object-cover object-center"/>
                                        </div>
                                        <section className="flex w-full mx-10 justify-start">
                                            <div className={`hidden relative md:flex w-[170px] h-[218px] drop-shadow-lg rounded-lg`}>
                                                <img src={book?.cover_img} alt='portada' className="w-full h-[218px] object-cover object-center"/>
                                            </div>
                                            <div className="flex flex-col justify-center lg:ml-5 mt-10 p-5">
                                                <div className="flex justify-center w-full">
                                                    <h3 className="w-full md:w-[380px] lg:w-[500px]">{book?.subjects}</h3>
                                                </div>
                                                
                                                <span className="w-[250px] font-[sansation-regular] text-[1.7rem] text-black leading-8">{book?.title}</span>
                                                <h3></h3>
                                                <div className="flex mt-2">
                                                    <div className="flex flex-col">
                                                        <h2 className="text-[15px] ml-3">Apreciar</h2>
                                                        <RaitingStart/>
                                                    </div>
                                                    <div className="flex justify-center items-center">
                                                        <h2 className="text-[20px] font-[sansation-regular] ml-5 mr-2 text-center">8.2</h2>
                                                        <div className="bg-[url('/src/assets/img/icons/iconStar.png')] w-[20px] h-[20px] mb-1 bg-contain"></div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </section>
                                        <hr className="mt-20"/>
                                        <section className="flex flex-col bg-[#D9D9D9] bg-opacity-20 w-full p-10 rounded-b-lg">
                                            <h2 className="text-[15px] text-black font-[sansation-regular] mb-7">Sinopsis</h2>
                                            <p>
                                                {book?.description}
                                            </p>

                                        </section>

                                    </section>

                                    <section className="flex flex-col w-full h-[490px] shadow-lg bg-[#FFFFFF] bg-opacity-30 rounded-lg p-10">
                                        <div className="mb-10">
                                            <h2 className="text-[15px] font-[sansation-regular] text-black">Reseñas</h2>
                                        </div>
                                        <form onSubmit={add_resenna} className="flex w-full justify-center items-center space-x-5 px-5">
                                            <div className="flex justify-center items-center w-[50px] md:w-[10%]">
                                                <div className="flex justify-center items-center w-[50px] h-[50px] md:w-[70px] md:h-[70px] p-[3px] border-[1.5px] border-black rounded-full">
                                                    <img src="\src\assets\img\Profile.png" alt="foto" className="object-cover object-center"/>
                                                </div>
                                            </div>

                                            <div className="w-[250px] md:w-[90%]">
                                                <textarea required id="comentarioReseña" placeholder="¿Qué piensas?" className="resize-none flex justify-center px-10 py-8 text-[15px] w-full h-[80px] border-[#353C43] border-opacity-10 border-2 rounded-[15px] bg-white"/>

                                            </div>
                                            <Button className="bg-[url('/src/assets/img/icons/iconSend.png')] w-[30px] h-[30px] bg-cover bg-center shadow-none" onClick={add_resenna}/>
                                        </form>
                                        <div className="flex flex-col justify-center items-center w-full mt-10">
                                        {render}
                                        </div>
                                    </section>
                                    
                                </div>
                            </section>

                            <PerfilSide correoUsuario = {correoUsuario} nombreUsuario={nombreUsuario} usuarioBook={usuarioBook} softwareBook={softwareBook}/>
                            
                        </div>
                    </div>
                </div>
            </div>
            </motion.div>
        </>
    )

    
}