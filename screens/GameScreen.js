import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {fetchGameData, startGame} from "../actions/GameActions";

class GameScreen extends React.Component {

    componentDidMount() {
        if (!this.props.gameData) {
            this.props.fetchGameData();
        }
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                <Text onPress={() => navigate('HomeScreen')}>Game Screen</Text>
            </View>
        );
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