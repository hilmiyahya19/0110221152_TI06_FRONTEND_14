import { useEffect } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function NowPlaying () {
    const dispatch = useDispatch();

    useEffect(() => {
        getNowPlaying();
    }, []);
  
    async function getNowPlaying(){
            // Fetch data dari axios
            const response = await axios(ENDPOINTS.NOWPLAYING);
            dispatch(updateMovies(response.data.results));
    }
    return (
        <>
            <Hero/>
            <Movies title="Now Playing"/>
        </>

    );
}


export default NowPlaying;