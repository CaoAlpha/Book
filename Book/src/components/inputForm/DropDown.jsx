import Select from "react-select";
export function DropDown(ide, opciones){
  
  const selectChange = ({value}) => {
    console.log({value});
  }

  return(
    <>  
      
        <Select
        id={ide}
          defaultValue={{label:'Género', value:'genero'}}
          options={opciones}
          onChange={selectChange}
        />
      
    </>
  )
}