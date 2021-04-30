
export const randomMovie = async () => {
    const max = 9999999;
    const min = 1;
    let random = parseInt(Math.random() * (max - min) + min);
    let randomString = random.toString();
    console.log(randomString.length);
    let stringSupport = "";
    for(let i = 0; i < 7-randomString.length;i++){
        stringSupport += '0';
    }
    
    stringSupport.concat(randomString);
    let idSuffix = "tt";
    let id = idSuffix.concat(stringSupport).concat(randomString);
    console.log(id);

    let response = await fetch(`http://www.omdbapi.com/?apikey=42d69f86&i=${id}`);
    let data = await response.json();
    let titolo = data.Title;
    let poster = data.Poster;
    if(typeof titolo === 'undefined' || typeof poster === undefined || await fetch(poster.url) == 404){
        
        return randomMovie();
    }

    return data;
        
        
}