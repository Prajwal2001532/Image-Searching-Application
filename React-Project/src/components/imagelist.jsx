import React from 'react'
import ImageShow from './Imageshow'
import '../css/imagelist.css'

export default function imagelist({image}) {
  const renderedimages = image.map((image)=>{
    return (
       <div key={image.id} >
         <ImageShow  show = {image}/>
       </div> )
     
  })
  return  <div className='img-list'> {renderedimages} </div>
}
