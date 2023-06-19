import React, { useState } from 'react'
import '../css/Search.css'


export default function Search({onSubmit}) {
  const [term,setTerm] = useState('');
  const handleForm = (event) =>{
    event.preventDefault();
        onSubmit(term);
  }
  
  const handleChange = async(event) =>{
        setTerm(event.target.value);
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleForm}>
        <input className='search' onChange={handleChange} placeholder='Enter your search item ' size={10} value={term}/>
        {/* <button>Fetch</button>  */}
      </form>
     
      
    </div>
  )
}
