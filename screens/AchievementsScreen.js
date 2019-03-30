import React from 'react';
import {View, Text} from 'react-native';


export default class AchievementsScreen extends React.Component {
    static navigationOptions = {
        title: 'Achievements',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Achievements Screen</Text>
            </View>
        );
    }
}