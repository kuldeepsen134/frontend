import React from "react";

const SettingPage = () => {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-4xl font-bold mb-4">Settings</h1>

      <div className="max-w-md mx-auto bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Account Settings</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
export default SettingPage