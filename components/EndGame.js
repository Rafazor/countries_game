import React from 'react';
import {View, Text, TextInput, Button} from "react-native";

class EndGame extends React.Component {
    state = {
        text: '',
        recordSaved: false
    };

    handleSaveRecord = () => {
        this.props.saveNewRecord(this.state.text)
        this.setState((prevState) => {
            return {
                ...prevState,
                recordSaved: true
            }
        })

    }

    render() {
        if (this.props.score > this.props.record && this.state.recordSaved === false) {
            return (
                <View style={{marginHorizontal: 30}}>
                    <Text>NEW RECORD!</Text>
                    <TextInput
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1,
                            backgroundColor: 'white',
                            paddingLeft: 20
                        }}
                        onChangeText={(text) => this.setState({text})}/>
                    <Button
                        title='Save Record!'
                        onPress={() => this.handleSaveRecord()}/>
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