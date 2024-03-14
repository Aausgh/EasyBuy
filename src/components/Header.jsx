import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"

import { GoSearch } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'



const Header = () => {

    const components = [
        {
            title: "Men",
            href: "/men",
            item: [
                {
                    name: "T-Shirts",
                    href: "/men/clothes/t-shirts"
                },

                {
                    name: "Formal Shirts",
                    href: "/men/clothes/formal-shirts"
                },
                {
                    name: "Jackets",
                    href: "/men/clothes/jackets"
                },
                {
                    name: "Blazers & Coats",
                    href: "/men/clothes/blazers-coats"
                },
                {
                    name: "Pants",
                    href: "/men/clothes/pants"
                },

            ],

        },

        {
            title: "Women",
            href: "/women",
            item: [
                {
                    name: "T-Shirts",
                    href: "/women/clothes/t-shirts"
                },
                {
                    name: "Pants",
                    href: "/women/clothes/jackets"
                },
                {
                    name: "Sarees",
                    href: "/women/clothes/sarees"
                },
                {
                    name: "Jackets",
                    href: "/women/clothes/jackets"
                },
                {
                    name: "Ethnic Wear",
                    href: "/women/clothes/ethnic-wear"
                },

            ],

        },
        {
            title: "Kids",
            href: "/kids",
            item: [
                {
                    name: "T-Shirts",
                    href: "/kids/clothes/t-shirts"
                },
                {
                    name: "Jeans",
                    href: "/kids/clothes/jackets"
                },
                {
                    name: "Jackets",
                    href: "/kids/clothes/jackets"
                },
                {
                    name: "Trousers",
                    href: "/kids/clothes/trousers"
                },
                {
                    name: "Shirts",
                    href: "/kids/clothes/shirts"
                },


            ],

        },
        {
            title: "Footwear",
            href: "/footwear",
            item: [
                {
                    name: "Casual Shoes",
                    href: "/kids/footwear/casual-shoes"
                },
                {
                    name: "Boots",
                    href: "/kids/footwear/boots"
                },
                {
                    name: "Sports Shoes",
                    href: "/kids/footwear/sport-shoes"
                },
                {
                    name: "Flats",
                    href: "/kids/footwear/flats"
                },
                {
                    name: "Heels",
                    href: "/kids/footwear/heels"
                },
            ]
        }

    ]


    const navLink = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact Us', href: '/contact' }
    ]

    return (
        <nav>
            <div className='w-full flex justify-around items-center mx-auto'>

                <div>
                    <img src={logo} alt="logo" className='w-48 h-28' />
                </div>

                <div className='flex justify-around items-center gap-8' >

                    {navLink.map((link) => (

                        <Link key={link.name} to={link.href} className='text-lg font-semibold'>
                            {link.name}
                        </Link>

                    ))}


                    <Menu>
                        <MenuButton fontSize={18} fontWeight={600}>
                            Shop <ChevronDownIcon />
                        </MenuButton>

                        <MenuList className='flex justify-around items-start gap-10 px-2'>

                            {components.map((li) => (

                                <MenuGroup key={li.title} title={li.title} as={Link} to={li.href} fontSize={20}>

                                    <div className='flex flex-col justify-center items-start'>

                                        <MenuGroup fontSize={16} fontWeight={600}>
                                            {li.item.map((c) => (
                                                <MenuItem as={Link} to={c.href} fontSize={14} key={c.name}>{c.name}</MenuItem>
                                            ))}
                                        </MenuGroup>

                                    </div>

                                </MenuGroup>

                            ))}

                        </MenuList>
                    </Menu>

                </div>

                <div className='flex justify-around items-center gap-4 '>



                    <GoSearch size={23} />
                    <CiShoppingCart size={28} />

                    <Button asChild>
                        <Link href="/login">Login</Link>
                    </Button>

                </div>

            </div>
        </nav>
    )
}

export default Header