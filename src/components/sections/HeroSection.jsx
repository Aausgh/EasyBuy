import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from "@/components/ui/button"
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
    return (
        <div className='w-full mx-auto shadow-3xl bg-[#f2f3f2] rounded-xl'>
            <div className='flex justify-around items-center px-3 gap-4 '>

                <div className='flex flex-col items-start gap-4 text-black'>

                    <h2 className='text-5xl font-semibold'>Classic Exclusive</h2>
                    <h1 className='text-8xl font-extrabold'>Women's Collection</h1>
                    <h4 className='text-2xl font-medium'>UPTO 40% OFF</h4>

                    <Button asChild >
                        <Link href="/login" className='flex items-center gap-2'>Shop Now <FaLongArrowAltRight size={18} /></Link>
                    </Button>

                    {/* <h4 className='text-[256px] font-extrabold text-white overflow-hidden'>BEST</h4> */}

                </div>

                <div className="border-[15px] border-black p-2 my-6 ">

                    <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D" alt="hero image" className='w-full h-[700px] rounded-full' />

                </div>

            </div>

        </div>
    )
}

export default HeroSection