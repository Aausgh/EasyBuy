import React from 'react'
import Card from '../Card'

const BestSeller = ({ product }) => {
    return (
        <div className='w-[95%] mx-auto py-6 mt-28 px-40 bg-[#f2f3f2] rounded-xl'>

            <h1 className='text-4xl font-bold text-center py-10'>Our Bestseller</h1>

            <div className='w-full py-8 mx-auto flex justify-between items-center flex-wrap '>

                {
                    product.map((p) => (
                        <Card p={p} />
                    )).slice(0, 8)
                }

            </div>

        </div>
    )
}

export default BestSeller