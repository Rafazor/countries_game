import {GET_GAME_DATA, SAVE_SCORE} from "./types";

const apiUrl = 'https://restcountries.eu/rest/v2/all?fields=name;capital';

export const getGameData = data => {
    return {
        type: GET_GAME_DATA,
        payload: data
    }
}

export const fetchGameData = () => {
    return async (dispatch) => {
        try {
            let response = await fetch(apiUrl);
            let gameData = await response.json();
            return dispatch(getGameData(gameData))
        } catch (err) {
            // catches errors both in fetch and response.json
            console.log(err)
        }
    };
}

export const saveScore = score => {
    return {
        type: SAVE_SCORE,
        payload: score
    }
}