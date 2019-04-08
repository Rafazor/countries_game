import React from 'react';
import {Button, View, Text} from 'react-native';

class HomeScreen extends React.Component {

    handleGameStart = () => {
        this.props.navigation.navigate('GameScreen');

    };

    render() {
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

export default HomeScreen