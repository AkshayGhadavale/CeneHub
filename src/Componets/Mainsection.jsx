import React from 'react'

const Mainsection = () => {

  
  return (
    <div className='flex  justify-center items-center mt-4'>

    <div className="bg-gray-200 py-8 w-11/12 rounded-lg p-4">
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Filter Movies</h2>

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Reset
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-between">

        <div className="w-full sm:w-auto mb-4 sm:mb-0 mr-4">
          <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
          <select id="language" name="language" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>

          </select>
        </div>

        <div className="w-full sm:w-auto mb-4 sm:mb-0 mr-4">
          <label htmlFor="genre" className="block text-sm font-medium text-gray-700">Genre</label>
          <select id="genre" name="genre" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>

          </select>
        </div>

        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
          <select id="year" name="year" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>

          </select>
        </div>
      </div>
    </div>
  </div>
  
  

</div>
  )
}

export default Mainsection
