import React, {useState} from 'react';
import axios from 'axios';



function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [location, setLocation] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        console.log(username, email, password, firstname, lastname, location);

        try {
            const response = await axios.post('http://localhost:3001/users/register', {
                username,
                email,
                password,
                firstname,
                lastname,
                location
            });
            console.log(response.data);
            setSuccessMessage("Registration successful! Please log in.");
        } catch (error) {
            console.error('Registration error:', error.response ? error.response.data : error.message);
            setErrorMessage("Please fill in all required fields")
            
        }
    }

  return (
    <section class="bg-gray-50 bg-gradient-to-r from-cyan-500 to-blue-500">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-gray-900 rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-white">
                  Create an account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">

    <div>
        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 text-white">Username</label>
        <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Your username" required></input>
    </div>

    <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 text-white">Your Email</label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required></input>
    </div>

    <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 text-white">Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="••••••••" required></input>
    </div>

    <div>
        <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900 text-white">First Name</label>
        <input onChange={(e) => setFirstname(e.target.value)} type="text" name="firstname" id="firstname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Your first name" required></input>
    </div>

    <div>
        <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 text-white">Last Name</label>
        <input onChange={(e) => setLastname(e.target.value)} type="text" name="lastname" id="lastname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Your last name" required></input>
    </div>

    <div>
        <label for="location" class="block mb-2 text-sm font-medium text-gray-900 text-white">Location</label>
        <input onChange={(e) => setLocation(e.target.value)} type="text" name="location" id="location" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Your location" required></input>
    </div>
    {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{successMessage}</span>
                </div>
            )}
    {errorMessage && (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Oops! </strong>
        <span className="block sm:inline">{errorMessage}</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        </span>
    </div>
    )}
    <button onClick={handleSubmit} type="submit" class="w-full text-white bg-gray-50 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Create an account</button>

    <p class="text-sm font-light text-gray-500 text-gray-400">
        Already have an account? <a href="Login" class="font-medium text-primary-600 hover:underline text-primary-500">Login here</a>
    </p>

</form>

          </div>
      </div>
  </div>
</section>
  )
}

export default Register;