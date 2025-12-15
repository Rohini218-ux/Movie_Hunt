import { useSearchParams } from "react-router-dom";
import {Card} from "../components";
import {useFetch} from "../hooks/useFetch";
import {use, useEffect} from "react";
 
export const Search = ({apiPath}) =>{
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("query");
    const {data:movies} = useFetch({apiPath,queryTerm});

    useEffect(() => {
        document.title = `Search results for "${queryTerm}" | MovieHunt`;
    });
    return ( <main className="container">
        <h5 className="text-danger py-2 border-bottom">
            {movies.length==0? `No results found for ${queryTerm}`: `Results for "${queryTerm}"`}
        </h5>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
        {movies.map((movie)=>{
          return <Card key={movie.id} movie={movie}/>;
        })}
      </div>
    </main>
    );
};
