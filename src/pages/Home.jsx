import React, { useState } from 'react'
import axios from 'axios'

const Home = () => {

    const [product, setProduct] = useState({})

    const getAllProduct = async () => {
        try {
            const res = await axios.get

        } catch (error) {
            console.log("Error while getting all products")
        }
    }

    return (
        <div>

        </div>
    )
}

export default Home