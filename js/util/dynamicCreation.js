import {findMovieById, findTvSerieById} from './fetchApi.js'

//funzione che crea una card per il media
export const makeMediaCard = (element) => {
    //estrazione attributi
    let title = '';
    let year = '';
    let b = true;
    if (element.name == undefined) {
        title = element.title;
        year = element.release_date.substring(0, 4);
    }
    else{
        title = element.name;
        year = element.first_air_date.substring(0, 4);
        b = false;
    }
    const poster = element.poster_path;
    const mediaId = element.id;
    
    //creazione della card
    const column = document.createElement('div');
    column.classList.add('col');
    
    
    const lista = document.getElementById('movieList');
    //creazione card
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('mb-5');
    card.classList.add('bg-dark');
    card.classList.add('text-white');
    card.classList.add('darkCard');
    card.setAttribute('type','button');
    card.setAttribute('data-bs-toggle','modal');
    if(b == true)
        card.setAttribute('data-bs-target','#movieModal');
    else
        card.setAttribute('data-bs-target','#tvModal');
    card.setAttribute('data-bs-whatever',`${mediaId}`);
    
    //creazione immagine
    const img = new Image();
    img.src = `https://image.tmdb.org/t/p/w300${poster}`;
    img.classList.add('card-image-top');
    img.classList.add('poster');
    //creazione cardBody
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    //creazione elementi attributi
    let titolo = document.createElement('h5');
    titolo.classList.add('card-title');
    titolo.innerHTML = title;
    let anno = document.createElement('p');
    anno.innerHTML = year;
    //append dei children
    cardBody.appendChild(titolo);
    cardBody.appendChild(anno);
    card.appendChild(img);
    card.appendChild(cardBody);
    column.appendChild(card);
    lista.appendChild(column);
}


export const getMovieModal = () => {

    const modalItem = document.getElementById('movieModal');
    modalItem.addEventListener('show.bs.modal', async function (event) {
        
        const button = event.relatedTarget;
        const recipient = button.getAttribute('data-bs-whatever');

        const media = await findMovieById(recipient);
        const title = media.title;
        const overview = media.overview;
        const backdrop = media.backdrop_path;
        const genres = media.genres;
        const genresList = new Array;
        genres.forEach(element => {
            genresList.push(element.name);
        });        
        const year = media.release_date.substring(0,4); 
        
        const img = new Image();
        img.src = `https://image.tmdb.org/t/p/w300${backdrop}`;
        img.classList.add('poster');

        const modalTitle = modalItem.querySelector('#movieModalTitle');
        modalTitle.textContent = title;

        const modalYear = modalItem.querySelector('#movieModalYear');
        modalYear.textContent = year;

        const modalBackdrop = modalItem.querySelector('#movieModalBackdrop');
        modalBackdrop.src = img.src; 

        const modalGenres = modalItem.querySelector('#movieModalGenres');
        modalGenres.textContent = '';
        

        genresList.forEach(element => {
            if(element != genresList[genresList.length-1])
                modalGenres.textContent = modalGenres.textContent + `${element}, `;
            else
                modalGenres.textContent = modalGenres.textContent + `${element}`;
        });
        

        const modalOverview = modalItem.querySelector('#movieModalOverview');
        modalOverview.textContent = overview;
        
    })
}


export const getTvSerieModal = () => {

    const modalItem = document.getElementById('tvModal');
    modalItem.addEventListener('show.bs.modal', async function (event) {
        
        const button = event.relatedTarget;
        const recipient = button.getAttribute('data-bs-whatever');

        const media = await findTvSerieById(recipient);
        
        const title = media.name;
        const overview = media.overview;
        const backdrop = media.backdrop_path;
        const genres = media.genres;
        const genresList = new Array;
        genres.forEach(element => {
            genresList.push(element.name);
        });        
        const year = media.first_air_date.substring(0,4); 
        
        const img = new Image();
        img.src = `https://image.tmdb.org/t/p/w300${backdrop}`;
        img.classList.add('poster');

        const modalTitle = modalItem.querySelector('#tvModalTitle');
        modalTitle.textContent = title;

        const modalYear = modalItem.querySelector('#tvModalYear');
        modalYear.textContent = year;

        const modalBackdrop = modalItem.querySelector('#tvModalBackdrop');
        modalBackdrop.src = img.src; 

        const modalGenres = modalItem.querySelector('#tvModalGenres');
        modalGenres.textContent = '';

        genresList.forEach(element => {
            if(element != genresList[genresList.length-1])
                modalGenres.textContent = modalGenres.textContent + `${element}, `;
            else
                modalGenres.textContent = modalGenres.textContent + `${element}`;
        });
        

        const modalOverview = modalItem.querySelector('#tvModalOverview');
        modalOverview.textContent = overview;
        
    })
}





