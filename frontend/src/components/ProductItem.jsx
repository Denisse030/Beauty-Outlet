import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({id, image, name, price}) => {

    const {currency} = useContext(ShopContext);


  return (
    <Link className="text-gray-700 cursor-pointer block" to={`/product/${id}`}>
        <div className="bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)] rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
            <div className="overflow-hidden">
                <img className="w-full h-56 object-cover hover:scale-110 transition-transform duration-300 ease-in-out" src={image[0]} alt={name} />
            </div>
            <div className="p-4 text-center">
                <p className="pt-2 pb-1 text-sm font-medium text-gray-800">{name}</p>
                <p className="text-sm font-semibold text-pink-600">{currency}{price}</p>
            </div>
        </div>
    </Link>
  )
}

export default ProductItem
