import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Navbar } from '../components/Navbar';
import { Recipes } from '../components/Recipes';
import SearchIngredient from '../components/SearchIngredient';

const Home = () => {
  const [list, setList]=useState([])
  const[bool, setBool]=useState(false)

  
  console.log(list)

  return (
    <>
      <Navbar />
      <div className='mt-4'>
        <Row className='flex justify-center'>
          <Col sm={12} lg={8}>
            <SearchIngredient setList={setList} type="Ingredientes" setBool={setBool}/>
          </Col>
        </Row>
        {/*{list.length > 0 ? list.map((data)=>(

                    <Recipe  name={data.nombre} description={data.descripcion} image={data.imagen} ingredients={data.ingredientes} />
              )): " no hay productos"}
        <List/>*/}
        <Recipes recipes={list} setRecipes={setList} bool={bool}/>
      </div>
    </>
  )
}

export default Home