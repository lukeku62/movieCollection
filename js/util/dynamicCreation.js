
//funzione che crea una card per il media
export const makeMediaCard = (element) => {
    //estrazione attributi
    let title = '';
    let year = '';
    if (element.media_type == 'movie') {
        title = element.title;
        year = element.release_date.substring(0, 4);
    }
    else if (element.media_type == 'tv') {
        title = element.name;
        year = element.first_air_date.substring(0, 4);
    }
    const poster = element.poster_path;
    const idMedia = element.id;
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

    const tester = document.createElement('button');
    tester.setAttribute('type','button');
    tester.classList.add('btn');
    tester.classList.add('btn-danger');
    tester.setAttribute('data-bs-toggle','modal');
    tester.setAttribute('data-bs-target',`#l${idMedia}`);
    tester.innerHTML='Tester';

    //append dei children
    cardBody.appendChild(titolo);
    cardBody.appendChild(anno);
    cardBody.appendChild(tester);
    card.appendChild(img);
    card.appendChild(cardBody);
    column.appendChild(card);
    lista.appendChild(column);

   
}

export const makeMediaModal = (element) => {
    let title = '';
    let year = '';
    if (element.media_type == 'movie') {
        title = element.title;
        year = element.release_date.substring(0, 4);
    }
    else if (element.media_type == 'tv') {
        title = element.name;
        year = element.first_air_date.substring(0, 4);
    }
    const poster = element.backdrop_path;
    const overview = element.overview;
    const idMedia = element.id;

    const img = new Image();
    img.src = `https://image.tmdb.org/t/p/w300${poster}`;

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.classList.add('fade');
    modal.setAttribute('id',`l${idMedia}`);
    modal.setAttribute('tabindex','-1');
    modal.setAttribute('aria-labelledby',`${title}ModalLabel`);
    modal.setAttribute('aria-hidden','true');

    const modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog');

    const modalContent = document.createElement('div');    
    modalContent.classList.add('modal-content');

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');

    const modalTitle = document.createElement('h5');
    modalTitle.classList.add('modal-title');
    modalTitle.setAttribute('id',`${title}ModalLabel`);
    modalTitle.innerHTML=title;

    const xButton = document.createElement('button');
    xButton.setAttribute('type','button');
    xButton.classList.add('btn-close');
    xButton.setAttribute('data-bs-dismiss','modal');
    xButton.setAttribute('aria-label','Close');

    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    const content = document.createElement('span');
    content.innerHTML=overview;

    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');

    //composizione modal
    modalBody.appendChild(content);
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(xButton);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalDialog.appendChild(modalContent);
    modal.appendChild(modalDialog);
}