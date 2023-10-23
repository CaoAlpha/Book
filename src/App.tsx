//import Form from './components/form';
import { ButtonMateDark, ButtonGradient, CheckboxRippleEffect } from "./components/buttons"
export const App = () => {

  return (
    <div className='  flex flex-col bg-[url("./assets/img/fondos/fondoLoginVertical.png")] lg:bg-[url("./assets/img/fondos/fondoLogin.png")] bg-cover bg-scroll bg-center items-center justify-center min-w-[280px] min-h-screen py-5 lg:p-10'>
      <main className="flex flex-col items-center justify-center w-full text-center">
        <div className='bg-[#FAFAFF] rounded-xl shadow-[0px_0px_30px_10px_rgba(0,0,0,0.2)] w-[85%] min-w-[260px] flex sm:w-9/12 h-[450px] md:h-[720px] lg:h-[500px] xl:h-[80vh] min-h-[450px] max-h-[720px] max-w-[1080px]'>   
          <div className='flex flex-col w-full h-full p-5 lg:p-7 lg:w-1/2 items-center'>      
            <section className="w-full flex justify-between m-[0.5vh]">
              <div title="Atrás">
                 <button type="button" className="w-[15px] h-[15px] md:w-[30px] md:h-[30px] lg:w-[1.5rem] lg:h-[1.5rem] bg-[url('./assets/img/icons/Back_2.png')] bg-cover bg-bottom"></button>
                 <a href="#" className=""></a>
              </div>

              <div>
                <p className="text-[12px] md:text-[15px] xl:text-[1rem] font-[sansation-regular] hover:text-[#0094FF]"><a href="#">Registrarse</a></p>
              </div>
            </section>

            <section className="relative h-full w-full flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-[15px] md:text-[20px] lg:text-[20px] xl:text-[1.7rem]">Bienvenido a</h2>
                <img src="src\assets\img\logo\Logo1.png" alt="Logo" className="h-[50px] md:h-[80px] lg:h-[5rem] max-w-full"/>
                <p className="hidden sm:flex w-5/6 text-[13px] xl:text-[1.2rem] mt-5">Inicia sesión y empieza a explorar un mundo de realidades mágicas</p>
              </div>                            

              <section className="flex flex-col items-center justify-center w-full px-[1.5vh]">
                <div className="relative flex flex-col items-center w-[90%] md:w-[70%] mt-[30px] mb-[10px] lg:mt-[2rem] lg:mb-[1rem]">
                  <div className="w-full ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-[10px] md:pl-[20px] xl:pl-[1rem] pointer-events-none">
                      <img src='src/assets/img/icons/user.png' className=" h-[12px] w[12px] md:h-[20px] md:w-[20px] xl:h-[1.2rem] xl:w-[1.2rem]"/>
                    </div>
                    <input type="text" id="email-address-icon" className="h-[32px] md:h-[40px] xl:h-[3rem] bg-[#FAFAFF] border border-gray-300 text-gray-902 text-[12px] md:text-[15px] xl:text-[1rem] rounded-full block w-full pl-[30px] md:pl-[50px] xl:pl-[3rem] px-5 dark:border-[#C0C7CE] dark:placeholder-[#C0C7CE]" placeholder="Usuario"/>
                  </div>

                </div>

                <div className="relative flex flex-col items-center w-[90%] md:w-[70%]">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-[10px] md:pl-[20px] xl:pl-[1rem] pointer-events-none">
                      <img src='src/assets/img/icons/Password_1.png' className="relative h-[12px] w-[12px] md:h-[20px] md:w-[20px] xl:w-[1.2rem] xl:h-[1.2rem]"/>
                    </div>
                    <input type="password" id="email-addes-icon" className="h-[32px] md:h-[40px] xl:h-[3rem] text-xs bg-[#FAFAFF] border border-gray-300 text-gray-902 text-[12px] md:text-[15px] xl:text-[1rem] rounded-full block w-full pl-[30px] md:pl-[50px] xl:pl-[3rem] px-5 dark:border-[#C0C7CE] dark:placeholder-[#C0C7CE]" placeholder="Contraseña"/>
                  </div>

                  

                </div>
              </section>

              <section className="w-[90%] md:w-[70%] flex items-center justify-between">
                  {CheckboxRippleEffect()}
                <div className="items-end text-right">
                  <p className="flex flex-col text-[11px] md:text-[12px] xl:text-[0.9rem] hover:text-[#0094FF] mr-2 text-right"><a href="#">¿Olvidaste contraseña?</a></p>
                </div>

                
                
              </section>

              <section className="w-[90%] md:w-[70%] flex flex-col-reverse items-center justify-center md:flex-row md:justify-between mt-12">
                {ButtonMateDark ('Crear cuenta', 'crearcuenta')}
                {ButtonGradient ('Iniciar sesión', 'iniciarSesion')}
              </section>


            </section>
            
            
            
          </div> {/*Inicio de sesión*/}
          
          <div className='hidden lg:flex flex-col lg:w-1/2 bg-[url("./assets/img/fondos/fondoLoginRight.png")] bg-cover bg-center rounded-r-xl text-white items-center justify-center'>
            
            <div className="w-full h-full flex flex-col items-center justify-end space-y-3 p-10 my-[5rem] xl:my-[15vh]">
              <div className='bg-[url("./assets/img/logo/Logo2.png")] w-full h-[10vw] max-h-[150px] bg-contain bg-no-repeat bg-center'></div>
              <p className="text-[1.2rem] leading-9 font-[sansation-regular]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem blanditiis quas asperiores natus maiores iste repudiandae totam explicabo ea consequuntur.</p>
             
            </div>
            

          </div> {/*Presentación BOOK*/}
          
        </div>
      </main>
      
    </div>
  )
}

