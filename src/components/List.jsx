import React, { useState } from 'react'
import { IngredientItem } from "./IngredientItem"

const lista = [
  {
    name: "papa",
    img: "https://www.herbazest.com/imgs/0/a/c/451775/papa.jpg"
  },
  {
    name: "zanahoria",
    img: "https://biotrendies.com/wp-content/uploads/2015/07/zanahoria.jpg"
  },
  {
    name: "cebolla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS_wcfKZxelu5MbvkKtwEyIFJpH0Ppsvbb5iAkXPPrXhY5strYhtSp51TCQkLD752P4E&usqp=CAU"
  },
  {
    name: "apio",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSJ7W090RaqNTem_8zSBRhLrUdO4EUREEy1wXDqt6gRtjrGd8xrjG-GMyu9-gmVG-A6g&usqp=CAU"
  },
  {
    name: "choclo",
    img: "https://www.paulinacocina.net/wp-content/uploads/2022/03/choclo-640x427.jpg?x59898"
  }
]

function List() {
  const [ingredients, setIngredients] = useState(lista)

  const addItem = (name, img) => {
    setIngredients(prevIngredients => {
      prevIngredients.push({
        name,
        img
      })
    })
  }

  const removeItem = (name) => {
    setIngredients(prevIngredients =>
      prevIngredients.filter(ingredient => ingredient.name !== name)
    );
  };

  return (
    <div className='flex flex-col items-center gap-2 m-10 p-4 rounded-lg bg-gray-100'>
      <h2 className='font-primary font-black uppercase text-4xl text-black mb-4'>Ingredientes</h2>
      {ingredients.map(({name, img}) => (
        <IngredientItem key={name} name={name} img={img} onRemoveItem={removeItem} />
      ))}
    </div>
  )
}

export default List
