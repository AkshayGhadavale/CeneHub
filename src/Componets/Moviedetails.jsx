import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { NavLink } from "react-router-dom";


import { API_URL } from '../Context/Context';


const Moviedetails = () => {
    const { id } = useParams();


    
    

    
    
    
    //we need to Craete a provider fun
    
      const [isloading, setloading] = useState(true);
      const [ismovie, setmovie] = useState([]);

    
      const getmovies = async (url) => {
        setloading(true);
        try {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
    
          if (data.Response  === "True") {
            setloading(false);
           
            setmovie(data);
            console.log(ismovie);
          } 
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
    
    let  timer = setTimeout(() => {
      getmovies(`${API_URL}&i=${id}`);
    }, 500);
    
    return()=> clearTimeout(timer)
       
      }, [id]);




    if (isloading) {
      return (
        <div class="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        <svg class="w-16 h-16 animate-spin  text-blue-800" viewBox="0 0 64 64" fill="none"
          xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
            stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path
            d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
            stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400">
          </path>
        </svg>
      </div> 
      );
    }

  return (
    <div>
      <div className="min-h-screen dark:bg-gray-800 dark:border-gray-700  py-6 flex items-center justify-center sm:py-12 ">
  
  <div className="py-3 w-full flex items-center justify-center">
    <div className="bg-white shadow-lg border-gray-100 	 border sm:rounded-3xl p-8 flex space-x-8  w-11/12">
      <div className=" overflow-visible w-1/3">
          <img className="rounded-3xl shadow-lg" src={ismovie.Poster} alt=""/>
      </div>
      <div className="flex flex-col w-full  justify-start items-start">
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-bold">{ismovie.Title}</h2>
          <div className="bg-yellow-400 font-bold rounded-xl p-2 ml-10  ">IMDB rating {ismovie.imdbRating}</div>
        </div>
        <div>
      <div className="text-sm text-gray-400 pt-4"><span className=" text-black  font-semibold">Genre : </span>{ismovie.Genre}</div>
      <div className="text-sm text-gray-400"><span className=" text-black  font-semibold">Language : </span>{ismovie.Language}</div>
          {/* <div className="flex text-2xl font-bold text-a">{ismovie.Released}</div> */}
          <div className="text-sm text-gray-400"><span className=" text-black  font-semibold">Released : </span>{ismovie.Released}</div>
        </div>
          <p className=" text-gray-400 max-h-40 overflow-y-hidden pt-6"><span className=" text-black  font-semibold">Plot : </span>{ismovie.Plot}</p>
          <p className=" text-gray-400 max-h-40 overflow-y-hidden pt-2"><span className=" text-black  font-semibold">Actors :</span> {ismovie.Actors}</p>
          <p className=" text-gray-400 max-h-40 overflow-y-hidden pt-2"><span className=" text-black  font-semibold">Directed by : </span> {ismovie.Director}</p>
    
          <NavLink to="/" className="mt-6 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Go Back
          </NavLink>
      </div>

    </div>
  </div>
  
</div>
    </div>
  )
}

export default Moviedetails
