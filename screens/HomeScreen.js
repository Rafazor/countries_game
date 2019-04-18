import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {persistor} from '../store/store'


class HomeScreen extends React.Component {
    handleGameStart = () => {
        this.props.navigation.navigate('GameScreen');

    };

    render() {
        return (
            <View style={styles.pageContainer}>
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
    pageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#facf5a',
    },
    introContainer: {
        paddingVertical: 20,
    },
    introText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
        color: '#085f63'
    },
    startContainer: {
        alignSelf: 'stretch',
        marginHorizontal: 50,
        marginVertical: 7,
        backgroundColor: '#49beb7',
        borderColor: '#085f63',
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