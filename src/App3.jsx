import React from 'react'
import Cast from "./components/Cast";
import Description from "./components/Description";
import NavBar from "./components/NavBar";
import Poster from "./components/Poster";
import Wallpaper from "./components/Wallpaper";


const App3 = () => {
    const movie = {
      title: "Godzilla x Kong: The New Empire",
      releaseDate: "03/04/2024",
      runtime: 115,
      rating: 67,
      genres: "Action, Science-Fiction, Aventure, Fantastique",
      budget: 14095638500,
      revenue: 43630598600,
      overview:
        "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
      poster:
        "https://image.tmdb.org/t/p/original/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/j3Z3XktmWB1VhsS8iXNcrR86PXi.jpg",
      casting: [
        {
          name: "Rebecca Hall",
          character: "Dr. Ilene Andrews",
          image:
            "https://image.tmdb.org/t/p/w185/coC58ANiDbqRIyle5zEl9QDektf.jpg",
        },
        {
          name: "Brian Tyree Henry",
          character: "Bernie Hayes",
          image:
            "https://image.tmdb.org/t/p/w185/2MsJh0bpyzwvOUnXOltHp3j85Pb.jpg",
        },
        {
          name: "Dan Stevens",
          character: "Trapper",
          image:
            "https://image.tmdb.org/t/p/w185/6e6Fo9PeVJrpvK2BOBXCu6b9FO.jpg",
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
  
        <h2 className="mt-3 text-primary underline">Casting :</h2>
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

export default App3