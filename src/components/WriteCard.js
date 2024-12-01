import React from "react";

const WriteCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Welcome Admin! 👋
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Enter the details to write on a tag
        </p>
        <form className="space-y-4">
          {/* Phone number*/}
          <div>
            <label htmlFor="userId" className="block text-gray-700 font-medium">
              Tag id
            </label>
            <input
              type="text"
              id="tag-id"
              placeholder="Enter the Tag id"
              className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your Phone Number"
              className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* token */}
          <div>
            <label
              htmlFor="token"
              className="block text-gray-700 font-medium"
            >
              token
            </label>
            <input
              type="password"
              id="token"
              placeholder="Enter the secret token"
              className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-md shadow-md transition-transform transform hover:scale-105"
          >
            Write
          </button>
        </form>

        
      </div>
    </div>
  );
};

export default WriteCard;
