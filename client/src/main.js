import React from 'react';
import Header from './Header';
import { useParams, Link } from 'react-router-dom';

function Main() {
  const checkLogin = localStorage.getItem('login');
  
  let sell = <Link to="Login" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Sell</Link>;
  let browse = <Link to="Login" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Browse Inventory</Link>;
  
  if (checkLogin === 'true') {
    sell = <Link to="Sell" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Sell</Link>;
    browse = <Link to="Types" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Browse Inventory</Link>;
  }

  return (
    <div className="container mx-auto flex justify-start items-center h-screen text-white ">
      <div className="w-1/2 p-8">
        <h1 className="text-6xl font-bold mb-4 ">Start Driving Today!</h1>
        <div className="space-x-4 mt-10">
          {sell}
          {browse}
        </div>
      </div>
    </div>
  );
}

export default Main;
