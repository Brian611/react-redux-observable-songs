// named exports allows us to export multiple functions

// ACTION TYPES 	------------------------------------------------------------
const FETCH_SONGS_START = "FETCH_SONGS_START";
const FETCH_SONGS_SUCCESS = "FETCH_SONGS_SUCCESS";
const FETCH_SONGS_FAILURE = "FETCH_SONGS_FAILURE";

const SELECTED_SONG = "SELECTED_SONG_SUCCESS";

export const actionTypes = {
    FETCH_SONGS_START,
    FETCH_SONGS_SUCCESS,
    FETCH_SONGS_FAILURE,
    SELECTED_SONG
}

export const selectSong = (song) => {
    return {
        type: actionTypes.SELECTED_SONG,
        payload: {
            song
        }
    }
}

export const fetchSongsStart = () => {
    return {
        type: actionTypes.FETCH_SONGS_START
    }
}

export const fetchSongsSuccess = (songs) => {
    return {
        type: actionTypes.FETCH_SONGS_SUCCESS,
        payload: {
            songs
        }
    }
}

export const fetchSongsFailure = (error) => {
    return {
        type: actionTypes.FETCH_SONGS_FAILURE,
        payload: {
            error
        }
    }
}