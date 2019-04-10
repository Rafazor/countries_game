import React from 'react';
import {Text, View} from "react-native";

const GameBoard = (props) => {
    return (
        <View>
            <Text style={{fontWeight: 'bold'}}>{props.score}</Text>
            <Text>{props.gameCountry}</Text>
            {
                props.suggestedAnswers.map(answer => {
                    return <Text onPress={() => props.checkAnswer(answer)} key={answer + '1'}> {answer}</Text>
                })
            }
        </View>
    )
};

export default GameBoard;