import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class RecordsHistoryScreen extends React.Component {

    render() {
        return (
            <View style={styles.recordContainer}>
                {
                    this.props.navigation.getParam('recordsHistory').map(record => {
                        return (
                            <View key={record.score} style={styles.recordRow}>
                                <Text style={styles.recordRowText}>{record.user} - {record.score}</Text>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    recordContainer: {
        textAlign: 'center',
        alignItems: 'center',
    },
    recordRow: {
        paddingVertical: 5,
    },
    recordRowText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})