import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createSwitchNavigator
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import AchievementsScreen from './screens/AchievementsScreen';

const GameNavigator = createSwitchNavigator({
    HomeScreen: {screen: HomeScreen},
    GameScreen: {screen: GameScreen},
});

GameNavigator.navigationOptions = ({navigation}) => {
    //hide TabNavigator on the GameScreen

    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

const TabNavigator = createBottomTabNavigator({
    HomeTab: GameNavigator,
    AchievementsTab: AchievementsScreen
});

const App = createAppContainer(TabNavigator);


export default class AppContainer extends React.Component {
    render() {
        return (
            <App/>
        )
    }
}