export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_Movie = "ADD_Movie";


export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (nameOfMovie) => {
    return ({
        type: ADD_Movie,
        payload:  nameOfMovie,
    });
}