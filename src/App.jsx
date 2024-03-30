

import './App.css'

import Navbar from './Componets/Navbar'
import Carousel from './Componets/Carousel '
import SearchBox from './Componets/SearchBox'
import Mainsection from './Componets/Mainsection'
import Cardsection from './Componets/Cardsection'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Componets/Home'
import Moviedetails from './Componets/Moviedetails'
import Errorpage from './Componets/Errorpage'
import Layout from './Componets/Layout'
function App() {


  return (
    <>
    <div className='dark:bg-gray-800 dark:border-gray-700 w-full h-full'>

<BrowserRouter>
<Routes>
<Route path='/' element={<Layout/>}>
<Route path='/' element={<Home/>}/>
<Route path='Movie/:id' element={<Moviedetails/>}/>
{/* <Route path='*' element={<Errorpage/>}/> */}
</Route>


</Routes>


</BrowserRouter>

</div>
    
    </>
  )
}

export default App
