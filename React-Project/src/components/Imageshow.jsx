import React from 'react'

export default function Imageshow({show}) {
  return (
    <div><img src= {show.urls.small} alt={show.alt_description}/></div>
    
  )
}
