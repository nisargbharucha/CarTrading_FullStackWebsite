import React from 'react';


function Sell() {
  return (
    <div className="flex justify-center">
        <form className="w-full max-w-md">
            <div className="sm:col-span-6">
                <label htmlFor="carMake" className="text-center block text-sm font-medium leading-6 text-white">
                    Car Make
                </label>
                <input
                    type="text"
                    name="carMake"
                    id="carMake"
                    autoComplete=""
                    className="mb-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Toyota"
                />


                <label htmlFor="carModel" className="text-center block text-sm font-medium leading-6 text-white">
                    Car Model
                </label>

                <input
                    type="text"
                    name="carModel"
                    id="carModel"
                    autoComplete=""
                    className="mb-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Corolla"
                />

            <div className="relative">
                <label htmlFor="carType" className="text-center block text-sm font-medium leading-6 text-white">
                    Car Type
                </label>
                <div className="relative">
                    <select
                    id="carType"
                    name="carType"
                    className="mb-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        <option value="suv">SUV</option>
                        <option value="coupe">Coupe</option>
                        <option value="truck">Truck</option>
                        <option value="sedan">Sedan</option>
                    </select>
                    </div>
                </div>
            </div>
            

            <div class="relative">
                <label htmlFor="carType" className="text-center block text-sm font-medium leading-6 text-white">
                    Car Type
                </label>                
                <textarea id="carDescription" name="carDescription" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                <p class="mb-4 text-sm leading-6 text-white">Try to include relevant information about the car only.</p>
            </div>

            <div className="relative mb-4">
                <label htmlFor="carType" className="text-center block text-sm font-medium leading-6 text-white">
                    Year
                </label>
                <input
                    type="number"
                    id="carYear"
                    name="carYear"
                    className="mb-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    inputMode="numeric"
                    defaultValue="2000"
                />
            </div>
            <div className="relative">
                <label htmlFor="carOdometer" className="text-center block text-sm font-medium leading-6 text-white">
                    Odometer
                </label>
                <input
                    type="number"
                    id="carOdometer"
                    name="carOdometer"
                    className="mb-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    inputMode="numeric"
                    defaultValue="100000"
                />
            </div>
            <div className="relative mb-4">
                <label htmlFor="carCondition" className="text-center block text-sm font-medium leading-6 text-white">
                    Condition
                </label>
                <input
                    type="text"
                    name="carCondition"
                    id="carCondition"
                    autoComplete=""
                    className="mb-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Toyota"
                />
            </div>
            <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>

      </form>
    </div>

  )
}
export default Sell;