import { CheckboxRippleEffect, ButtonGradient, ButtonMateDarkRoute } from "../components/buttons";
import {Link} from "react-router-dom";

import { appFirebase } from "../firebase/credenciales";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase)
export const Login = () => {

  const functAutentication = async(e) => {
    e.preventDefault();
    const user = e.target.txtEmailL.value;
    const password = e.target.txtContraseñaL.value;
    console.log(user, password)

    try {
        await signInWithEmailAndPassword(auth, user, password)    
    } catch (error) {
        alert('Usuario o contraseña incorrectos')
    }
    
  }

  return (
    
    <div className='flex flex-col bg-[url("./assets/img/fondos/fondoLoginVertical.png")] lg:bg-[url("./assets/img/fondos/fondoLogin.png")] bg-cover bg-scroll bg-center items-center justify-center min-w-[280px] min-h-screen py-5 lg:p-10'>
      <main className="flex flex-col items-center justify-center w-full text-center">
        <div className='bg-[#FAFAFF] rounded-xl shadow-[0px_0px_50px_10px_rgba(0,0,0,0.2)] w-[85%] min-w-[260px] flex sm:w-9/12 h-[80vw] md:h-[550px] md:w-[50%] lg:w-[78%] lg:h-[500px] xl:h-[670px] min-h-[500px] max-h-[720px] max-w-[1220px]'>   
          <div className='flex flex-col w-full h-full p-5 md:py-[20px] lg:py-[30px] lg:w-1/2 items-center'>  

            <section className="w-full flex justify-between m-[0.5vh]">

              <div title="Atrás" className="md:px-[12px] lg:px-[15px]">
                 <button type="button" className="w-[15px] h-[15px] md:w-[2rem] md:h-[2rem] xl:w-[2.5rem] xl:h-[2.5rem] bg-[url('./assets/img/icons/Back_2.png')] bg-cover bg-bottom"></button>
              </div>

              <div>
                <p className="text-[12px] md:text-[1.5rem] md:px-[12px] lg:px-[15px] font-[sansation-light] hover:text-[#0094FF]">
                    <Link to="/Register">Registrarse</Link>
                </p> 
              </div>

            </section>

            <form onSubmit={functAutentication} className="relative h-full w-full flex flex-col items-center justify-center">
              
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-[1.5rem] md:text-[1.8rem] xl:text-[2rem]">Bienvenido a</h2>
                <img src="src\assets\img\logo\Logo1.png" alt="Logo" className="h-[50px] md:h-[60px] lg:h-[4rem] xl:h-[5.5rem] max-w-full"/>
                <p className="hidden sm:flex w-5/6 sm:text-[1.3rem] md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.4rem] mt-5 leading-7">Inicia sesión y empieza a explorar un mundo de realidades mágicas</p>
              </div>                            

              <section className="flex flex-col items-center justify-center w-full xl:px-[1.5vh] xl:mt-[30px]">
                <div className="relative flex flex-col items-center w-[90%] xl:w-[75%] md:w-[70%] mt-[30px] mb-[10px] lg:mt-[2rem] lg:mb-[1rem]">
                  <div className="w-full ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-[20px] md:pl-[20px] xl:pl-[1.5rem] pointer-events-none">
                      <img src='src/assets/img/icons/userDark.png' className=" h-[1.5rem] w[1.5rem] md:h-[20px] md:w-[20px] xl:h-[1.7rem] xl:w-[1.7rem]"/>
                    </div>
                    <input type="text" required id="txtEmailL" className="h-[40px] md:h-[3.2rem] lg:h-[3.8rem] bg-[#FAFAFF] border border-gray-300 text-gray-902 text-[1.2rem] md:text-[1.25rem] xl:text-[1.3rem] rounded-full block w-full pl-[4rem] md:pl-[50px] xl:pl-[4rem] px-5" placeholder="Usuario"/>
                  </div>
                </div>

                <div className="relative flex flex-col items-center w-[90%] xl:w-[75%] md:w-[70%]">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-[20px] md:pl-[20px] xl:pl-[1.5rem] pointer-events-none">
                      <img src='src/assets/img/icons/Password_1.png' className="relative h-[1.5rem] w-[1.5rem] md:h-[20px] md:w-[20px] xl:w-[1.6rem] xl:h-[1.6rem]"/>
                    </div>
                    <input type="password" required id="txtContraseñaL" className="h-[40px] md:h-[3.2rem] lg:h-[3.8rem] bg-[#FAFAFF] border border-gray-300 text-gray-902 text-[1.2rem] md:text-[1.25rem] xl:text-[1.3rem] rounded-full block w-full pl-[4rem] md:pl-[50px] xl:pl-[4rem] px-5 dark:border-[#C0C7CE] dark:placeholder-[#C0C7CE]" placeholder="Contraseña"/>
                  </div>                  
                </div>

              </section>

              <section className="w-[90%] md:w-[70%] mt-[0.5rem] xl:mt-[10px] flex items-center justify-between">
                  
                {CheckboxRippleEffect()}
                <div className="items-end text-right">
                  <p className="flex flex-col text-[1rem] md:text-[1rem] xl:text-[1.1rem] hover:text-[#0094FF] mr-3 text-right"><a href="#">¿Olvidaste contraseña?</a></p>
                </div>

              </section>

              <section className="w-[90%] md:w-[72%] flex flex-col-reverse items-center justify-center md:flex-row md:justify-between mt-10 xl:mt-20">
                {ButtonMateDarkRoute ('Crear cuenta', 'crearcuenta', '/Register', 'button')}
                {ButtonGradient ('Iniciar sesión', 'iniciarSesion', 'submit')}
              </section>

            </form>
            
          </div> {/*Inicio de sesión*/}
          
          <div className='hidden lg:flex flex-col lg:w-1/2 bg-[url("./assets/img/fondos/fondoLoginRight.png")] bg-cover bg-center rounded-r-xl xl:py-[30px] xl:px-[20px] text-white items-center justify-center'>
            <div className="w-full h-full flex flex-col items-center justify-end space-y-3 p-10 my-[5rem] xl:my-[150px]">
              <div className='bg-[url("./assets/img/logo/Logo2.png")] w-full h-[10vw] mb-[10px] max-h-[150px] bg-contain bg-no-repeat bg-center'></div>
              <p className="text-[1.2rem] xl:text-[1.5rem] leading-[30px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem blanditiis quas asperiores natus maiores iste repudiandae totam explicabo ea consequuntur.</p> 
            </div>

          </div> {/*Presentación BOOK*/}          

        </div>
      </main>
    </div>
  )
}
