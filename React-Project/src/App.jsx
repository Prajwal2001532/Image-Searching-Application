import { useState } from 'react'
import reactLogo from './assets/react.svg'
// 
import searchlogo from './assets/images/search.png'
import './css/App.css'
import Search from './components/Search'
import searchapi from './Api'
import Image from './components/imagelist'
import Navbar from './components/navbar'


function App() {
  const [image,setImage] = useState([]);
  const fetchdata = async (term) => {
    const result = await searchapi(term);
    setImage(result);
    
   }
  return (
    <>
      <div>    
      <Navbar/>
        <a href="https://vitejs.dev" target="_blank">
          <img src={searchlogo} className="logo" alt="Vite logo" />
        </a>
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>  */}
      </div>
      <div>
        <Search onSubmit = {fetchdata} />
        <Image image = {image}/>
      </div>
      
    </>
  )
}
export default App;
