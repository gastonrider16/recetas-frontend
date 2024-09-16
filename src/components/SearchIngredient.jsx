import React,{useEffect, useState} from 'react'
import makeAnimated from 'react-select/animated';
import axios from 'axios'
import Select from 'react-select';
import { baseUrl } from "../constants"
const animatedComponents = makeAnimated();

const SearchIngredient = (props) => {
    const [optionsChosen, setOptionsChosen] = useState([])
    const [ingredient, setIngredient]= useState([])
    useEffect( ()=> {
        var list = []
        axios.get(baseUrl + '/ingredientes')
        .then(function (response) {
            // handle success
            response.data.map((data)=>{
                list.push({value:data.nombre, label:data.nombre})
                
            })
            setIngredient(list)
        })
        
    },[])
    const complete=(event)=>{ 
        
        setOptionsChosen( event.map((e)=>{
                return e.value
            }))
    }
    const post=(event)=>{ 
        axios.get(baseUrl + '/recetas/search?filtrar='+optionsChosen.join(","))
        .then(function (response) {
            // handle success
            console.log(response.data)
            props.setList(response.data.content)
            props.setBool(true)
        })
    }

  return (
    <div className="z-20 input-group font-primaryT flex flex-row flex-nowrap gap-2 justify-center w-full rounded-2xl">
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            onChange={(e)=>complete(e)}
            options={ingredient}
            placeholder="Ingrese sus ingredientes"
            className='w-full'/>
        <span className="search-btn cursor-pointer flex justify-center items-center px-3 bg-black text-white rounded-lg" onClick={()=>post()}>
            <i className="feather icon-search capitalize font-bold"> Buscar </i>
        </span>
    </div>
  )
}

export default SearchIngredient