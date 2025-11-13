import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [size, setSize] = useState('');
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const product = products.find((p) => p._id === productId);
    if (product) {
      setProductData(product);
      setSelectedImage(product.image[0]);
    }
  }, [productId, products]);

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <div className="pt-10 border-t border-[#fab5ef] px-4 md:px-10">
      <div className="bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)] rounded-2xl shadow-md p-4 md:p-8 flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <img src={selectedImage} alt="" className="w-full h-auto rounded-lg shadow-md mb-4"/>
          <div className="flex gap-2 overflow-x-auto">
            {productData.image.map((img, idx) => (
              <img onClick={() => setSelectedImage(img)} key={idx} src={img} alt="" className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${selectedImage === img ? 'border-pink-500' : 'border-gray-200'}`}/>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">{productData.name}</h1>

          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="" className="w-4 h-4"/>
            ))}
            <img src={assets.star_dull_icon} alt="" className="w-4 h-4"/>
            <p className="pl-2 text-sm">(100)</p>
          </div>
          <p className="text-3xl font-medium mt-2">{currency}{productData.price}</p>
          <p className="text-gray-600">{productData.description}</p>
          <div className="mt-4">
            <p className="mb-2 font-medium">Select Bottle Size</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {productData.sizes.map((item) => (
                <button onClick={() => setSize(item)} key={item} className={`border rounded py-2 text-center ${size === item ? 'border-pink-500 bg-pink-50' : 'border-gray-300 bg-white'}`}>{item}</button>
              ))}
            </div>
          </div>

          <button onClick={() => addToCart(productData._id, size)} className="bg-black text-white px-6 py-3 mt-4 rounded hover:bg-pink-500 transition-colors">Add to Bag</button>

          <div className="mt-6 text-sm text-gray-500 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex border-b border-gray-300">
          <button onClick={() => setActiveTab('description')} className={`px-4 py-2 ${activeTab === 'description' ? 'border-b-2 border-pink-500 bg-pink-50' : 'bg-white'}`}>Description</button>
          <button onClick={() => setActiveTab('reviews')}className={`px-4 py-2 ${activeTab === 'reviews' ? 'border-b-2 border-pink-500 bg-pink-50' : 'bg-white'}`}>Reviews (100)</button>
        </div>
        <div className="p-4 bg-pink-50 text-gray-700 rounded-b-xl">{activeTab === 'description' ? (
            <p>{productData.description}</p>
        ) : (
            <div className="flex flex-col gap-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis doloremque nostrum aliquam.</p>
              <p>Excellent product! Highly recommend for daily skincare routines.</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12">
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  );
};

export default Product;
