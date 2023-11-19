// src/Main.js
import React from 'react';
import Header from './Header';
function Main() {
  return (
    <div className="container mx-auto flex justify-start items-center h-screen text-white ">
      <div className="w-1/2 p-8">
        <h1 className="text-6xl font-bold mb-4 ">Car go vroom vrrom</h1>
        <div className="space-x-4">
          <a href ="Sell" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Sell
          </a>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
