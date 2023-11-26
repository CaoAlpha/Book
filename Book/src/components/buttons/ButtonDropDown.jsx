import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import React from "react";
import {Menu, MenuHandler, MenuList, MenuItem} from "@material-tailwind/react";
import { getAuth, signOut } from "firebase/auth"
import { appFirebase } from "../../firebase/credenciales"

const auth = getAuth(appFirebase)

export const ButtonDropDown = (icon, lista, largo, ancho) => {
  
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <Menu placement="bottom-end">
      <MenuHandler>
        <Button className="flex justify-center items-center md:h-[70%] rounded-md shadow-none">
          <img src={icon} className="h-[70%] w-[70%]"/>
        </Button>
      </MenuHandler>
      <MenuList className={`${largo} ${ancho} rounded-[7px] text-[15px] flex flex-col justify-center`}>
        <MenuItem className="text-right">{lista[0]}</MenuItem>
        <MenuItem className="text-right">{lista[1]}</MenuItem>
        <Menu
          placement="right-start"
          open={openMenu}
          handler={setOpenMenu}
          allowHover
          offset={15}
        >
        </Menu>
        <MenuItem onClick={()=> signOut(auth)} className="text-right"><Link to="/">{lista[2]}</Link></MenuItem>
      </MenuList>
    </Menu>
  );
}