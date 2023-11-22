import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Profile() {
    const { userId } = useParams(); // Changed from carType to userId
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            console.log(`Fetching cars for user ID: ${userId}`);
            try {
                const response = await axios.get(`http://localhost:3001/profile/pro/${userId}`); // Adjusted endpoint
                console.log('Cars fetched:', response.data);
                setCars(response.data);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        fetchCars();
    }, [userId]);

    // In your render
    return (
        <section className="text-gray-600 body-font bg-gray-900 h-screen">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="sm:text-6xl text-2xl font-medium title-font mb-2 text-white">Your Listings</h1>
                        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                    {cars.length > 0 ? (
                        cars.map((car, index) => (
                            <div class="p-4 md:w-1/3">
                                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
                                        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"></img>
                                        <div class="p-6">
                                            {/* <h2 class="tracking-widest text-xs title-font font-medium text-black mb-1">CATEGORY - {car.type}</h2> */}
                                            <h1 class="title-font text-lg font-medium text-black mb-3">{car.make} {car.model}</h1>
                                            <p class="leading-relaxed mb-3 text-black">{car.description}</p>
                                            <div class="flex items-center flex-wrap ">
                                                <Link class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" to={`/details/${car.carId}`}>More Details </Link>
                                                <span class="text-black mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">

                                                    {car.odometer}
                                                </span>
                                                <span class="text-black inline-flex items-center leading-none text-sm">

                                                    {car.carCondition}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        ))
                    ) : (
                        <section class="bg-white dark:bg-gray-900 text-center h-screen">
                                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                                    <div class="mx-auto max-w-screen-sm text-center">
                                        <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">500</h1>
                                        <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Internal Server Error.</p>
                                        <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">No cars found for this type.</p>
                                    </div>
                                </div>
                            </section>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Profile;
