import {START_GAME} from "../actions/types";

const initialState = {
    gameType: ''
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_GAME:
            return {
                ...state,
                gameType: action.payload
            };
        default:
            return state;
    }
};

export default gameReducer;