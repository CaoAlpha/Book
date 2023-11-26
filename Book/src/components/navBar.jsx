import React from "react";
import {Link} from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {ButtonDropDown} from './buttons/ButtonDropDown'
import { ButtonIcon } from "./buttons/ButtonIcon";
 
export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:space-x-16">
      
      <section className="lg:hidden flex items-center gap-x-2 p-1 border-b-[1px] lg:border-b-0 cursor-pointer text-[#353C43] hover:bg-gray-50">
        <div className="flex items-center w-[35px] md:w-[45px] h-[35px] md:h-[45px] px-2">
          <a href="#">
            <ButtonIcon id='homeMenu' imagen='src/assets/img/icons/menu/User_1.png' style='md:h-[70%] rounded-md'/>
          </a>
        </div>
        <a className="text-[15px] hover:text-[#00E0FF]">Mi perfil</a>
      </section>

      <section className="flex items-center gap-x-2 p-1 border-b-[1px] lg:border-b-0 text-[#353C43] hover:bg-gray-50">
        <div className="flex items-center w-[35px] md:w-[45px] h-[35px] md:h-[45px] px-2">
          <a href="#">
            <ButtonIcon id='homeMenu' imagen='src/assets/img/icons/menu/Home.png' style='md:h-[70%] rounded-md'/>
          </a>
        </div>
        <a className="text-[15px] cursor-pointer hover:text-[#00E0FF]"><Link to='/'>Inicio</Link></a>
      </section>

      <section className="flex items-center gap-x-2 p-1 border-b-[1px] lg:border-b-0 text-[#353C43] hover:bg-gray-50">
        <div className="flex items-center w-[35px] md:w-[45px] h-[40px] md:h-[45px] px-2">
          <a href="#">
            <ButtonIcon id='libraryMenu' imagen='src/assets/img/icons/menu/Books.png' style='md:h-[70%] rounded-md'/>
          </a>
        </div>
        <a className="text-[15px] cursor-pointer hover:text-[#00E0FF]"><Link to='/MiBiblioteca'>Mi biblioteca</Link></a>
      </section>

      <section className="flex items-center gap-x-2 p-1 border-b-[1px] lg:border-b-0 text-[#353C43] hover:bg-gray-50">
        <div className="flex items-center w-[35px] md:w-[45px] h-[40px] md:h-[45px] px-2">
          <a href="#">
            <ButtonIcon id='alarmMenu' imagen='src/assets/img/icons/menu/Alarm.png' style='md:h-[70%] rounded-md'/>
          </a>
        </div>
        <a className="text-[15px] cursor-pointer hover:text-[#00E0FF]">Notificaciones</a>
      </section>

      <section className="hidden lg:flex items-center gap-x-2 p-1 border-b-[1px] lg:border-b-0 text-[#353C43] hover:bg-gray-50">
        <div className="flex items-center w-[35px] md:w-[45px] h-[40px] md:h-[45px] px-2">
        <div>
          {ButtonDropDown('src/assets/img/icons/menu/ExpandArrow.png', ['Mi perfil','Configuraciones','Cerrar sesión'], 'h-[100px]', 'w-[150px]')}
        </div>
        </div>
      </section>
    </ul>
  );
 
  return (
    <div className="flex justify-center items-center w-full">
    <Navbar className="max-w-[1800px] px-10 py-2 lg:py-0 lg:px-20 rounded-none top-0 sticky shadow">
      <div className="flex items-center justify-between h-[45px] lg:h-[60px]">
        <Typography as="a" href="#">
          <Button type='button' className="flex mt-2 lg:mt-0 items-center w-full h-[40px] lg:h-[45px] shadow-none"><img src='src\assets\img\logo\Logo1.png' alt="logo" className="w-auto h-full"/></Button>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        
        <IconButton
          variant="text"
          className="h-auto w-auto lg:hidden self-center mb-10 mr-10"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48" fill="#0094FF">
              <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 30 30" fill="#353c43">
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
            </svg>
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <div className="py-7 lg:hidden">
          {navList}
        </div>
      </Collapse>
    </Navbar>
    </div>
  );
}