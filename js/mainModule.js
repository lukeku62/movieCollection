import {randomMovie} from './util/fetchApi.js'


export const addMovie = async () => {

    const movie = await randomMovie();

    console.log(movie.Poster);
    console.log(movie.Title);
    console.log(movie.Year);
    console.log(movie.Genre);
    const column = document.createElement('div');
    column.classList.add('col');
    const lista = document.getElementById('movieList');

    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('p-3');
    card.classList.add('mb-2');
    card.classList.add('bg-dark');
    card.classList.add('text-white');
    card.classList.add('darkCard');

    const img = new Image();
    img.src = movie.Poster;
    img.classList.add('card-image-top');
    img.classList.add('poster');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let title = document.createElement('h5');
    title.classList.add('card-title');
    title.innerHTML = movie.Title;

    let year = document.createElement('p');
    year.innerHTML = movie.Year;
    
    let genre = document.createElement('p');
    genre.innerHTML = movie.Genre;

    cardBody.appendChild(title);
    cardBody.appendChild(year);
    cardBody.appendChild(genre);

    card.appendChild(img);
    card.appendChild(cardBody);

    column.appendChild(card);

    lista.appendChild(column);
    
}