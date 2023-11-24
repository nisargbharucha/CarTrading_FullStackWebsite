import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function Details() {
  const { carId } = useParams();
  const [car, setCar] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/select/details/${carId}`);
        setCar(response.data[0]); // Assuming the API returns an array with a single car object
      } catch (error) {
        console.error('Error fetching car details:', error);
      }
    };

    const fetchReviews = async () => {
      try {
        const reviewsResponse = await axios.get(`http://localhost:3001/select/reviews/${carId}`);
        console.log(reviewsResponse.data);
        setReviews(reviewsResponse.data); 
        console.log(reviewsResponse.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
    fetchCarDetails();
    
  }, [carId]);

  if (!car) {
    return <div>Loading...</div>; // Or any other loading state representation
  }
    return(
      <section class="text-white body-font bg-gradient-to-r from-cyan-500 to-blue-500">
        <div class="pt-12">
          <div class="container mx-auto flex rounded-lg p-12 md:flex-row flex-col items-center bg-gray-900">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={ `${car.imageURL}`}></img>
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
        </div>







        <div class="container mx-auto flex p-12 pb-8 md:flex-row flex-col items-center bg-gray-900 mt-12 flex rounded-lg">
        <div class="flex flex-col items-left justify-center h-screen text-gray-800 px-5 py-11">
          {/* <!-- Component Start --> */}
          <div class="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
            <div class="flex flex-col flex-grow h-0 p-4 overflow-auto">
              <div class="flex w-full mt-2 space-x-3 max-w-xs">
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                <div>
                  <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                    <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <span class="text-xs text-gray-500 leading-none">2 min ago</span>
                </div>
              </div>
              <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                <div>
                  <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                  </div>
                  <span class="text-xs text-gray-500 leading-none">2 min ago</span>
                </div>
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              </div>
              <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                <div>
                  <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                  </div>
                  <span class="text-xs text-gray-500 leading-none">2 min ago</span>
                </div>
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              </div>
              <div class="flex w-full mt-2 space-x-3 max-w-xs">
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                <div>
                  <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                    <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                  <span class="text-xs text-gray-500 leading-none">2 min ago</span>
                </div>
              </div>
              <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                <div>
                  <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                  <span class="text-xs text-gray-500 leading-none">2 min ago</span>
                </div>
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              </div>
              <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                <div>
                  <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  </div>
                  <span class="text-xs text-gray-500 leading-none">2 min ago</span>
                </div>
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              </div>
              <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                <div>
                  <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                  </div>
                  <span class="text-xs text-gray-500 leading-none">2 min ago</span>
                </div>
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              </div>
              <div class="flex w-full mt-2 space-x-3 max-w-xs">
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                <div>
                  <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                    <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                  <span class="text-xs text-gray-500 leading-none">2 min ago</span>
                </div>
              </div>
              <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                <div>
                  <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p class="text-sm">Lorem ipsum dolor sit.</p>
                  </div>
                  <span class="text-xs text-gray-500 leading-none">2 min ago</span>
                </div>
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              </div>
            </div>
            
            <div class="bg-gray-300 p-4">
              <input class="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…"></input>
            </div>
          </div>
        </div>

    <div class="container px-5 mx-auto flex flex-col bg-white text-black">
    {reviews.map((review, index) => (
    <div class=" mx-auto">
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">{review.firstname} {review.lastname}</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="text-base"> Review Date: {new Date(review.reviewDate).toISOString().split('T')[0]} </p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">{review.reviewText}</p>
          <Link class="text-indigo-500 inline-flex items-center" to={`/profile/${review.reviewerId}`}>Check Out {review.firstname}'s Car Listings
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
    ))}
  </div>
        </div>
    </section>
        
    );
}

export default Details;