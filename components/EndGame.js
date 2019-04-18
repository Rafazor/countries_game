import React from 'react';
import {View, Text, TextInput, Button} from "react-native";

class EndGame extends React.Component {
    state = {
        text: ''
    };

    render() {
        if (this.props.score > this.props.record) {
            return (
                <View>
                    <Text>NEW RECORD!</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}/>
                    <Button title='Save Record!' onPress={() => this.props.saveNewRecord(this.state.text)}/>
                </View>
            )
        } else {
            return (
                <View>
                    <Button title='Play Again!' onPress={() => this.props.playAgain()}/>
                    <Button title='Go Home!' onPress={() => this.props.nav.navigate('HomeScreen')}/>
                </View>
            )
        }

    }
}

export default EndGame;