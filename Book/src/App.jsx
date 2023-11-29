import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import {Register} from "./pages/Register";
import {MiBiblioteca} from "./pages/MiBiblioteca";
import {Home} from "./pages/Home"

import { useState, useEffect } from "react";

import { appFirebase } from './firebase/credenciales';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { NavbarDefault } from "./components/navBar";
import { BookList } from "./components/BookList";
import { BookDetails } from "./components/perfil/bookDetails/BookDetails";
import { Usuario } from "./core/persona/Usuario";
import { Book } from "./core/sistema/Book";

const firestore = getFirestore(appFirebase);
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

  const [nombre, setNombre] = useState(null);
  useEffect(()=>{
    const getInfo = async() => {
      try{
        const docRef = doc(firestore, "usuarios", usuario.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const nombreUsuario = docSnap.data().Nombre.toString();
          setNombre(nombreUsuario);
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      }catch (error) {
        console.log('Error')
      }
    };
    if (usuario) {
      getInfo();
    }
  }, [usuario]);

  if(usuario){
    
    
      const usuarioBook = new Usuario(
        '',
        nombre,
        [],
        [],
        []
      )

      const softwareBook = new Book(
        []
      )
      console.log(usuarioBook)
      return( 
        <>
          <NavbarDefault/>
          
          
          <Routes>
            
            <Route path="/"element={<Home correoUsuario = {usuario.email} nombreUsuario={nombre} usuarioBook={usuarioBook} softwareBook={softwareBook}/>}/> 
            <Route path="/MiBiblioteca" element={<MiBiblioteca/>}/>
            <Route path="/book" element={<BookList correoUsuario = {usuario.email} nombreUsuario={nombre} usuarioBook={usuarioBook} softwareBook={softwareBook}/>}/>
            <Route path="/book/:id" element={<BookDetails correoUsuario = {usuario.email} nombreUsuario={nombre} usuarioBook={usuarioBook} softwareBook={softwareBook}/>}/>
            
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
