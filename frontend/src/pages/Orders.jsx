import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {
    const {products, currency} = useContext(ShopContext);

  return (
    <div className="border-t border-[#fab5ef] pt-16">
        <div className="text-2xl mb-8">
            <Title text1={"My"} text2={"Orders"} />
        </div>
        <div className="space-y-6">
            {
                products.slice(1, 4).map((item, index) => (
                <div key={index} className="border rounded-lg p-5 text-gray-800 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)] border-[#fab5ef]">
                    <div className="flex items-start gap-5 flex-1">
                        <img className="w-20 h-20 object-cover rounded-md" src={item.image[0]} alt={item.name} />
                        <div className="flex-1">
                            <p className="sm:text-base font-semibold">{item.name}</p>
                            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm sm:text-base text-gray-700">
                                <p className="text-lg font-medium">{currency}{item.price}</p>
                                <p>Quantity: 1</p>
                                <p>Product Size: Small</p>
                            </div>
                            <p className="mt-2 text-sm">Date Purchased: <span className="text-gray-500">2/23/25</span></p>
                        </div>
                    </div>
                    <div className='md:w-1/2 flex justify-between'>
                        <div className="flex items-center gap-2">
                            <p className="min-w-2 h-2 rounded-full bg-[#ff319f]"></p>
                            <p className="text-sm md:text-base">Ready to Ship</p>
                        </div>
                        <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track your Order</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Orders
