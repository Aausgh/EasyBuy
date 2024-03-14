

const ShopByCat = ({ item }) => {
    return (
        <figure className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="#">
                <img className="rounded-lg h-[450px] w-[300px]" src={item.img} alt="image description" />
            </a>
            <figcaption className="absolute px-4 bottom-6 ">
                <p className="text-center bg-white text-black font-semibold text-xl px-6 py-2 rounded-xl">{item.title}</p>
            </figcaption>
        </figure>

    )
}

export default ShopByCat