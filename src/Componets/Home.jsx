import React, { useContext } from 'react'
import Carousel from './Carousel '
import SearchBox from './SearchBox'
import Mainsection from './Mainsection'

import Cardsection from './Cardsection'

const Home = () => {
  // const name = useContext(Appcontext)

  return (
    <div>
        <div className='dark:bg-gray-800 dark:border-gray-700 w-full h-full'>
    

 


      <Carousel/>
      <SearchBox/>
      <Mainsection/>
      <Cardsection/>
      </div>
    </div>
  )
}

export default Home
