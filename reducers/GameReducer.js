import {GET_GAME_DATA} from "../actions/types";

const initialState = {
    gameData: []
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
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