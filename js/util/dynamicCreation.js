import {findMovieById, findTvSerieById} from './fetchApi.js'

//funzione che crea una card per il media
export const makeMediaCard = async (element) => {
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
        if(element.first_air_date != undefined)
            year = element.first_air_date.substring(0, 4);
        else
            year = 'Year undefined';

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
        card.setAttribute('media-type','movie');
    else
        card.setAttribute('media-type','tv');
    
    card.setAttribute('data-bs-target','#modal');

    card.setAttribute('data-bs-whatever',`${mediaId}`);
    
    //creazione immagine
    const img = new Image();
    img.src = `https://image.tmdb.org/t/p/w300${poster}`;
    img.classList.add('card-image-top');
    img.classList.add('poster');
    img.setAttribute('onerror',"this.onerror=null; this.src='/img/Sgarbi.jpg'");
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







export const getModal = async () => {

    const modalItem = document.getElementById('modal');
    modalItem.addEventListener('show.bs.modal', async function (event) {
        
        const button = event.relatedTarget;
        const recipient = button.getAttribute('data-bs-whatever');
        const mediaType = button.getAttribute('media-type');

        if(mediaType == 'movie'){

            const media = await findMovieById(recipient);
            const title = media.title;
            const overview = media.overview;
            const backdrop = media.backdrop_path;
            const genres = media.genres;
            const genresList = new Array;
            if(genres != undefined){
                genres.forEach(element => {
                    genresList.push(element.name);
                });
            } 
            const year = media.release_date.substring(0,4); 
        
            const img = new Image();
            img.src = `https://image.tmdb.org/t/p/w300${backdrop}`;
            img.classList.add('poster');
            
            

            const modalTitle = modalItem.querySelector('#modalTitle');
            modalTitle.textContent = title;

            const modalYear = modalItem.querySelector('#modalYear');
            modalYear.textContent = year;

            const modalBackdrop = modalItem.querySelector('#modalBackdrop');
            modalBackdrop.src = img.src; 

            const modalGenres = modalItem.querySelector('#modalGenres');
            modalGenres.textContent = '';
            

            genresList.forEach(element => {
                if(element != genresList[genresList.length-1])
                    modalGenres.textContent = modalGenres.textContent + `${element}, `;
                else
                    modalGenres.textContent = modalGenres.textContent + `${element}`;
            });
            

            const modalOverview = modalItem.querySelector('#modalOverview');
            modalOverview.textContent = overview;     
        }

        else{
            const media = await findTvSerieById(recipient);
        
            const title = media.name;
            const overview = media.overview;
            const backdrop = media.backdrop_path;
            const genres = media.genres;
            const genresList = new Array;
            if(genres != undefined){
                genres.forEach(element => {
                    genresList.push(element.name);
                });
            }
                
            const year = media.first_air_date.substring(0,4); 
            
            const img = new Image();
            const response = await fetch(`https://image.tmdb.org/t/p/w300${backdrop}`);
            if(response.ok)
                img.src = `https://image.tmdb.org/t/p/w300${backdrop}`;
                
            else
                img.src = '../../img/Sgarbi.jpg';
            img.classList.add('poster');
            
            

            const modalTitle = modalItem.querySelector('#modalTitle');
            modalTitle.textContent = title;

            const modalYear = modalItem.querySelector('#modalYear');
            modalYear.textContent = year;

            const modalBackdrop = modalItem.querySelector('#modalBackdrop');
            modalBackdrop.src = img.src; 

            const modalGenres = modalItem.querySelector('#modalGenres');
            modalGenres.textContent = '';

            genresList.forEach(element => {
                if(element != genresList[genresList.length-1])
                    modalGenres.textContent = modalGenres.textContent + `${element}, `;
                else
                    modalGenres.textContent = modalGenres.textContent + `${element}`;
            });
            

            const modalOverview = modalItem.querySelector('#modalOverview');
            modalOverview.textContent = overview;
        }

        
    })  



}




