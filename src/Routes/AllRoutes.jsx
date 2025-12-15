import { Route,Routes } from "react-router-dom";
import {MovieList,Search} from "../pages"
import {MovieDetails} from "../pages";
import { PageNotFound } from "../pages";

const AllRoutes = () => {
    return (
        <>
        <Routes>
            <Route path ="/" element={<MovieList title="Your Guide to Great Movies" apiPath="movie/now_playing"/>} />

            <Route path="/movies/popular" element={<MovieList title="Popular Movies"apiPath="movie/popular"/>} />
            <Route path="/movies/top-rated" element={<MovieList title="Top Rated Movies"apiPath="movie/top_rated"/>} />
            <Route path="/movies/upcoming" element={<MovieList title="Upcoming Movies"apiPath="movie/upcoming"/>} />
            <Route path="movie/:id" element={<MovieDetails/>}/>
            <Route path="search" element={<Search apiPath="search/movie"/>}/>
            <Route path="*" element={<h2 className="text-center mt-5">404! Page Not Found</h2>}/>
        </Routes>
        </>
    
        );
};
export default AllRoutes;
