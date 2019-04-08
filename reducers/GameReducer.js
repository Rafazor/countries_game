import {START_GAME, GET_GAME_DATA} from "../actions/types";

const initialState = {
    gameType: '',
    gameData: []
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_GAME:
            return {
                ...state,
                gameType: action.payload
            };
        case GET_GAME_DATA:
            return {
                ...state,
              gameData: action.payload
            };
        default:
            return state;
    }
};

export default gameReducer;