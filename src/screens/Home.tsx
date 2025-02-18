import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Fetch!</h1>
      <p className="text-lg mb-8">
        Your one-stop solution for all your pet needs.
      </p>
      <Link to="/login">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-8">
          Login
        </button>
      </Link>
      <img
        src="doggo.png"
        alt="Doggo and Matthew Kleven"
        className="w-64 h-64 object-cover rounded-full"
      />
    </div>
  )
}

export default Home
