import {useState} from 'react';
import './App.css';
import FilmList from  './FilmList'
import Details from './Details'
import TMDB from './TMDB'



function App() {
  let [films, setFilms] = useState(TMDB.films)
  let [current, setCurrent] = useState({})

  const handleDetailsClick = film => {
    //console.log('fetching details for film:', film.title)
    setCurrent(film)
  }

    return (
      <div className="film-library">
        <FilmList
          films={films}
          handleDetailsClick={handleDetailsClick}
        />

        <Details
          films={TMDB.films}
          film={current}
        />
      </div>
    );

}

export default App;