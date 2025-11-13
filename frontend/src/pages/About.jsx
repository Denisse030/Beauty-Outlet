import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className="pt-10 border-t border-[#fab5ef]">
      <div className="text-3xl pt-5">
        <Title text1={'About'} text2={'Us'} />
      </div>

      <div className="my-16 flex flex-col md:flex-row items-center gap-16">
        <img className="w-full md:max-w-[450px] rounded-lg shadow-md" src={assets.about_img} alt="About Us" />

        <div className="max-w-3xl flex flex-col items-center gap-6 text-gray-700 leading-relaxed">
          <p>At Beauty Outlet Skincare, we believe that skincare is more than just a daily routine — it’s an act of self-love. Our mission is to make radiant, healthy skin accessible to everyone through high-quality, nature-inspired products that deliver real results. From gentle cleansers to hydrating serums and soothing moisturizers, every formula is crafted to nourish, protect, and enhance your natural beauty.</p>
          <p>We’re passionate about creating a skincare experience that’s simple, effective, and empowering. With a commitment to authenticity, affordability, and care, Beauty Outlet Skincare is your trusted destination for products that help you look good, feel confident, and glow from within.</p>
          <div className="bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)] border border-[#fab5ef] rounded-lg shadow-sm p-6 mt-4">
            <b className="text-xl text-gray-800 block mb-2">Our Mission</b>
            <p>At Beauty Outlet Skincare, our mission is to empower confidence through radiant, healthy skin. We believe that skincare should be simple, effective, and accessible to everyone. That’s why we curate high-quality, science-backed products designed to nourish, protect, and enhance your natural beauty—because when your skin feels good, you feel unstoppable.</p>
          </div>
        </div>
      </div>

      <div className="text-2xl py-6 text-center">
        <Title text1={'Why'} text2={'Shop Here'} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)] border border-[#fab5ef] rounded-xl shadow-sm p-8 text-center hover:shadow-md transition">
          <b className="text-lg text-gray-800">Quality Assurance</b>
          <p className="text-gray-600 mt-3">We guarantee only the best skincare products, carefully tested for safety and effectiveness so you can feel confident in your beauty routine.</p>
        </div>

        <div className="bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)] border border-[#fab5ef] rounded-xl shadow-sm p-8 text-center hover:shadow-md transition">
          <b className="text-lg text-gray-800">Convenience</b>
          <p className="text-gray-600 mt-3">Enjoy a seamless shopping experience with easy navigation, fast delivery, and secure checkout — designed to fit your lifestyle.</p>
        </div>

        <div className="bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)] border border-[#fab5ef] rounded-xl shadow-sm p-8 text-center hover:shadow-md transition">
          <b className="text-lg text-gray-800">Exceptional Customer Service</b>
          <p className="text-gray-600 mt-3">Our dedicated team is available to assist you 24/7 — because your satisfaction is always our top priority.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
