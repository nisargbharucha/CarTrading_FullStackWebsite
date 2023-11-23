import Header from './Header';
import React from 'react';
import { Link,  useHistory } from 'react-router-dom';
import sedanImage from './assets/sedan.png';
import truckImage from './assets/truck.png';
import suvImage from './assets/suv.png';
import coupeImage from './assets/coupe.png';

function Types(){
    return(
        <div className="text-gray-400 body-font bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="container max-w-none mx-auto min-h-screen p-12">
          {/* Adjust the padding (p-8, p-12, etc.) and rounded corners (rounded-lg, rounded-xl, etc.) here */}
          <div className='bg-gray-900 py-25 px-4 md:px-10 lg:px-20 xl:px-40 rounded-xl p-8'>
            <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Choose Your Type</h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">Explore our outstanding collection of cars. Whether you're looking for comfort, style, or utility, our diverse range showcases the best in each category. Find your perfect match from our carefully curated selection.</p>
            </div>
            <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <Link to='/Listings/sedan'>
                <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={sedanImage} alt="content"></img>
                
                <h2 className="text-lg text-white font-medium title-font mb-4">SEDAN</h2>
                <p className="leading-relaxed text-base">The Perfect Blend of Comfort and Elegance. Ideal for daily commuting and long drives, our sedans offer a comfortable ride, ample interior space, and efficient performance. Experience a blend of sophistication and practicality.</p>
                </div>
                </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <Link to='/Listings/suv'>
                <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={suvImage} alt="content"></img>
                
                <h2 className="text-lg text-white font-medium title-font mb-4">SUV</h2>
                <p className="leading-relaxed text-base">Robust and Spacious. Our SUVs are designed for those who crave adventure and versatility. With ample cabin space, higher seating, and off-road capabilities, they are perfect for both urban landscapes and rugged terrains.</p>
                </div>
                </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <Link to='/Listings/truck'>
                <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={truckImage} alt="content"></img>
                
                <h2 className="text-lg text-white font-medium title-font mb-4">TRUCK</h2>
                <p className="leading-relaxed text-base">Power and Durability Redefined. Built to withstand tough conditions, our trucks excel in power, towing capacity, and cargo space. Whether for work or recreation, they are the ultimate choice for heavy-duty performance.</p>
                </div>
                </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <Link to='/Listings/coupe'>
                <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={coupeImage} alt="content"></img>
                
                <h2 className="text-lg text-white font-medium title-font mb-4">COUPE</h2>
                <p className="leading-relaxed text-base">Sleek Style Meets Performance. Coupes are all about sportiness and aesthetics. With a two-door design, dynamic handling, and an emphasis on performance, they offer an exhilarating driving experience for car enthusiasts.</p>
                </div>
                </Link>
            </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Types;