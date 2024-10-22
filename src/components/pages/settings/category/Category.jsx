import { Plus } from 'lucide-react'
import CategoryAddForm from './CategoryAddForm'
import CategoryTable from './CategoryTable'
import React from 'react';

const Category = () => {
  const [isAdd, setIsAdd] = React.useState(false);

  return (
    <section className='p-4'>
        <button className='btn btn-accent' onClick={()=> setIsAdd(true)}><Plus /> Add New</button>
        {isAdd && <CategoryAddForm setIsAdd={setIsAdd}/> }

        <CategoryTable isAdd={isAdd}/>
    </section>
  )
}

export default Category