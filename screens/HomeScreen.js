import React from 'react';
import {Button, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {startGame} from "../actions/GameActions";


class HomeScreen extends React.Component {

    handleGameStart = () => {
        this.props.startGame('TEST');
        this.props.navigation.navigate('GameScreen');
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                <Button
                    title="Start Game"
                    onPress={this.handleGameStart}
                />
            </View>

        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        startGame: (type) => {
            dispatch(startGame(type))
        }
    }
}

export default connect(null, mapDispatchToProps)(HomeScreen)