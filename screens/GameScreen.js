import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {fetchGameData} from '../actions/GameActions';

import GameEngine from '../components/GameEngine';

class GameScreen extends React.Component {

    componentDidMount() {
        if (!this.props.gameData) {
            this.props.fetchGameData();
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        if (!this.props.gameData) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                    <Text onPress={() => navigate('HomeScreen')}>Game Screen</Text>
                </View>
            );
        } else {
            return (
                <GameEngine/>
            )
        }

    }
}

const mapStateToProps = state => {
    return {
        gameData: state.game.gameData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGameData: () => {
            dispatch(fetchGameData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen)