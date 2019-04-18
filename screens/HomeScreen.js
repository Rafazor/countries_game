import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {persistor} from '../store/store'


class HomeScreen extends React.Component {

    handleGameStart = () => {
        this.props.navigation.navigate('GameScreen');

    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                <View style={styles.introContainer}>
                    <Text style={styles.introText}>Can You Guess All The Capitals?</Text>
                </View>
                <View style={styles.startContainer}>
                    <Text style={styles.start} onPress={this.handleGameStart}>Start Game</Text>
                </View>
                <View>
                    <Text onPress={() => persistor.purge()}>Clear store</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    introContainer: {
        paddingVertical: 20,
    },
    introText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25
    },
    startContainer: {
        alignSelf: 'stretch',
        marginHorizontal: 50,
        marginVertical: 7,
        backgroundColor: 'red',
        borderColor: 'blue',
        borderWidth: 2,
        paddingVertical: 5,
    },
    start: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    }
})

export default HomeScreen