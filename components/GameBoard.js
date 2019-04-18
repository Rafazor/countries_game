import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from "react-native";

const GameBoard = (props) => {
    return (
        <View style={styles.boardContainer}>
            <View>
                <Text style={styles.score}>{props.score}</Text>
            </View>
            <View style={styles.questionContainer}>
                <Text style={styles.question}>{props.gameCountry}</Text>
            </View>
            {
                props.suggestedAnswers.map(answer => {

                    return(
                        <View style={styles.answerContainer} key={answer}>
                            <Text style={styles.answer} onPress={() => props.checkAnswer(answer)}> {answer}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
};

const styles = StyleSheet.create({
    boardContainer: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    score: {
        fontWeight: 'bold',
        fontSize: 35,
        marginBottom: 20,
        color: 'red'
    },
    questionContainer: {
        backgroundColor: 'blue',
        alignSelf: 'stretch',
        paddingVertical: 20,
        borderColor: 'red',
        borderTopWidth: 3,
        borderBottomWidth: 3,
        marginBottom: 20
    },
    question: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        textAlign: 'center'
    },
    answerContainer: {
        alignSelf: 'stretch',
        marginHorizontal: 50,
        marginVertical: 7,
        backgroundColor: 'red',
        borderColor: 'blue',
        borderWidth: 2,
        paddingVertical: 5,
    },
    answer: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    }
})


export default GameBoard;