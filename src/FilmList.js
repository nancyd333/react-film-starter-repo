import { useState } from 'react';
import FilmRow from './FilmRow'

export default function FilmList(props){
  const [faves, setFaves]= useState([])
  const [filter, setFilter] = useState('all')
   

const handleFilterClick = filter => {
  //console.log('handling filter click:', filter)
  setFilter(filter)
}

 const handleFaveToggle = film => {
    const newFaves = [...faves]
    const filmIndex = newFaves.indexOf(film)
   
    if(filmIndex < 0){
      //console.log(`adding ${film.title} to faves`)
      setFaves([...newFaves, film])
    } else {
      newFaves.splice(filmIndex,1)
      //console.log(`removing ${film.title} to faves`)
      setFaves(newFaves)
    }
  }

  const filmsToDisplay = filter === 'all' ? props.films : faves

  const allFilms = filmsToDisplay.map((film, i)=>{
          return(
          <FilmRow
              film={film}
              key={`filmRow-${i}`}
              onFaveToggle={handleFaveToggle}
              // handleFaveToggle={handleFaveToggle}
              isFave={faves.includes(film)}
              handleDetailsClick={props.handleDetailsClick}
          />
          )
})
    

      return (
          <div className="film-list">
              <h1 className="section-title">FILMS</h1>
              <div className="film-list-filters">
                  <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`}  onClick={()=>handleFilterClick('all')}>
                      ALL
                      <span className="section-count">{props.films.length}</span>
                  </div>
                  <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={()=>handleFilterClick('faves')}>
                      FAVES
                      <span className="section-count">{faves.length}</span>
                  </div>
              </div>

              {allFilms}
          </div>
      );
    }
  