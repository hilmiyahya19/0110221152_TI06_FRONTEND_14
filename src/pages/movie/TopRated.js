/* eslint-disable no-unreachable */
import { useEffect } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function TopRated () {
    const dispatch = useDispatch();

    useEffect(() => {
        getTopRated();
    }, []);
  
    async function getTopRated(){
            // Fetch data dari axios
            const response = await axios(ENDPOINTS.TOPRATED);
            dispatch(updateMovies(response.data.results));
       
    }
    return (
        <>
            <Hero/>
            <Movies title="Top Rated"/>
        </>

    );

    return (
        <>
       
            <h2>TopRated</h2>
        </>

    );
}

export default TopRated;