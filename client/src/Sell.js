import React, {useState} from 'react';
import axios from 'axios';



function Sell() {
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');
    const [carType, setCarType] = useState('SUV');
    const [carDescription, setCarDescription] = useState('');
    const [carYear, setCarYear] = useState(2000);
    const [carOdometer, setCarOdometer] = useState(100000);
    const [carCondition, setCarCondition] = useState('');
    const [carPrice, setCarPrice] = useState(0);
    const [carLocation, setCarLocation] = useState('');
    const [carImage, setCarImage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
        case 'carMake':
            setCarMake(value);
            break;
        case 'carModel':
            setCarModel(value);
            break;
        case 'carType':
            setCarType(value);
            break;
        case 'carDescription':
            setCarDescription(value);
            break;
        case 'carYear':
            setCarYear(value);
            break;
        case 'carOdometer':
            setCarOdometer(value);
            break;
        case 'carCondition':
            setCarCondition(value);
            break;
        case 'carPrice':
            setCarPrice(value);
            break;
        case 'carLocation':
            setCarLocation(value);
            break;
        case 'carImage':
            setCarImage(value);
            break;
        default:
            break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userId = localStorage.getItem('userId'); 
        console.log(userId);

        const carData = {
            userId,
            carMake,
            carModel,
            carType,
            carDescription,
            carYear: parseInt(carYear),
            carOdometer: parseInt(carOdometer),
            carCondition,
            carPrice,
            carLocation,
            carImage
        };

        console.log(carData);

        try {
            const response = await axios.post('http://localhost:3001/select/sell', carData, {
            headers: {
                'Content-Type': 'application/json',
                //TODO: Add UserId token to know which user has listed what
            }
            });

            const data = response.data;
            console.log('Submission Successful', data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
            <form className="w-full max-w-lg bg-gray-900 rounded-lg shadow-md p-6 my-6" onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold text-white mb-6 text-center">List Your Car</h2>
                <div className="sm:col-span-6">
                    <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-1/2 px-2">
                        <div className="mb-4">
                        <label htmlFor="carMake" className="text-white text-center block text-sm font-medium leading-6 ">
                            Car Make
                        </label>
                        <input
                            type="text"
                            name="carMake"
                            id="carMake"
                            autoComplete=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Toyota"
                            value={carMake}
                            onChange={handleInputChange}
                        />
                        </div>
                        </div>
                        <div className="w-1/2 px-2">
                        <label htmlFor="carModel" className="text-center block text-sm font-medium leading-6 text-white">
                            Car Model
                        </label>
                        <input
                            type="text"
                            name="carModel"
                            id="carModel"
                            autoComplete=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Corolla"
                            value={carModel}
                            onChange={handleInputChange}
                        />
                        </div>
                    </div>

                    <label htmlFor="carType" className="text-center block text-sm font-medium leading-6 text-white">
                        Car Type
                    </label>
                    <select
                        id="carType"
                        name="carType"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        value={carType}
                        onChange={handleInputChange}
                    >
                        <option value="SUV">SUV</option>
                        <option value="Coupe">Coupe</option>
                        <option value="Truck">Truck</option>
                        <option value="Sedan">Sedan</option>
                    </select>
                    
                
                    <label htmlFor="carType" className="text-center block text-sm font-medium leading-6 text-white">
                        Car Description
                    </label>                
                    <textarea id="carDescription" value={carDescription} onChange={handleInputChange} name="carDescription" rows="3" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"></textarea>
                    <p class="mb-4 text-sm leading-6 text-white">Try to include relevant information about the car only.</p>

                    <div className="flex flex-wrap -mx-2">
                        <div className="w-1/2 px-2 mb-4">
                        <label htmlFor="carYear" className="text-center block text-sm font-medium leading-6 text-white">
                            Year
                        </label>
                        <input
                            type="number"
                            id="carYear"
                            name="carYear"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            inputMode="numeric"
                            defaultValue="2000"
                            value={carYear}
                            onChange={handleInputChange}
                        />
                        </div>
                        <div className="w-1/2 px-2 mb-4">
                        <label htmlFor="carOdometer" className="text-center block text-sm font-medium leading-6 text-white">
                            Odometer
                        </label>
                        <input
                            type="number"
                            id="carOdometer"
                            name="carOdometer"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            inputMode="numeric"
                            defaultValue="100000"
                            value={carOdometer}
                            onChange={handleInputChange}
                        />
                        </div>
                    </div>
                
                    <label htmlFor="carCondition" className="text-center block text-sm font-medium leading-6 text-white">
                        Condition
                    </label>
                    <input
                        type="text"
                        name="carCondition"
                        id="carCondition"
                        autoComplete=""
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder=""
                        value={carCondition}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="carPrice" className="text-center block text-sm font-medium leading-6 text-white">
                        Price
                    </label>

                    <input
                        type="number"
                        id="carPrice"
                        name="carPrice"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        inputMode="numeric"
                        value={carPrice}
                        onChange={handleInputChange}
                    />
                    <p class="mb-4 text-sm leading-6 text-white">This price can be negotiated with the buyer.</p>

                    <label htmlFor="carLocation" className="text-center block text-sm font-medium leading-6 text-white">
                        Location
                    </label>
                    <input
                        type="text"
                        name="carLocation"
                        id="carLocation"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Toronto"
                        value={carLocation}
                        onChange={handleInputChange}
                    />
                    <p class="mb-4 text-sm leading-6 text-white">Use a location where you can do a tradeoff with the buyer.</p>

                    <label htmlFor="carImage" className="text-center block text-sm font-medium leading-6 text-white">
                            Car Image
                    </label>
                    <input
                        type="text"
                        name="carImage"
                        id="carImage"
                        autoComplete=""
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Image URL"
                        value={carImage}
                        onChange={handleInputChange}
                    />
                    <div className='py-4'></div>
                    <button type="submit" class="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 font-medium py-2">Submit</button>
                </div>
            </form>
        </div>

    )
}
export default Sell;