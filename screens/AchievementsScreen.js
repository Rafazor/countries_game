import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';

class AchievementsScreen extends React.Component {


    render() {
        return (
            <View>
                <View style={styles.recordContainer}>
                    <Text style={styles.recordText}>Record</Text>
                    <Text style={styles.userText}>
                        {this.props.newRecord.user !== '' ?
                            this.props.newRecord.user + ' - ' + this.props.newRecord.score
                            :
                            'none'
                        }
                    </Text>
                </View>
                <View>
                    <Button
                        title='Records History'
                        onPress={
                            () => this.props.navigation.navigate(
                                'RecordsHistory',
                                {
                                    recordsHistory: this.props.recordsHistory
                                })
                        }/>
                </View>
            </View>

        );
    }
}

const mapStateToProps = state => {
    return {
        newRecord: state.game.newRecord,
        recordsHistory: state.game.recordsHistory
    }
};

const styles = StyleSheet.create({
    recordContainer: {
        textAlign: 'center',
        alignItems: 'center',
        paddingVertical: 30,
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    recordText: {
        paddingBottom: 10,
        fontWeight: 'bold',
        fontSize: 20
    },
    userText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#085f63'
    }
});

export default connect(mapStateToProps)(AchievementsScreen);