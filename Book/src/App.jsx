import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import {Register} from "./pages/Register";
import {Home} from "./pages/Home"

import { useState } from "react";

//import Form from './components/form';
import { appFirebase } from './firebase/credenciales';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(appFirebase)


export const App = () => {
  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase){
      setUsuario(usuarioFirebase)
    }else{
      setUsuario(null)
    }

  });

  return (
    <>  

      <Routes>
        {usuario ? <Route path="/"element={<Home correoUsuario = {usuario.email}/>}/> : <Route path="/" element={<Login/>}/>}
        <Route path="/Register" element={<Register/>}/> 
      </Routes>

    </>
    
  )
}
