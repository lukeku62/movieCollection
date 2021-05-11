import { trendingMovies, trendingTvSeries, searchMovie, searchTvSerie} from './util/fetchApi.js'
import { makeMediaCard, getTvSerieModal, getMovieModal } from './util/dynamicCreation.js'
import { storeQuery } from './util/storage.js'

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
    getTvSerieModal();
}


export const storeMediaQuery = (event) => {
    event.preventDefault();
    const input = document.getElementById('search').value;
    
    storeQuery(input);

    window.location.href='./search.html';


}
export const submitSearch = () => document.getElementById('searchQuery').onsubmit=storeMediaQuery;


export const loadSearchMovie = async (query) =>{
    
    try{
        let response = await searchMovie(query);
        const arrayMovies = response.results;
        arrayMovies.forEach(element=>{
            makeMediaCard(element);
        })
    }
    catch(error){
        console.log(error);
    }
    getMovieModal();
}

export const loadSearchTvSerie = async (query) =>{

    try{
        let response = await searchTvSerie(query);
        const arrayTvSeries = response.results;

        arrayTvSeries.forEach(element=>{
            makeMediaCard(element);
        })
    }
    catch(error){
        console.log(error);
    }
    getTvSerieModal();
}




