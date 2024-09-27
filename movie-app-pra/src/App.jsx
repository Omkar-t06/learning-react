import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddToFavorite from './components/AddToFavorite';
import RemoveFavorite from './components/RemoveFavorite';


function App() {
  const [movies,setMovies] = useState([])
  const [favouriteItems,setfavouriteItems] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=a78eb45c`;

    const response = await fetch(url);

    const responseJson = await response.json();
    if(responseJson.Search)
    setMovies(responseJson.Search);
  }

  useEffect(()=>{
      getMovieRequest();
  },[searchValue]);

  useEffect(()=>{
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );
    if(movieFavourites){
      setfavouriteItems(movieFavourites);
    }  
  })

  const saveToLocalStorage = (item) =>{
    localStorage.setItem('react-movie-app-favourites',JSON.stringify(item));
  }

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favouriteItems,movie];
    setfavouriteItems(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  const removeFromFavourites = (movie) => {
    const newFavouriteList = favouriteItems.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setfavouriteItems(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  return (
    <div className='w-full p-4'>
      <div className='flex flex-row align-middle justify-between example'>
        <MovieListHeading heading={'Movies'}/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='overflow-x-auto whitespace-nowrap py-2 example'>
        <MovieList 
          movies={movies} 
          favouriteComponent ={AddToFavorite}
          handleFavouritesClicks={addFavouriteMovie}
        />
      </div>
      <div className='flex flex-row align-middle justify-between my-3'>
        <MovieListHeading heading={'Favourites Movies'}/>
      </div>
      <div className='overflow-x-auto whitespace-nowrap py-2 example'>
        <MovieList 
          movies={favouriteItems} 
          favouriteComponent = {RemoveFavorite}
          handleFavouritesClicks={removeFromFavourites}
        />
      </div>
    </div>
  )
}

export default App
