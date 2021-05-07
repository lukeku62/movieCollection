import { trendingMovies, trendingTvSeries, searchMovie, searchTvSerie} from './util/fetchApi.js'
import { makeMediaCard, addModal, getMovieModal, getTvSerieModal } from './util/dynamicCreation.js'

//funzione che genera una lista di film di tendenza
export const callTrendingMovies = async () => {
    try {
        const response = await trendingMovies();
        const array = response.results;
        //per ogni elemento creo una card
        array.forEach(element => {
            makeMediaCard(element);
        });
    } catch (error) {
        console.log(error);
    }
    addModal();
    getMovieModal();
}

//funzione che crea una lista di serie tv di tendenza
export const callTrendingTvSeries = async () => {
    try {
        const response = await trendingTvSeries();
        const array = response.results;
        //per ogni elemento creo una card
        array.forEach(element => {
            makeMediaCard(element);
        });
    } catch (error) {
        console.log(error);
    }
    addModal();
    getTvSerieModal();
}






export const searchMedia = async (event) => {
    event.preventDefault();
    try {
        const input = document.getElementById('search').value;
        document.getElementById('movieList').innerHTML="";
        const responseMovie = await searchMovie(input);
        const arrayMovie = responseMovie.results;

        const responseTv = await searchTvSerie(input);
        const arrayTv = responseTv.results;
        const arrayPocho = arrayMovie.concat(arrayTv);
        console.log(arrayPocho);
        
        //per ogni elemento creo una card
        arrayPocho.forEach(element => {
            makeMediaCard(element);
        });
    } catch (error) {
        console.log(error);
    }

}

document.getElementById('searchForm').onsubmit=searchMedia;





