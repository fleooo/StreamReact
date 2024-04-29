import { useParams } from "react-router-dom";
import Cast from "./components/Cast";
import Description from "./components/Description";
import NavBar from "./components/NavBar";
import Poster from "./components/Poster";
import Wallpaper from "./components/Wallpaper";

const App1 = () => {

  
  const movie = {
    title: "Kung Fu panda 4",
    releaseDate: "2024-03-02",
    runtime: 94,
    rating: 67,
    genres: "Animation, Action, Adventure",
    budget: 85000000,
    revenue: 347255055,
    overview:
      "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
    poster:
      "https://image.tmdb.org/t/p/original/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg",
    casting: [
      {
        name: "Jack Black",
        character: "Po (voice)",
        image:
          "https://image.tmdb.org/t/p/w185/rtCx0fiYxJVhzXXdwZE2XRTfIKE.jpg",
      },
      {
        name: "Awkwafina",
        character: "Zhen (voice)",
        image:
          "https://image.tmdb.org/t/p/w185/l5AKkg3H1QhMuXmTTmq1EyjyiRb.jpg",
      },
      {
        name: "Bryan Cranston",
        character: "Li (voice)",
        image:
          "https://image.tmdb.org/t/p/w185/kNyTXGkiSP8W4Gs60hF7UoxZnWN.jpg",
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

export default App1
