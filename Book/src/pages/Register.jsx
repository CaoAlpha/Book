import { Link } from "react-router-dom"
import { DropDown } from "../components/inputForm/DropDown";
import { Input } from "../components/inputForm/Input";
import { SelectButton } from "../components/buttons/SelectButton";
import { appFirebase } from "../firebase/credenciales";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { Button } from "@material-tailwind/react";

import { toast } from "react-toastify";
import { useState } from "react";

const auth = getAuth(appFirebase);

export const Register = () => {

  const firestore = getFirestore(appFirebase);

  const functAutentication = async(e) => {
    e.preventDefault();
    const nombre = e.target.txtNombreR.value;
    const apellido = e.target.txtApellidoR.value;
    const telefono = e.target.txtTelefonoR.value;
    const fechaNacimiento = e.target.txtNacimientoR.value;
    const usuario = e.target.txtUsuarioR.value;
    const contraseña = e.target.txtContraseñaR.value;
    const confirmarcontraseña = e.target.txtContraseñaR2.value;
    
    if (contraseña != confirmarcontraseña){
      toast.warning('Verifique que las contraseñas coincidan, no sea pendejo',{
        position:'bottom-center',
        autoClose:4000,
        hideProgressBar:true  ,
        pauseOnHover: false,
        closeOnClick:false,
        draggable:true,
        progress:undefined,
        theme:'dark'
      })
    }else{
          try {
          
              const infoUsuario = await createUserWithEmailAndPassword(auth, usuario, contraseña, nombre, apellido, telefono, fechaNacimiento);
              console.log(infoUsuario.user.uid);
              console.log(infoUsuario.user)
              const docRef = await doc(firestore, `usuarios/${infoUsuario.user.uid}`);
              
              setDoc(docRef, {Nombre:nombre, Apellido:apellido, Teléfono:telefono, Nacimiento:fechaNacimiento})
              toast.success('¡Bienvenido! :)',{
                position:'top-center',
                autoClose:2000,
                hideProgressBar:true  ,
                pauseOnHover: false,
                closeOnClick:false,
                draggable:true,
                progress:undefined,
                theme:"colored"
              })
              
          } catch (error) {
            toast.error('Error al crear usuario. \nCorreo existente o contraseña invalida.',{
              position:'top-center',
              autoClose:4000,
              hideProgressBar:true  ,
              pauseOnHover: false,
              closeOnClick:false,
              draggable:true,
              progress:undefined,
            })
          }
          
    }
  }
  
  const generos = [
    {label: 'Masculino', value:'masculino'},
    {label: 'Femenino', value: 'femenino'},
    {label: 'Otro', value:'otro'}
  ]
  const preferencias = []
  const [valor1, setValor1] = useState(false)
  const [valor2, setValor2] = useState(false)
  const [valor3, setValor3] = useState(false)
  const [valor4, setValor4] = useState(false)
  const [valor5, setValor5] = useState(false)
  const [valor6, setValor6] = useState(false)
  const [valor7, setValor7] = useState(false)
  const [valor8, setValor8] = useState(false)
  const [valor9, setValor9] = useState(false)
  const [valor10, setValor10] = useState(false)
  const [valor11, setValor11] = useState(false)
  const [valor12, setValor12] = useState(false)
  const [valor13, setValor13] = useState(false)

  if(valor1){
    preferencias.push('Opcion1')
  }
  if(valor2){
    preferencias.push('Opcion2')
  }
  if(valor3){
    preferencias.push('Opcion3')
  }
  if(valor4){
    preferencias.push('Opcion4')
  }
  if(valor5){
    preferencias.push('Opcion5')
  }
  if(valor6){
    preferencias.push('Opcion6')
  }
  if(valor7){
    preferencias.push('Opcion7')
  }
  if(valor8){
    preferencias.push('Opcion8')
  }
  if(valor9){
    preferencias.push('Opcion9')
  }
  if(valor10){
    preferencias.push('Opcion10')
  }
  if(valor11){
    preferencias.push('Opcion11')
  }
  if(valor12){
    preferencias.push('Opcion12')
  }
  if(valor13){
    preferencias.push('Opcion13')
  }

 
  console.log(preferencias)
 
  return (
   <div className='flex flex-around bg-[url("./assets/img/fondos/fondoRegistro.png")] bg-cover bg-center items-center justify-center min-w-[280px] min-h-screen py-5 overflow-auto'>
     <div className="flex flex-col w-[370px] sm:w-[400px] md:w-[450px] lg:w-[700px] lg:max-w-full min-w-[300px] h-[500px] lg:h-auto items-center justify-center bg-white p-8 md:p-10 rounded-2xl shadow-xl">
        
        <div title="Atrás" className="md:px-[12px] lg:px-[15px] object-left w-full">
        <Link to="/"><button type="button" className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] xl:w-[2.5rem] xl:h-[2.5rem] bg-[url('./assets/img/icons/Back_2.png')] bg-cover bg-bottom"></button></Link>
        </div>

        <section className="flex flex-col justify-center items-center mb-12">
          <h1 className="text-center text-[20px] md:text-[1.7rem] lg:text-[1.5rem] xl:text-[2rem] font-[sansation-regular]">Crear Cuenta</h1>
          <div className="w-[75%]">
          <img src="src/assets/img/logo/Logo1.png" alt="Logo" />
          </div>
          
        </section>
        <form onSubmit={functAutentication} className="w-full overflow-auto scrollbar-none">
          <section className="carousel w-full pb-1">
            <div className="carousel-item w-full">
              <div id="form1" className="relative w-full space-y-7 mx-5">

                <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row justify-between">
                  <div className="w-[100%] lg:w-[45%]">
                    {Input("text","txtNombreR","Nombre", "src/assets/img/icons/FaceID.png")}
                  </div>
                  <div className="w-[100%] lg:w-[45%]">
                    {Input("text","txtApellidoR","Apellido", "src/assets/img/icons/FaceID.png")}
                  </div>
                
                
                </div>

                <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row justify-between">
                  <div className="w-[100%] lg:w-[45%]">
                    {Input("number","txtTelefonoR","Teléfono", "src/assets/img/icons/Phone.png")}
                  </div>
                  <div className="w-[100%] lg:w-[45%]">
                    {Input("date","txtNacimientoR","Fecha de nacimiento", "src/assets/img/icons/Gift.png")}
                  </div>
                </div>

                <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row justify-between">
                  <div className="w-[100%] lg:w-[45%]">
                    {Input("user","txtUsuarioR","Usuario", "src/assets/img/icons/User_1.png")}
                  </div>
                  <div className="w-[100%] lg:w-[45%]">
                    {Input("password","txtContraseñaR","Contraseña", "src/assets/img/icons/Password.png")}
                  </div>
                </div>

                <div className="flex flex-col space-y-5 lg:space-y-0 justify-center">
                  
                  <div className="w-[100%] lg:w-[100%]">
                    {Input("password","txtContraseñaR2","Confirmar contraseña", "src/assets/img/icons/Password.png")}
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item w-full mx-5">
              <div id="form2" className="relative w-full mx-5">

                <div className="flex justify-center space-y-5 lg:space-y-0">
                  <div className="w-[100%]">
                    {DropDown('selectGenderR', generos)}
                  </div>

                </div>

                <div>
                  <h2 className="text-[1.2rem] font-[sansation-regular] mb-5">Preferencias</h2>
                </div>

                <div className="flex flex-wrap justify-between">
                  <Button onChange={() => valor1?setValor1(false):setValor1(true)} className="flex items-center justify-center border-2 border-gray-100 hover:border-l-[#0094FF] bg-gray-100 h-[40px] w-[140px] rounded-full px-5 mb-[15px]">
                    <SelectButton id='opcion1R' nombre='Opcion 1'/>
                  </Button>
                  <Button onChange={() => valor2?setValor2(false):setValor2(true)} className="flex items-center justify-center border-2 border-gray-100 hover:border-l-[#0094FF] bg-gray-100 h-[40px] w-[140px] rounded-full px-5 mb-[15px]">
                    <SelectButton id='opcion2R' nombre='Opcion 2'/>
                  </Button>
                  <Button onChange={() => valor3?setValor3(false):setValor3(true)} className="flex items-center justify-center border-2 border-gray-100 hover:border-l-[#0094FF] bg-gray-100 h-[40px] w-[140px] rounded-full px-5 mb-[15px]">
                    <SelectButton id='opcion3R' nombre='Opcion 3'/>
                  </Button>
                  <Button onChange={() => valor4?setValor4(false):setValor4(true)} className="flex items-center justify-center border-2 border-gray-100 hover:border-l-[#0094FF] bg-gray-100 h-[40px] w-[140px] rounded-full px-5 mb-[15px]">
                    <SelectButton id='opcion4R' nombre='Opcion 4'/>
                  </Button>
                  
                </div>
                
                <div className="flex flex-wrap justify-evenly">
                  <Button onChange={() => valor5?setValor5(false):setValor5(true)} className="flex items-center justify-center border-2 border-gray-100 hover:border-l-[#0094FF] bg-gray-100 h-[40px] w-[140px] rounded-full px-5 mb-[15px]">
                    <SelectButton id='opcion5R' nombre='Opcion 5'/>
                  </Button>
                  <Button onChange={() => valor6?setValor6(false):setValor6(true)} className="flex items-center justify-center border-2 border-gray-100 hover:border-l-[#0094FF] bg-gray-100 h-[40px] w-[140px] rounded-full px-5 mb-[15px]">
                    <SelectButton id='opcion6R' nombre='Opcion 6'/>
                  </Button>
                  <Button onChange={() => valor7?setValor7(false):setValor7(true)} className="flex items-center justify-center border-2 border-gray-100 hover:border-l-[#0094FF] bg-gray-100 h-[40px] w-[140px] rounded-full px-5 mb-[15px]">
                    <SelectButton id='opcion7R' nombre='Opcion 7'/>
                  </Button>
                  
                </div>

                <div className="flex flex-wrap justify-between">
                  <Button onChange={() => valor8?setValor8(false):setValor8(true)} className="flex items-center justify-center border-2 border-gray-100 hover:border-l-[#0094FF] bg-gray-100 h-[40px] w-[140px] rounded-full px-5 mb-[15px]">
                    <SelectButton id='opcion8R' nombre='Opcion 8'/>
                  </Button>
                  <Button onChange={() => valor9?setValor9(false):setValor9(true)} className="flex items-center justify-center border-2 border-gray-100 hover:border-l-[#0094FF] bg-gray-100 h-[40px] w-[140px] rounded-full px-5 mb-[15px]">
                    <SelectButton id='opcion9R' nombre='Opcion 9'/>
                  </Button>
                  <Button onChange={() => valor10?setValor10(false):setValor10(true)} className="flex items-center justify-center border-2 border-gray-100 hover:border-l-[#0094FF] bg-gray-100 h-[40px] w-[140px] rounded-full px-5 mb-[15px]">
                    <SelectButton id='opcion10R' nombre='Opcion 10'/>
                  </Button>
                  <Button onChange={() => valor11?setValor11(false):setValor11(true)} className="flex items-center justify-center border-2 border-gray-100 hover:border-l-[#0094FF] bg-gray-100 h-[40px] w-[140px] rounded-full px-5 mb-[15px]">
                    <SelectButton id='opcion11R' nombre='Opcion 11'/>
                  </Button>
                  
                </div>

                <div className="flex flex-wrap justify-evenly">
                  <Button onChange={() => valor12?setValor12(false):setValor12(true)} className="flex items-center justify-center border-2 border-gray-100 hover:border-l-[#0094FF] bg-gray-100 h-[40px] w-[140px] rounded-full px-5 mb-[15px]">
                    <SelectButton id='opcion12R' nombre='Opcion 12'/>
                  </Button>
                  <Button onChange={() => valor13?setValor13(false):setValor13(true)} className="flex items-center justify-center border-2 border-gray-100 hover:border-l-[#0094FF] bg-gray-100 h-[40px] w-[140px] rounded-full px-5 mb-[15px]">
                    <SelectButton id='opcion13R' nombre='Opcion 13'/>
                  </Button>
                  
                  
                </div>
                

              </div>
            </div>

          </section>
          <div className="flex justify-center items-center w-full py-5 space-x-2">
            <a href="#form1" className="text-gray-700 btn btn-circle bg-transparent shadow-none border-0 text-2xl hover:bg-gray-200">❮</a> 
            <a href="#form2" className="text-gray-700 btn btn-circle bg-transparent shadow-none border-0 text-2xl hover:bg-gray-200">❯</a>
          </div>
          <div className="flex justify-center w-[100%]">
            <Button type='submit' id='crearCuentaR' className="w-[95%] h-[40px] font-[sansation-regular] text-white bg-[#353C43] hover:bg-[#4C5660] rounded-full text-[15px] md:text-[1.2rem] xl:text-[1.3rem] py-2 text-center mr-2 mb-2 normal-case">Crear cuenta</Button>
          </div>
        </form>

      </div>
    </div>
  )
}