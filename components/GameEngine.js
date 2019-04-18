import React from 'react';
import {StyleSheet, View} from 'react-native';
import GameBoard from './GameBoard';
import EndGame from './EndGame';

export default class GameEngine extends React.Component {
    state = {
        data: this.props.gameData,
        score: 0,
        correctAnswer: '',
        suggestedAnswers: [],
        gameCountry: '',
        usedCountries: [],
        endGame: false
    };

    playAgain = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                score: 0,
                correctAnswer: '',
                suggestedAnswers: [],
                gameCountry: '',
                usedCountries: [],
                endGame: false
            }
        }, () => {
            this.getNextRound();
        });
    };

    saveNewRecord = (user) => {
        this.props.saveUserScore({
            user: user,
            score: this.state.score
        });
        this.props.nav.navigate('HomeScreen');
    };

    checkAnswer = (solution) => {
        if (solution === this.state.correctAnswer) {
            this.getNextRound()
        } else {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    endGame: true
                }
            })
        }
    };

    getNextRound = () => {
        let randomCountry = this.getRandomCountry();

        if (randomCountry.capital === '' || this.state.usedCountries.includes(randomCountry.name)) {
            randomCountry = this.getRandomCountry();
        }

        const suggestedAnswers = this.getSuggestedAnswers(randomCountry.capital);

        this.setState((prevState) => {
            return {
                ...prevState,
                gameCountry: randomCountry.name,
                correctAnswer: randomCountry.capital,
                suggestedAnswers: suggestedAnswers,
                usedCountries: [...prevState.usedCountries, randomCountry.name],
                score: prevState.score === 0 && prevState.usedCountries.length === 0 ? 0 : prevState.score + 1
            }
        })
    };

    getSuggestedAnswers = (correctAnswer) => {
        let arr = [];
        let randomPlace = Math.floor(Math.random() * (4));
        for (let i = 0; i < 4; i++) {
            if (i === randomPlace) {
                arr.push(correctAnswer)
            } else {
                let random = this.getRandomAnswer();
                if (random === '' || arr.includes(random)) {
                    random = this.getRandomAnswer();
                }
                arr.push(random)
            }
        }
        return arr
    };

    getRandomAnswer = () => {
        return this.getRandomField('capital')
    };

    getRandomField = (field) => {
        return this.state.data[Math.floor(Math.random() * this.state.data.length)][field]
    };

    getRandomCountry = () => {
        return this.state.data[Math.floor(Math.random() * this.state.data.length)]
    };

    componentDidMount() {
        this.getNextRound();
    }

    render() {
        return (
            <View style={styles.pageContainer}>
                {this.state.endGame ?
                    <EndGame saveNewRecord={this.saveNewRecord}
                             score={this.state.score}
                             record={this.props.newRecord.score}
                             nav={this.props.nav}
                             playAgain={this.playAgain}
                    />
                    :
                    <GameBoard
                        score={this.state.score}
                        gameCountry={this.state.gameCountry}
                        suggestedAnswers={this.state.suggestedAnswers}
                        checkAnswer={this.checkAnswer}
                    />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#facf5a',
    }
});