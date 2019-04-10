import React from 'react';
import {View, Text} from 'react-native';

export default class GameEngine extends React.Component {

    state = {
        data: this.props.gameData,
        score: 0,
        userName: '',
        correctAnswer: 'da',
        suggestedAnswers: ["da", "nu", "rom", "asd"],
        gameCountry: 'Romania',
        usedCountries: []
    };

    checkAnswer = (solution) => {
        if (solution === this.state.correctAnswer) {
            this.getNextRound()
        }
    }

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
    }

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
    }

    getRandomAnswer = () => {
        return this.getRandomField('capital')
    }

    getRandomField = (field) => {
        return this.state.data[Math.floor(Math.random() * this.state.data.length)][field]
    }

    getRandomCountry = () => {
        return this.state.data[Math.floor(Math.random() * this.state.data.length)]
    }

    componentDidMount() {
        this.getNextRound();
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                <Text style={{fontWeight: 'bold'}}>{this.state.score}</Text>
                <Text>{this.state.gameCountry}</Text>
                {
                    this.state.suggestedAnswers.map(answer => {
                        return <Text onPress={() => this.checkAnswer(answer)} key={answer + '1'}> {answer}</Text>
                    })
                }
            </View>
        )
    }
}