import { Link } from "react-router-dom"
import { InputForm, dropDown } from "../components/InputForm"
import { ButtonMateDark, selectButton } from "../components/buttons"
import { Routes, Route } from "react-router-dom";
import { appFirebase } from "../firebase/credenciales";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { Home } from "./Home";


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
        alert('Por favor verifique que las constraseñas coincidan')
    }else{
          try {
          
              const infoUsuario = await createUserWithEmailAndPassword(auth, usuario, contraseña, nombre, apellido, telefono, fechaNacimiento);
              console.log(infoUsuario.user.uid);
              console.log(infoUsuario.user)
              const docRef = await doc(firestore, `usuarios/${infoUsuario.user.uid}`);
              
              setDoc(docRef, {Nombre:nombre, Apellido:apellido, Teléfono:telefono, Nacimiento:fechaNacimiento})
              alert('Usuario creado con éxito :D')
              
          } catch (error) {
              alert('Error al crear usuario, correo existente o constraseña inválida')
          }
    }
}
  
  const generos = [
    {label: 'Masculino', value:'masculino'},
    {label: 'Femenino', value: 'femenino'},
    {label: 'Otro', value:'otro'}
  ]
  
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
                    {InputForm("text","txtNombreR","Nombre", "src/assets/img/icons/FaceID.png")}
                  </div>
                  <div className="w-[100%] lg:w-[45%]">
                    {InputForm("text","txtApellidoR","Apellido", "src/assets/img/icons/FaceID.png")}
                  </div>
                
                
                </div>

                <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row justify-between">
                  <div className="w-[100%] lg:w-[45%]">
                    {InputForm("number","txtTelefonoR","Teléfono", "src/assets/img/icons/Phone.png")}
                  </div>
                  <div className="w-[100%] lg:w-[45%]">
                    {InputForm("date","txtNacimientoR","Fecha de nacimiento", "src/assets/img/icons/Gift.png")}
                  </div>
                </div>

                <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row justify-between">
                  <div className="w-[100%] lg:w-[45%]">
                    {InputForm("user","txtUsuarioR","Usuario", "src/assets/img/icons/User_1.png")}
                  </div>
                  <div className="w-[100%] lg:w-[45%]">
                    {InputForm("password","txtContraseñaR","Contraseña", "src/assets/img/icons/Password.png")}
                  </div>
                </div>

                <div className="flex flex-col space-y-5 lg:space-y-0 justify-center">
                  
                  <div className="w-[100%] lg:w-[100%]">
                    {InputForm("password","txtContraseñaR2","Confirmar contraseña", "src/assets/img/icons/Password.png")}
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item w-full mx-5">
              <div id="form2" className="relative w-full mx-5">

                <div className="flex justify-center space-y-5 lg:space-y-0">
                  <div className="w-[100%]">
                    {dropDown('selectGenderR', generos)}
                  </div>

                </div>

                <div>
                  <h2 className="text-[1.2rem] font-[sansation-regular] mb-5">Preferencias</h2>
                </div>

                <div className="flex flex-wrap justify-between">
                  {selectButton('opcion1R', 'Opcion 1')}
                  {selectButton('opcion2R', 'Opcion 2')}
                  {selectButton('opcion3R', 'Opcion 3')}
                  {selectButton('opcion4R', 'Opcion 4')}
                </div>
                
                <div className="flex flex-wrap justify-evenly">
                  {selectButton('opcion5R', 'Opcion 5')}
                  {selectButton('opcion6R', 'Opcion 6')}
                  {selectButton('opcion7R', 'Opcion 7')}
                </div>

                <div className="flex flex-wrap justify-between">
                  {selectButton('opcion8R', 'Opcion 8')}
                  {selectButton('opcion9R', 'Opcion 9')}
                  {selectButton('opcion10R', 'Opcion 10')}
                  {selectButton('opcion11R', 'Opcion 11')}
                </div>

                <div className="flex flex-wrap justify-evenly">
                  {selectButton('opcion12R', 'Opcion 12')}
                  {selectButton('opcion13R', 'Opcion 13')}
                  
                </div>
                

              </div>
            </div>

          </section>
          <div className="flex justify-center items-center w-full py-5 space-x-2">
            <a href="#form1" className="text-gray-700 btn btn-circle bg-transparent shadow-none border-0 text-2xl hover:bg-gray-200">❮</a> 
            <a href="#form2" className="text-gray-700 btn btn-circle bg-transparent shadow-none border-0 text-2xl hover:bg-gray-200">❯</a>
          </div>
          <div className="flex justify-center w-[100%]">
            {ButtonMateDark("Crear cuenta", "crearCuentaR", "submit")}
          </div>
        </form>

      </div>
    </div>
  )
}