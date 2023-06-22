import { useEffect } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function Popular () {
    //membuat dispatch
    const dispatch = useDispatch() 

    useEffect(() => {
        getPopularMovies();
    }, []);
  
    async function getPopularMovies(){
            // Fetch data dari axios
            const response = await axios(ENDPOINTS.POPULAR);
            dispatch(updateMovies(response.data.results));
    }
    return (
        <>
            <Hero/>
            <Movies title="Popular Movies" />
        </>

    );
}

export default Popular;