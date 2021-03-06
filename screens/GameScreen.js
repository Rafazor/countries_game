import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {fetchGameData, saveScore} from '../actions/GameActions';

import GameEngine from '../components/GameEngine';

class GameScreen extends React.Component {

    componentDidMount() {
        if (!this.props.gameData) {
            this.props.fetchGameData();
        }
    }

    saveUserScore = (score) => {
        this.props.saveScore(score)
    }

    render() {
        if (!this.props.gameData) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                    <Text>Loading Game...</Text>
                </View>
            );
        } else {
            return (
                <GameEngine gameData={this.props.gameData} nav={this.props.navigation}
                            saveUserScore={this.saveUserScore} newRecord={this.props.newRecord}/>
            )
        }

    }
}

const mapStateToProps = state => {
    return {
        gameData: state.game.gameData,
        newRecord: state.game.newRecord
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGameData: () => {
            dispatch(fetchGameData())
        },
        saveScore: (score) => {
            dispatch(saveScore(score))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen)