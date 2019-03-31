import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class GameScreen extends React.Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                <Text style={{color: 'blue'}}>{this.props.gameType}</Text>
                <Text onPress={() => navigate('HomeScreen')}>Game Screen</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        gameType: state.game.gameType
    }
}


export default connect(mapStateToProps)(GameScreen)