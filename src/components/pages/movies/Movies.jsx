import { devImgPath } from '@/components/helpers/functions-general'
import Footer from '@/components/partials/Footer'
import Header from '@/components/partials/Header'
import Navigation from '@/components/partials/Navigation'
import { Archive, ArchiveRestore, Clapperboard, FileVideo, LayoutDashboard, Pencil, Plus, Search, Trash } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import MoviesTable from './MoviesTable'
import ModalConfirm from '@/components/partials/modals/ModalConfirm'
import ModalDelete from '@/components/partials/modals/ModalDelete'
import ModalValidate from '@/components/partials/modals/ModalValidate'
import ModalError from '@/components/partials/modals/ModalError'
import ToastSuccess from '@/components/partials/ToastSuccess'
import SpinnerWindow from '@/components/partials/spinners/SpinnerWindow'

const Movies = () => {
  return (
    <>
  <section className='flex  min-h-screen bg-secondary'>
    <aside className='bg-primary text-dark basis-[200px]'>
      <Navigation menu="movies"/>
    </aside>
    <main className='basis-[calc(100%-200px)] min-h-[100vh] grid grid-rows-[auto_1fr_auto]'>
      <Header title="Movies" subtitle="List of Movies"/>
      <MoviesTable/>
      <Footer/>
    </main>
  </section>
      {/* <ModalConfirm/> */}
      {/* <ModalDelete/> */}
      {/* <ModalValidate/> */}
      {/* <ModalError/> */}
      {/* <ToastSuccess/> */}
      {/* <SpinnerWindow/> */}
    </>
  )
}

export default Movies