import React from 'react'
import Cast from "./components/Cast";
import Description from "./components/Description";
import NavBar from "./components/NavBar";
import Poster from "./components/Poster";
import Wallpaper from "./components/Wallpaper";


const App2 = () => {
    const movie = {
      title: "Dune: Part Two",
      releaseDate: "28/02/2024",
      runtime: 167,
      rating: 83,
      genres: "Science Fiction, Adventure",
      budget: 19000000000,
      revenue: 68381373400,
      overview:
        "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
      poster:
        "https://image.tmdb.org/t/p/original/iRNbRAIGQQr5diGnjpwJFm0dgt4.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
      casting: [
        {
          name: "Timothée Chalamet",
          character: "Paul Atreides",
          image:
            "https://image.tmdb.org/t/p/w185/BE2sdjpgsa2rNTFa66f7upkaOP.jpg",
        },
        {
          name: "Zendaya",
          character: "Chani",
          image:
            "https://image.tmdb.org/t/p/w185/3WdOloHpjtjL96uVOhFRRCcYSwq.jpg",
        },
        {
          name: "Rebecca Ferguson",
          character: "Jessica",
          image:
            "https://image.tmdb.org/t/p/w185/lJloTOheuQSirSLXNA3JHsrMNfH.jpg",
        },
      ],
    };
  
    return (
      <>
      <NavBar/>
      <div className="m-3">
        <div className="d-flex gap-3">
          <Poster src={movie.poster} />
          <Description data={movie} />
        </div>
  
        <h2 className="mt-3 text-primary">Casting :</h2>
        <div className="d-flex gap-3">
          <Cast data={movie.casting[0]} />
          <Cast data={movie.casting[1]} />
          <Cast data={movie.casting[2]} />
        </div>
  
        <div className="mt-5 m-5 container">
          <Wallpaper src={movie.backdrop} />
        </div>
      </div>
      </>
    );
  };

export default App2