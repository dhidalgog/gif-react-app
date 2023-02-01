import { useState } from 'react'

export const AddCategory = ({ onAddNewValue }) => {

  const [newCategory, setNewCategory] = useState('');
  
  const handleInputCategory = (event) => {
    setNewCategory(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const newValue = newCategory.trim()
    if(newValue.length <= 1) return;
    onAddNewValue(newValue);
    setNewCategory("");
  }



  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder='Category' value={newCategory} onChange={handleInputCategory}/>
    </form>
  )
}
