import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import backup from "../assets/backup.png";
import { convertMinutes } from "../utils/utils";

export const MovieDetails=() =>{
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const key = import.meta.env.VITE_API_KEY;

  const url=`https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;
  const image=movie.poster_path ?`https://image.tmdb.org/t/p/w500${movie.poster_path}` : backup;
      useEffect(() => {
    async function fetchMovies() {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => setMovie(jsonData));
       
    }
    fetchMovies(); 
    },[]);
    useEffect(()=>{
      document.title =`${movie.title}`;
    });
  return(
   <main className="container">
    <h5 className="text-danger py-2 border-bottom">{movie.title}</h5>
    <div className="row">
    <div className="col-md-4">
      <img src={image} className="img-fluid img-thumbnail" />
    </div>
    <div className="col-md-8">
      <h3 className="text-primary">{movie.title}</h3>
      <p className="mt-3">{movie.overview}</p>
      {movie.genres ?(
        <p className="d-flex gap-3">
        {movie.genres.map((genre)=>(
          <span key={genre.id} className="badge bg-danger ">{genre.name}</span>
        ))}

      </p>
      ):(
        ""
      )}
      <p className="mt-2">
        <i className=" bi bi-star-fill te"></i> {movie.vote_average} | 
         <i className=" bi bi-people-fill te text=sucess"></i> {movie.vote_count} reviews
      </p>
      <table className="table table-bordered w-50 mt-2">  
        <tbody>
          <tr>
            <th>Runtime</th>
            <td>{convertMinutes(movie.runtime)} </td>
          </tr>
          <tr>
            <th>Budget</th>
            <td>{movie.budget}</td>
          </tr>
          <tr>
            <th>Revenue</th>
            <td>{movie.revenue}</td>
          </tr>
          <tr>
            <th>Release Date</th>
            <td>{movie.release_date}</td>
          </tr>
        </tbody>
      </table>
      <a className="btn btn-primary" target="_blank" href={`https://www.imdb.com/title/${movie.imdb_id}/`}>View in IMDB</a>
    </div>
    </div>
  </main>
  ); 
};
