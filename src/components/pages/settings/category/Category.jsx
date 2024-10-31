import { Plus } from 'lucide-react'
import CategoryAddForm from './CategoryAddForm'
import CategoryTable from './CategoryTable'
import React from 'react';

const Category = () => {
  const [isAdd, setIsAdd] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null)


  const handleAdd = () => {
    setIsAdd(true)
    setItemEdit(null)
  }

  return (
    <section className='p-4'>
        <button className='btn btn-accent' onClick={handleAdd}><Plus /> Add New</button>
        {isAdd && <CategoryAddForm setIsAdd={setIsAdd} itemEdit={itemEdit}/> }

        <CategoryTable isAdd={isAdd}/>
    </section>
  )
}

export default Category