import React, { useState } from 'react'
import axios from 'axios'

const SearchRecipe = (props) => {
  const [search, setSearch] = useState("")

  const searcher = (e) => {
        setSearch(e.target.value) 
        console.log(search)
    }
  const wordSearch = (search) =>{
    axios.get("http://localhost:8081/api/v1/recetas?filtrar="+search)
        .then(function (response) {
            // handle success
            console.log(response.data)
            props.setList(response.data)
            //props.setList(response.data)
        })
    
  }
  const text= "Buscar "+ props.type
  return (
    <div className="input-group">
       <input value={search} onChange={searcher} type="text" id="m-search" className="form-control" placeholder={text} />
       <span className="search-btn btn btn-primary" onClick={()=>wordSearch()}>
          <i className="feather icon-search "> Buscar </i>
       </span>
    </div>
  )
}

export default SearchRecipe