import { combineEpics, ofType } from 'redux-observable';
import { map, mergeMap, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { of, throwError } from "rxjs";
import {
    actionTypes,
    fetchSongsFailure,
    fetchSongsSuccess
} from "../actions";

const fetchSongsEpic = action$ => action$.pipe(
    ofType(actionTypes.FETCH_SONGS_START),
    mergeMap(action => ajax.getJSON(`https://jsonplaceholder.typicode.com/todos`).pipe(
        map(response => {
            return fetchSongsSuccess(response)
        }),
        catchError(error => of(fetchSongsFailure(error)))
    ))
);

export const rootEpic = combineEpics(
    fetchSongsEpic
);