import React from 'react'
import NavBar from './components/NavBar'


const Fav = ({favorites}) => {

  return (
    <>
    <NavBar/>
      <div className=' row'>
        <h1>Favoris</h1>
        {favorites.map((fav, index) => (
          <div className='col-md-2 m-1' key={index}>
            <img className='rounded-3' height={300} src={fav.image} alt={fav.name} />
          </div>
        ))}
      </div>
    </>

  )
}

export default Fav