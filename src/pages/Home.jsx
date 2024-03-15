import React, { useEffect, useState } from 'react'
import axios from 'axios'

import HeroSection from '@/components/sections/HeroSection';
import ShopByCat from '@/components/ShopByCat';
import { item } from '@/assets/constants';
import BestSeller from '@/components/sections/BestSeller';
import CustomerCard from '@/components/CustomerCard';
import { customer } from '@/assets/constants';
import InstagramStories from '@/components/sections/InstagramStories';
import Testimonial from '@/components/sections/Testimonial';
import Features from '@/components/sections/Features';

const Home = () => {
    const api = import.meta.env.VITE_URL

    const [product, setProduct] = useState([])

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
        <section className='w-full px-14 font-roboto'>

            <HeroSection />

            <div className='w-[90%] mx-auto py-6 mt-28 px-40'>

                <h1 className='text-4xl font-bold'>Shop by Categories</h1>

                <div className='w-full py-8 mx-auto flex justify-between items-center'>

                    {
                        item.map((item) => (
                            <ShopByCat item={item} />
                        ))
                    }

                </div>

            </div>

            <BestSeller product={product} />

            <div className='w-[95%] mx-auto py-6 mt-28 px-40'>

                <h1 className='text-4xl font-bold'>What our Customers say's</h1>

                <div className='w-full py-8 mx-auto flex flex-col justify-around items-center gap-8'>

                    {/* <div className='flex justify-around items-center'>
                        {
                            customer.map((c) => (
                                <CustomerCard c={c} />
                            ))
                        }
                    </div> */}

                    <Testimonial />

                </div>


            </div>

            <InstagramStories />

            <Features />

        </section >
    )
}

export default Home