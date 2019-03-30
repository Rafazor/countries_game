import React from 'react';
import {View, Text} from 'react-native';


export default class GameScreen extends React.Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                <Text onPress={() => navigate('HomeScreen')}>Game Screen</Text>
            </View>
        );
    }
}