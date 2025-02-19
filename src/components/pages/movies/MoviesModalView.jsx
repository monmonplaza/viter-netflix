import { devImgPath } from '@/components/helpers/functions-general'
import ModalWrapper from '@/components/partials/modals/ModalWrapper'
import { Cast, Download, Play, Plus, Send, ThumbsUp, X } from 'lucide-react'

const MoviesModalView = ({itemEdit, setIsView}) => {

    const handleClose = () => setIsView(false)
  return (
    <>
        <ModalWrapper>
            <div className="modal-main z-50 max-w-[600px] w-full rounded-md overflow-hidden">
                <div className="movie-thumbnail relative">
                    <img src={`${devImgPath}/${itemEdit.movies_image}`} alt="" className='w-full h-auto lg:h-[330px] object-cover aspect-video relative z-0 ' />
                    <div className='h-full w-full absolute top-0 left-0 bg-gradient-to-t from-black'></div>
                    <div className='absolute top-3 right-3 flex gap-2'>
                        <button className='size-[30px] grid place-content-center bg-black rounded-full'><Cast size={16}/></button>
                        <button className='size-[30px] grid place-content-center bg-black rounded-full' onClick={handleClose}><X size={16}/></button>
                    </div>
                    <h2 className='absolute left-2 bottom-3'>{itemEdit.movies_title}</h2>
                </div>

                <div className="movie-info p-4 bg-secondary">                    
                    <ul className='flex gap-2 text-xs items-center mb-5'>
                        <li>{itemEdit.movies_year}</li>
                        <li>{itemEdit.movies_genre}</li>
                        <li>{itemEdit.movies_duration}</li>
                        <li><span className='px-1 py-0.5 leading-none text-[8px] -translate-y-0.5 inline-block border border-line'>HD</span></li>
                    </ul>

                    <button className='font-semibold flex gap-3 bg-white text-black px-2 py-1.5 rounded-md mb-2 justify-center items-center transition-all hover:opacity-80 w-full'><Play size={14} fill={"#000"}/> Play</button>

                    <button className='font-semibold flex gap-3 bg-primary px-2 py-1.5 rounded-md mb-5 justify-center items-center transition-all hover:opacity-80 w-full '><Download size={14}/> Download</button>

                    <h6 className='text-sm mb-1'>Summary</h6>
                    <p>{itemEdit.movies_summary}</p>

                    <h6 className='text-sm mb-1'>Cast</h6>
                    <p>{itemEdit.movies_cast}</p>

                    <div className='flex gap-20 mt-5'>
                        <button className='text-[10px] flex flex-col justify-center'><Plus size={24}/><span className='pt-1 opacity-50'> My List</span></button>
                        <button className='text-[10px] flex flex-col justify-center'><ThumbsUp size={24}/><span className='pt-1 opacity-50'> Rate</span></button>
                        <button className='text-[10px] flex flex-col justify-center'><Send size={24}/><span className='pt-1 opacity-50'> Share</span></button>
                    </div>
                </div>
            </div>
        </ModalWrapper>
    </>
  )
}

export default MoviesModalView