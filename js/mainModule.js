import { trendingMovies, trendingTvSeries, searchMovie, searchTvSerie} from './util/fetchApi.js'
import { makeMediaCard, getModal } from './util/dynamicCreation.js'
import { storeQuery } from './util/storage.js'
import { Amplify } from 'aws-amplify'
import { config } from '.aws-exports'
Amplify.configure(config)

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
    
    getModal();
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
    getModal();
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
    getModal();
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
    getModal();
}


export const searchMedia = (event) => {
    
    document.getElementById('movieList').innerHTML="";
    event.preventDefault();
    const input = document.getElementById('search').value;
    
    loadSearchMovie(input);
    loadSearchTvSerie(input);

}
export const submitSuperSearch = () => document.getElementById('searchForm').onsubmit=searchMedia;




