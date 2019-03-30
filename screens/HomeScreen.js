import React from 'react';
import {Button, View, Text} from 'react-native';


export default class HomeScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                <Button
                    title="Start Game"
                    onPress={() => navigate('GameScreen')}
                />
            </View>

        );
    }
}