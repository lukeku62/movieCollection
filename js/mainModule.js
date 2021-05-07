import { trendingMovies, trendingTvSeries } from './util/fetchApi.js'
import { makeMediaCard, addModal, getMediaModal } from './util/dynamicCreation.js'

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
    getMediaModal();
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
    
}







