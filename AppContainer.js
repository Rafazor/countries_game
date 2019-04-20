import React from 'react';
import {
    createAppContainer,
    createBottomTabNavigator,
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation';
import {Ionicons} from '@expo/vector-icons';
import {Platform} from "react-native";

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import AchievementsScreen from './screens/AchievementsScreen';
import RecordsHistoryScreen from './screens/RecordsHistoryScreen';

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

const AchievementsNavigator = createStackNavigator({
    Achievements: {
        screen: AchievementsScreen,
        navigationOptions: {
            title: 'Achievements'
        }
    },
    RecordsHistory: {
        screen: RecordsHistoryScreen,
        navigationOptions: {
            title: 'Records History'
        }
    }
})

const TabNavigator = createBottomTabNavigator({
        HomeTab: {
            screen: GameNavigator,
            navigationOptions: {
                title: 'Game!',
                tabBarIcon: () => {
                    return <Ionicons name='logo-game-controller-b' size={25} color='white'/>;
                }
            },
        },
        AchievementsTab: {
            screen: AchievementsNavigator,
            navigationOptions: {
                title: 'Achievements!',
                tabBarIcon: () => {
                    return <Ionicons name={Platform.OS === "ios" ? "ios-trophy" : "md-trophy"} size={25} color='white'/>;
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeBackgroundColor: '#085f63',
            labelStyle: {
                fontSize: 15,
                color: 'white',
            },
            style: {
                backgroundColor: '#49beb7',
            },
        }
    });

const App = createAppContainer(TabNavigator);


export default class AppContainer extends React.Component {
    render() {
        return (
            <App/>
        )
    }
}