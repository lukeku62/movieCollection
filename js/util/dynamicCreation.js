import {findMovieById, findTvSerieById} from './fetchApi.js'

//funzione che crea una card per il media
export const makeMediaCard = (element) => {
    //estrazione attributi
    let title = '';
    let year = '';
    if (element.name == undefined) {
        title = element.title;
        year = element.release_date.substring(0, 4);
    }
    else{
        title = element.name;
        year = element.first_air_date.substring(0, 4);
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
    card.setAttribute('data-bs-target','#exampleModal');
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


//crea modal
export const addModal = () => {
    
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.classList.add('fade');
    modal.setAttribute('id','exampleModal');
    modal.setAttribute('tabindex','-1');
    modal.setAttribute('aria-labelledby','exampleModalLabel');
    modal.setAttribute('aria-hidden','true');

    const modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    modalHeader.setAttribute('style','color:black;');
    
    const modalTitle = document.createElement('h5');
    modalTitle.classList.add('modal-title');
    modalTitle.setAttribute('id','exampleModalLabel');
    
    modalTitle.innerHTML="cotolettaro";

    const xButton = document.createElement('button');
    xButton.classList.add('btn-close');
    xButton.setAttribute('type','button');
    xButton.setAttribute('data-bs-dismiss','modal');
    xButton.setAttribute('aria-label','Close');


    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    modalBody.setAttribute('style','color:black;');
    const img = new Image();
    img.classList.add('poster');

    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');
    modalFooter.setAttribute('style','color:black;');

    

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(xButton);
    modalBody.appendChild(img);
    
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalDialog.appendChild(modalContent);
    modal.appendChild(modalDialog)
    
    const link = document.getElementById('cacio');
    link.appendChild(modal);

}

export const getMovieModal = () => {

    const exampleModal = document.getElementById('exampleModal');
    exampleModal.addEventListener('show.bs.modal', async function (event) {
        
        const button = event.relatedTarget;
        const recipient = button.getAttribute('data-bs-whatever');

        const media = await findMovieById(recipient);
        const title = media.title;
        const overview = media.overview;
        const backdrop = media.backdrop_path;

        const modalTitle = exampleModal.querySelector('.modal-title');
        modalTitle.textContent = title;
        
        const img = new Image();
        img.src = `https://image.tmdb.org/t/p/w300${backdrop}`;
        img.classList.add('poster');

        const descrizione = document.createElement('div');
        descrizione.innerHTML=overview;

        const modalBody = exampleModal.querySelector('.modal-body img');
        modalBody.src = img.src; 
        
        const modalFooter = exampleModal.querySelector('.modal-footer');
        modalFooter.textContent = overview;
    })
}

export const getTvSerieModal = () => {

    const exampleModal = document.getElementById('exampleModal');
    exampleModal.addEventListener('show.bs.modal', async function (event) {
        
        const button = event.relatedTarget;
        const recipient = button.getAttribute('data-bs-whatever');

        const media = await findTvSerieById(recipient);
        const title = media.name;
        const overview = media.overview;
        const backdrop = media.backdrop_path;

        const modalTitle = exampleModal.querySelector('.modal-title');
        modalTitle.textContent = title;
        
        const img = new Image();
        img.src = `https://image.tmdb.org/t/p/w300${backdrop}`;
        img.classList.add('img-fluid');

        const descrizione = document.createElement('div');
        descrizione.innerHTML=overview;

        const modalBody = exampleModal.querySelector('.modal-body img');
        modalBody.src = img.src; 
        
        const modalFooter = exampleModal.querySelector('.modal-footer');
        modalFooter.textContent = overview;
    })
}





