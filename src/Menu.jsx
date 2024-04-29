import React, { useNavigate, useState } from 'react'
import NavBar from './components/NavBar'
import Film from './componentsMenu/Film'
import './index.css'
import Fav from './Fav'


const Menu = ({film}) => {

     const [searchQuery, setSearchQuery] = useState('');
     const [favorites, setFavorites] = useState([]);
     const affiche = {


          film: [
               {
                    image: "https://image.tmdb.org/t/p/w1280/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
                    name: "Kung fu panda 4",
               },
               {
                    image: "https://image.tmdb.org/t/p/w1280/iRNbRAIGQQr5diGnjpwJFm0dgt4.jpg",
                    name: "Dune 2",
               },
               {
                    image: "https://image.tmdb.org/t/p/w1280/nKnWr062zhRvk48NtK27zz3oLgS.jpg",
                    name: "Godzilla x Kong",
               },
               {
                    image: "https://image.tmdb.org/t/p/w1280/sYCUwnywPbN8GN3LUJ1kCYyKoH4.jpg",
                    name: "Alienod",
               },
               {
                    image: "https://image.tmdb.org/t/p/w1280/kHxJHwSGjC0Fjl7ktWeWg7UrVF8.jpg",
                    name: "Salaire de la peur ",
               },
               {
                    image: "https://image.tmdb.org/t/p/w1280/thmdPzr6QdZELeYdZ4jPwrvakY9.jpg",
                    name: "Pandemic",
               },

               {
                    image: "https://image.tmdb.org/t/p/w1280/xAHGuVQFTbSbbdeUbkfrAY8kf2m.jpg",
                    name: "Madame weeb",
               },

               {
                    image: "https://image.tmdb.org/t/p/w1280/xAHthaVYtwADKYORPkLzd6MgX0P.jpg",
                    name: "Bar routier",
               },

               {
                    image: "https://image.tmdb.org/t/p/w1280/lbOyeiiRYAE6Nm2e7xiNAAaRwZB.jpg",
                    name: "BagHead",
               },
               {
                    image: "https://image.tmdb.org/t/p/w1280/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
                    name: "No Way Up",
               },

               {
                    image: "https://image.tmdb.org/t/p/w1280/s3OzOyXscydHtSzzskAt9qBZZgm.jpg",
                    name: "Imaginary",
               },

               {
                    image: "https://image.tmdb.org/t/p/w1280/ccJpK0rqzhQeP7Mrs2uKqObFY4L.jpg",
                    name: "Creation of the Gods",
               },
               {
                    image: "https://image.tmdb.org/t/p/w1280/11HRdHtqynRb0JpiQJZzVXtyKDb.jpg",
                    name: "Noe",
               },

               {
                    image: "https://image.tmdb.org/t/p/w1280/qTXDVZ9UEby3U73jpUA2XIdIh57.jpg",
                    name: "SOS fantomes",
               },

               {
                    image: "https://image.tmdb.org/t/p/w1280/aRhtHbgFGVKI5LJHcbSqQ0WbNib.jpg",
                    name: "Immaculée",
               },
               {
                    image: "https://image.tmdb.org/t/p/w1280/xbNFNEm41CRy4PJbGjBnI1xSIMS.jpg",
                    name: "La Malédiction",
               },

               {
                    image: "https://image.tmdb.org/t/p/w1280/xlIQf4y9eB14iYzNN142tROIWON.jpg",
                    name: "Spy X Family",
               },

               {
                    image: "https://image.tmdb.org/t/p/w1280/kGFcgAYfovTeuLl1VKb4LZGAyEN.jpg",
                    name: "The kill room",
               },

          ],


     };

     const handleSearchChange = (event) => {
          setSearchQuery(event.target.value.toLowerCase());
     };

     const filteredFilms = affiche.film.filter((film) =>
          film.name.toLowerCase().includes(searchQuery)
     );

     const toggleFavorite = (film) => {
          const isFavorite = favorites.some((fav) => fav.name === film.name);

          if (isFavorite) {
               const updatedFavorites = favorites.filter((fav) => fav.name !== film.name);
               setFavorites(updatedFavorites);
          } else {
               setFavorites([...favorites, film]);
          }
     };

     return (
          <>
               <NavBar onSearchChange={handleSearchChange} />
               <div className='m-4  row'>

                    {filteredFilms.map((film, index) => (

                         <div className='col' key={index} to={`/movie/${index + 1}`}>
                              <Film menu={film} index={index} toggleFavorite={toggleFavorite} />
                         </div>
                    ))}
               
               </div>
               <Fav favorites={favorites}/>
          </>
     )
}

export default Menu
