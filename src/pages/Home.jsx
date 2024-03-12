import React, { useEffect, useState } from 'react'
import axios from 'axios'

import HeroSection from '@/components/sections/HeroSection';

const Home = () => {
    const api = import.meta.env.VITE_URL

    const [product, setProduct] = useState({})

    const getAllProduct = async () => {
        try {
            const { data } = await axios.get(`${api}/products`)
            setProduct(data)

        } catch (error) {
            console.log("Error while getting all products")
        }
    }

    useEffect(() => {
        getAllProduct()
    }, [])

    return (
        <section className='w-full h-screen px-14'>

            <HeroSection />

            <div className='w-[90%] mx-auto py-16'>

                <h1 className='text-4xl font-semibold'>Shop by Categories</h1>

                <div>
                    <div>

                    </div>
                </div>

            </div>

        </section >
    )
}

export default Home