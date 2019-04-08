import React from 'react';
import {Button, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {startGame, fetchGameData} from "../actions/GameActions";


class HomeScreen extends React.Component {

    handleGameStart = () => {
        this.props.startGame('TEST');
        this.props.navigation.navigate('GameScreen');
    }

    handleGameData = () => {
        this.props.fetchGameData();
    }

    render() {
        console.log(this.props.gameData);
        return (
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                <Button
                    title="Start Game"
                    onPress={this.handleGameStart}
                />
                <Button
                    title="Get Game Data"
                    onPress={this.handleGameData}
                />
            </View>

        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        startGame: (type) => {
            dispatch(startGame(type))
        },
        fetchGameData: () => {
            dispatch(fetchGameData())
        }
    }
}

const mapStateToProps = state => {
    return {
        gameData: state.game.gameData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)