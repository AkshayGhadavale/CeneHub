import React from 'react'

const Carrd = (props) => {
  return (
    <div>
      <div className ="bg-white rounded-lg overflow-hidden shadow-md">
      <img src={props.imgpath} alt="Movie 1" className ="w-full  h-80 object-cover"/>
      <div className ="p-4">
        <h3 className ="text-xl font-semibold mb-2">{props.name}</h3>
        <p className ="text-gray-700 mb-2">IMDb Rating: {props.rateing}</p>
        <p className ="text-gray-700 mb-2">Genres: {props.genres}</p>
      </div>
    </div>
    </div>
  )
}

export default Carrd
