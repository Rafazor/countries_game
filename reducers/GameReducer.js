import {GET_GAME_DATA, SAVE_SCORE} from "../actions/types";

const initialState = {
    gameData: null,
    newRecord: {
        user: '',
        score: 0
    }
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GAME_DATA:
            return {
                ...state,
                gameData: action.payload
            };
        case SAVE_SCORE:
            return {
                ...state,
                newRecord: action.payload
            };
        default:
            return state;
    }
};

export default gameReducer;