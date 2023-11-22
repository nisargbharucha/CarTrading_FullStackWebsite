import React from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
function Details(){
  const {carId} = useParams();
  const [car, setCar] = useState(null);
  console.log(carId);
  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/select/details/${carId}`);
        console.log("API Response:", response.data);
        setCar(response.data[0]); // Assuming the API returns an array with a single car object
      } catch (error) {
        console.error('Error fetching car details:', error);
      }
    };

    fetchCarDetails();
  }, [carId]);

  if (!car) {
    return <div>Loading...</div>; // Or any other loading state representation
  }
    return(
        <section class="text-white body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={ `${car.imageUrl}`}></img>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{car.year} {car.make} {car.model}
            </h1>
            <p class="mb-8 leading-relaxed">{car.description}</p>
            <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">{car.odometer}</h2>
        <p class="leading-relaxed">odometer</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">{car.carCondition}</h2>
        <p class="leading-relaxed">Condition</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">{car.type}</h2>
        <p class="leading-relaxed">Type</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">{car.price}</h2>
        <p class="leading-relaxed">price</p>
      </div>
    </div>
  </div>
            <div class="flex justify-center">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Interested</button>
            </div>
            </div>
        </div>
        
        </section>
    );
}

export default Details;