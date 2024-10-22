import { Archive, ArchiveRestore, Pencil, Plus, Trash } from 'lucide-react'
import React from 'react'
import RatingsAddForm from './RatingsAddForm';
import RatingsTable from './RatingsTable';

const Rating = () => {
  const [isAdd, setIsAdd] = React.useState(false);

  return (
    <section className='p-4'>
        <button className='btn btn-accent' onClick={()=> setIsAdd(true)}><Plus /> Add New</button>
        {isAdd && <RatingsAddForm setIsAdd={setIsAdd}/> }
        <RatingsTable isAdd={isAdd}/>

    </section>
  )
}

export default Rating