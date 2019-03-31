import {START_GAME} from "./types";

export const startGame = gameType => {
    return {
        type: START_GAME,
        payload: gameType
    }
}