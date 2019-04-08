import {START_GAME, GET_GAME_DATA} from "./types";

const apiUrl = 'https://restcountries.eu/rest/v2/all?fields=name;capital';


export const startGame = gameType => {
    return {
        type: START_GAME,
        payload: gameType
    }
}

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
