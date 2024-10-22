import { devImgPath } from '@/components/helpers/functions-general'
import { Play, Search } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <header className='bg-primary py-5'>
        <div className="container max-w-[1300px] w-full mx-auto px-4">            
            <div className="flex justify-between items-center">
                <img src={`${devImgPath}/logo-netflix.png`} alt="" className='w-[120px] '/>
                <ul className='flex gap-4 mr-auto ml-10'>
                    <li><Link to="/">TV Shows </Link></li>
                    <li><Link to="/">Movies </Link></li>
                    <li><Link to="/">Recently Added</Link></li>
                    <li><Link to="/">My List</Link></li>
                </ul>
             
                <button className=''><Search/></button>

            </div>
        </div>
    </header>

    <div className="banner h-[calc(100vh-72.5px)] relative">
        <img src={`${devImgPath}/banner-wedding-singer.jpg`} alt="" className='h-full w-full object-cover'/>
        <div className='absolute top-0 left-0 w-full h-full  bg-gradient-to-r from-black to-tranparent'></div>

        <div className='absolute top-1/2 -translate-y-1/2 left-[calc((100vw-1300px)/2+16px)] max-w-[450px]'>
            <ul className='flex gap-2 text-base items-center mb-3'>
                <li>2022</li>
                <li>Romance/Comedy</li>
                <li>1h 43mins</li>
                <li><span className='px-1 py-0.5 leading-none text-[8px] -translate-y-0.5 inline-block border border-line'>HD</span></li>
            </ul>
            <h1 className='text-[clamp(30px,_6vw,_60px)] mb-5'>The Wedding Singer</h1>
            <p className='text-base mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores harum beatae quam. Impedit beatae repellat ipsam, natus deserunt, praesentium quia voluptatem quod culpa provident nihil asperiores vel odio eligendi.</p>

            <p className='mb-5 text-base'>Adam Sandler, Drew Barrymore, Christine Taylor, Allen Covert, Matthew Glave, Ellen Albertini Dow, Angela Featherston</p>

             <div className='flex gap-3'>
                <button className='btn btn-accent min-w-[100px] flex justify-center'><Play fill={"#fff"} size={16}/> Play</button>
                <button className='btn bg-gray-700 text-white min-w-[100px] bg-opacity-20 flex justify-center'> More Info</button>

            </div>   
        </div>
    </div>
    </>
  )
}

export default Home