import { combineReducers } from "redux";
import { actionTypes } from "../actions";


const initialState = {
    fetching: false,
    songs: [],
    song: {},
    error: null
};

const songsReducer = (state = initialState, action) => {
    if (action.type === actionTypes.SELECTED_SONG) {
        const { song } = action.payload;
        return Object.assign({},
            state, {
                fetching: false,
                song
            }
        )
    }

    if (action.type === actionTypes.FETCH_SONGS_START) {
        return Object.assign({},
            state, {
                fetching: true
            }
        )
    }

    if (action.type === actionTypes.FETCH_SONGS_SUCCESS) {
        const { songs } = action.payload;
        return Object.assign({},
            state, {
                fetching: false,
                songs
            }
        )
    }

    if (action.type === actionTypes.FETCH_SONGS_FAILURE) {
        const { error } = action.payload
        return Object.assign({},
            state, {
                fetching: false,
                error
            }
        )
    }

    return state;
}

export const rootReducer = combineReducers({
    songs: songsReducer
})