import { useState } from "react";
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One piece']);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddNewValue={onAddCategory}/>
      {categories.map(category => {
        return (
          <GifGrid key={category} category={category}/>
        )
      })}
      
    </>
  )
}


// Notas:
// 1. Para actualizar un estado que contenga un arreglo se debe utilizar la destructuracion de arreglo
// para mantener los valores actuales y agregar uno nuevo
// Ejemplo: [...arreglo, 'nuevovalor'];