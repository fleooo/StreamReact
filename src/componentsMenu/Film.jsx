import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Film = ({ menu, index,toggleFavorite}) => {


const [isFavorite, setIsFavorite] = useState(false);

  const toggleAndSetFavorite = (menu) => {
    setIsFavorite(!isFavorite);
    toggleFavorite(menu);
  };

  
  return (
    <div className='film'>
      <Link to={`/movie/${index + 1}`}><img className='rounded-3 m-1' height={300} src={menu.image} alt="" id='img' /></Link>
      <button className={`btns ${isFavorite ? 'favorite' : ''}`} onClick={() => toggleAndSetFavorite(menu)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"  ><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
      <div className='filter rounded-3'></div>
      <div className='film-infos m-3'>
        <b >{menu.name}</b>
      </div>

    </div>
  )
}

export default Film