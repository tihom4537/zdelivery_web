// src/app/page.js
// src/app/page.js
'use client';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  // Function to handle smooth scrolling when navigation links are clicked
  useEffect(() => {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get the target section id from the href attribute
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          // Calculate header height to offset the scroll position
          const headerHeight = document.querySelector('header').offsetHeight;
          
          // Scroll to the section with smooth behavior
          window.scrollTo({
            top: targetSection.offsetTop - headerHeight,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <main className="min-h-screen bg-white">

      {/* Header/Navigation */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden mr-3">
              {/* Logo Placeholder - Replace with your actual logo */}
              <Image 
                src="/images/logo 2.jpg" 
                alt="Zdeliver Logo"
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-xl font-bold text-purple-900">Zdeliver</span>
          </div>
          
           {/* Navigation Menu - Fixed href attributes */}
           <nav className="hidden md:flex space-x-8">
            <a href="#hero" className="text-gray-700 hover:text-purple-900 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-purple-900 font-medium">About</a>
            <a href="#features" className="text-gray-700 hover:text-purple-900 font-medium">Features</a>
            <a href="#download" className="text-gray-700 hover:text-purple-900 font-medium">Download</a>
            {/* <a href="#contact" className="text-gray-700 hover:text-purple-900 font-medium">Contact</a> */}
          </nav>
          
          {/* Mobile Menu Button */}
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header> 

      {/* Hero Section */}
      <section id="hero" className="relative pt-16">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Shopping Bag */}
          <div className="flex flex-col justify-center items-center p-8 bg-amber-300 min-h-screen relative">
            {/* Shopping Bag Illustration */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-3/4 max-w-sm">
              <div className="relative">
                {/* Shopping Bag */}
                <div className="bg-amber-400 rounded-b-xl pt-6 pb-24 px-4 relative border-t-8 border-amber-500">
                  {/* Bag Handles */}
                  <div className="absolute -top-6 left-1/4 w-8 h-12 border-4 border-amber-500 rounded-t-full"></div>
                  <div className="absolute -top-6 right-1/4 w-8 h-12 border-4 border-amber-500 rounded-t-full"></div>
                  
                  {/* Vegetables in the bag - visible at top */}
                  <div className="flex justify-center space-x-2 -mt-2 mb-4">
                    <div className="bg-green-700 w-12 h-8 rounded-full"></div>
                    <div className="bg-orange-600 w-8 h-16 rounded-b-full"></div>
                    <div className="bg-purple-800 w-10 h-10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="max-w-xl py-16 mt-48">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                FRESH VEGETABLES FROM A RELIABLE SUPPLIER
              </h1>
              <p className="text-lg text-gray-800 mb-12">
                We deliver quality vegetables directly from our farms. 
                We guarantee freshness, naturalness, and the best conditions for our customers. 
                Contact us and we will be happy to cooperate!
              </p>
              <button className="bg-purple-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-purple-800 transition">
                CATALOG
              </button>
            </div>
          </div>
          
          {/* Right Side - Product Display */}
          <div className="flex flex-col justify-center items-center p-8 bg-purple-900 text-white min-h-screen">
            <div className="max-w-xl py-8">
              <h2 className="text-3xl font-bold mb-10">IN STOCK:</h2>
              
              <div className="grid grid-cols-3 gap-4">
                {/* Vegetable 1 */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="h-40 bg-gray-100 flex items-center justify-center relative">
                    <Image 
                      src="/images/hero-bg.jpg" 
                      alt="Potatoes"
                      width={200}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="font-medium text-gray-900">Standard Gorilla Cart</h3>
                    <p className="text-sm text-gray-500">Includes 13 Fresh Vegetables</p>
                  </div>
                </div>
                
                {/* Vegetable 2 */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="h-40 bg-gray-100 flex items-center justify-center relative">
                    <Image 
                      src="/images/hero-bg.jpg" 
                      alt="Carrots"
                      width={200}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="font-medium text-gray-900">Standard Fruit Cart</h3>
                    <p className="text-sm text-gray-500">Includes 13 Fresh fruits</p>
                  </div>
                </div>
                
                {/* Vegetable 3 */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="h-40 bg-gray-100 flex items-center justify-center relative">
                    <Image 
                      src="/images/hero-bg.jpg" 
                      alt="Cabbage"
                      width={200}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="font-medium text-gray-900">Customised Cart</h3>
                    <p className="text-sm text-gray-500">Choose any Fresh Cart</p>
                  </div>
                </div>
                
                {/* Vegetable 4 */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="h-40 bg-gray-100 flex items-center justify-center relative">
                    <Image 
                      src="/images/hero-bg.jpg" 
                      alt="Onions"
                      width={200}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="font-medium text-gray-900">Customised Order</h3>
                    <p className="text-sm text-gray-500">Choose anything from Cart</p>
                  </div>
                </div>
                
                {/* Vegetable 5 */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="h-40 bg-gray-100 flex items-center justify-center relative">
                    <Image 
                      src="/images/hero-bg.jpg" 
                      alt="Green Onions"
                      width={200}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="font-medium text-gray-900">Green Onions</h3>
                    <p className="text-sm text-gray-500">Fresh local</p>
                  </div>
                </div>
                
                {/* Vegetable 6 */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="h-40 bg-gray-100 flex items-center justify-center relative">
                    <Image 
                      src="/images/hero-bg.jpg" 
                      alt="Beets"
                      width={200}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="font-medium text-gray-900">Beets</h3>
                    <p className="text-sm text-gray-500">Fresh local</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-12 pt-4 border-t border-purple-700">
                {/* <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition">
                  PLACE ORDER
                </button>
                <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition">
                  RETURN TO CART
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image/Visual Side */}
            <div className="lg:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-lg aspect-square w-full max-w-lg mx-auto">
                <Image 
                  src="/images/DALL·E 2025-03-02 11.57.04 - A realistic vector-style illustration of an e-vehicle vegetable cart positioned closer to the camera in the center of a modern Mumbai or Pune society.jpg" 
                  alt="Our Farm"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            {/* Text Content Side */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  Founded in 2025, Zdeliver has been committed to bringing the freshest produce directly from our farms to your table.
                </p>
                <p className="text-lg text-gray-700">
                  We work with a network of local farms that follow sustainable and environmentally-friendly farming practices. Our mission is to support local agriculture while providing our customers with the highest quality vegetables.
                </p>
                <p className="text-lg text-gray-700">
                  Every vegetable you order from us is harvested only after you place your order, ensuring maximum freshness and nutritional value. We believe in transparency and invite our customers to visit our farms and see our operations firsthand.
                </p>
              </div>
              <button className="mt-8 bg-amber-300 text-purple-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-amber-400 transition">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Our Service?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-20 h-20 bg-amber-300 rounded-full flex items-center justify-center text-purple-900 mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">Quality Products</h3>
              <p className="text-gray-600 text-center">
                We deliver only the freshest and highest quality vegetables from local farms.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-20 h-20 bg-amber-300 rounded-full flex items-center justify-center text-purple-900 mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">Quick Delivery</h3>
              <p className="text-gray-600 text-center">
                Get your fresh vegetables delivered to your doorstep within hours of placing your order.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-20 h-20 bg-amber-300 rounded-full flex items-center justify-center text-purple-900 mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">Easy Ordering</h3>
              <p className="text-gray-600 text-center">
                Our simple app makes ordering fresh vegetables quick and convenient.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* App Download Section */}
      {/* App Download Section with Images */}
<section id="download" className="py-20 px-4 bg-purple-900 text-white">
  <div className="container mx-auto max-w-5xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <div className="text-center lg:text-left">
        <h2 className="text-4xl font-bold mb-6">Coming Soon to Mobile</h2>
        <p className="text-xl mb-8">
          Download our app for a seamless shopping experience. Get access to exclusive deals and faster checkout.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 lg:justify-start justify-center">
          <button className="bg-black text-white px-8 py-4 rounded-lg flex items-center space-x-3 transition hover:bg-gray-800 max-w-xs mx-auto md:mx-0">
            <span className="text-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 15.5c.13.76.53 1.93 1.36 3.27-1.22.55-2.44.83-3.66.83-2.15 0-3.94-.73-5.42-2.18-.82.8-1.85 1.48-3.09 2.05s-2.45.85-3.64.85c-.94 0-1.68-.28-2.22-.85s-.81-1.28-.81-2.12c0-1.31.49-2.68 1.48-4.1.99-1.43 2.17-2.42 3.55-2.96-1.35-.99-2.02-2.05-2.02-3.2 0-.91.4-1.67 1.2-2.28.8-.61 1.82-.91 3.06-.91 1.07 0 1.98.24 2.71.73s1.27 1.12 1.59 1.9c.28-.65.67-1.18 1.17-1.57s1.08-.6 1.72-.6c.87 0 1.58.28 2.14.83.56.55.84 1.25.84 2.09 0 .83-.26 1.55-.78 2.17s-1.2 1-2.05 1.17c1.64.56 2.91 1.55 3.82 2.96s1.37 2.94 1.37 4.58c0 .89-.27 1.6-.81 2.13s-1.29.79-2.23.79c-1.28 0-2.41-.33-3.4-.99zM5.86 16.67c.95-.43 1.68-.98 2.19-1.66.51-.68.76-1.42.76-2.22 0-.8-.25-1.54-.76-2.21s-1.24-1.23-2.19-1.67c-.96-.44-2.04-.66-3.24-.66-.64 0-1.15.14-1.52.42-.36.28-.55.64-.55 1.09 0 .44.19.82.55 1.12.37.3.88.45 1.52.45 1.26 0 2.3.28 3.11.85.81.57 1.22 1.32 1.22 2.26 0 .87-.41 1.59-1.22 2.14-.82.56-1.85.84-3.11.84-.64 0-1.15.15-1.52.45-.37.3-.55.68-.55 1.12 0 .45.18.81.55 1.09.37.28.88.42 1.52.42 1.2 0 2.28-.22 3.24-.66zm11.08-5.7c.77-.37 1.37-.85 1.82-1.45.45-.6.67-1.27.67-2 0-.73-.22-1.34-.67-1.83-.45-.49-1.05-.73-1.82-.73-.77 0-1.38.24-1.82.73-.45.49-.67 1.1-.67 1.83 0 .73.22 1.4.67 2 .44.6 1.05 1.08 1.82 1.45zm0 7.05c.77.37 1.37.72 1.82 1.06.45.34.67.77.67 1.3 0 .53-.22.96-.67 1.3-.45.34-1.05.51-1.82.51-.77 0-1.38-.17-1.82-.51-.45-.34-.67-.77-.67-1.3 0-.53.22-.96.67-1.3.44-.34 1.05-.69 1.82-1.06z"/>
              </svg>
            </span>
            <span>
              <div className="text-xs">Coming Soon on</div>
              <div className="text-lg font-bold">App Store</div>
            </span>
          </button>
          <button className="bg-black text-white px-8 py-4 rounded-lg flex items-center space-x-3 transition hover:bg-gray-800 max-w-xs mx-auto md:mx-0">
            <span className="text-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12l-10.183 10.186c-.28-.292-.445-.643-.5-1.022-.063-.446-.063-1.342-.063-2.27V5.106c0-.93 0-1.824.063-2.27.063-.379.22-.73.5-1.022zm11.321 10.792l2.985 2.986L7.32 21.88l8.285-8.349c.158-.158.158-.414 0-.572zM7.32 2.12l10.595 6.287-2.985 2.985c-.158.158-.158.415 0 .573l-8.285-8.35L17.915 9.9 7.32 2.12z"/>
              </svg>
            </span>
            <span>
              <div className="text-xs">Coming Soon on</div>
              <div className="text-lg font-bold">Google Play</div>
            </span>
          </button>
        </div>
      </div>
      
      {/* App Images */}
      <div className="flex justify-center relative h-[500px]">
        {/* First Phone Image */}
        <div className="absolute transform -rotate-6 shadow-2xl rounded-3xl overflow-hidden border-8 border-gray-800 w-60 -left-4">
          <div className="relative bg-white pt-8 pb-8 h-full">
            {/* Notch */}
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 flex justify-center items-end pb-1">
              <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
            </div>
            
            {/* App Screen - First Phone */}
            <div className="h-full bg-amber-100 overflow-hidden">
              <Image 
                src="/images/iPhone-16-Pro (3).png" 
                alt="Zdelivery App Home Screen" 
                width={240}
                height={480}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        
        {/* Second Phone Image */}
        <div className="absolute transform rotate-6 shadow-2xl rounded-3xl overflow-hidden border-8 border-gray-800 w-60 -right-4 top-16">
          <div className="relative bg-white pt-8 pb-8 h-full">
            {/* Notch */}
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 flex justify-center items-end pb-1">
              <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
            </div>
            
            {/* App Screen - Second Phone */}
            <div className="h-full bg-purple-100 overflow-hidden">
              <Image 
                src="/images/iPhone-16-Pro (1).png" 
                alt="Zdelivery App Product Screen" 
                width={240}
                height={480}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Footer/Contact */}
      <footer id="contact" className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-purple-900">Zdeliver</h3>
              <p className="text-gray-600">Fresh vegetables delivered to your door</p>
            </div>
            
            <div className="flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-purple-900 transition">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-900 transition">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-900 transition">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Zdeliver. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}