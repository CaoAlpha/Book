import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import {Register} from "./pages/Register";
import {MiBiblioteca} from "./pages/MiBiblioteca";
import {Home} from "./pages/Home"

import { useState } from "react";

//import Form from './components/form';
import { appFirebase } from './firebase/credenciales';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { NavbarDefault } from "./components/navBar";
import { BookList } from "./components/BookList";

const auth = getAuth(appFirebase)


export function App() {
  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase){
      setUsuario(usuarioFirebase)
    }else{
      setUsuario(null)
    }

  });

  if(usuario){
    return (
      <>  
        
          <NavbarDefault/>
        
        
        <Routes>
          
          <Route path="/"element={<Home correoUsuario = {usuario.email}/>}/> 
          <Route path="/MiBiblioteca" element={<MiBiblioteca/>}/>
          <Route path="/book" element={<BookList correoUsuario={usuario.email}/>}/>
          
        </Routes>
        
  
      </>
      
    )
  }else{
    return(
      <>
      <Routes>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/" element={<Login/>}/>
      </Routes>
      </>
      
    )
  }
  
}
