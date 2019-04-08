import React from 'react';
import {Button, View, Text} from 'react-native';
import {persistor} from '../store/store'


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
                <Button
                    title="Clear store"
                    onPress={() => persistor.purge()}
                />
            </View>
        );
    }
}

export default HomeScreen