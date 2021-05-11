export const storeQuery = (query) => {

    sessionStorage.setItem('mediaToFind',query);
} 

export const getQuery = () =>{
    const query = sessionStorage.getItem('mediaToFind');
    
    return query.toString();
}