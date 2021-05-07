const apiKey = '2116359f66f6a18976eaf04307523210';

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

export const findMovieById = async (id) => {

    let response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
    let data = await response.json();
    return data;
}

export const findTvSerieById = async (id) => {

    let response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`);
    let data = await response.json();
    return data;
}



