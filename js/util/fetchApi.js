const apiKey = '2116359f66f6a18976eaf04307523210';




// export const randomMovie = async () => {
//     const max = 9999999;
//     const min = 1;
//     let random = parseInt(Math.random() * (max - min) + min);
//     let randomString = random.toString();
//     console.log(randomString.length);
//     let stringSupport = "";
//     for(let i = 0; i < 7-randomString.length;i++){
//         stringSupport += '0';
//     }
    
//     stringSupport.concat(randomString);
//     let idSuffix = "tt";
//     let id = idSuffix.concat(stringSupport).concat(randomString);
//     console.log(id);

//     let response = await fetch(`http://www.omdbapi.com/?apikey=42d69f86&i=${id}`);
//     let data = await response.json();
//     let titolo = data.Title;
//     let poster = data.Poster;
//     let status = await checkPoster(poster);
//     if(typeof titolo === 'undefined' || status == 404){
        
//         return randomMovie();
//     }

//     return data;
        
        
// }

// const checkPoster = async (indirizzo) => {
//     const res = await fetch(indirizzo);
//     const status = res.status;
//     return status;
// }


export const trendingMovies = async () => {

    let response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`);
    let data = await response.json();
    return data;
    
}

export const trendingTvSeries = async () => {

    let response = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`);
    let data = await response.json();
    return data;
    
}

// export const searchMovies = async (query) => {

//     let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1&include_adult=false`);
//     let data = await response.json();
//     console.log(data);
//     return data;
// }



