
import React from 'react'
import { FaShippingFast } from 'react-icons/fa'
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaCreditCard, FaHeadphonesSimple } from "react-icons/fa6";

const items = [
    {
        icon: <FaShippingFast size={44} />,
        title: "Free Shipping",
        desc: "Free shipping for order above $150"
    },
    {
        icon: <RiMoneyDollarCircleLine size={44} />,
        title: "Money Guarantee",
        desc: "Within 30 days for an exchange"
    },
    {
        icon: <FaHeadphonesSimple size={44} />,
        title: "Online Support",
        desc: "24 hours a day, 7 days a week"
    },
    {
        icon: <FaCreditCard size={44} />,
        title: "Flexible Payment",
        desc: "Pay with multiple credit cards"
    }
]

const Features = () => {
    return (
        <div className='w-[95%] mx-auto py-6 my-28 px-32'>
            <div className='flex justify-between items-centergap-8'>

                {
                    items.map((item) => (
                        <div className='px-2 py-4'>
                            {item.icon}
                            <h1 className='text-2xl font-bold mt-4 mb-2'>{item.title}</h1>

                            <p>{item.desc}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Features