import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Colors from '../../Constants/Colors'



const ProgressBar = () => {
    return (
        <View>
            <View style={styles.progressBarContainer}>
                <View style={styles.progressBar} />
            </View>
            <Text style={styles.progressText}>60%</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    progressBar: {
        backgroundColor: Colors.seablue,
        height: 2,
        width: 100
    },
    progressBarContainer: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#e2e2e2',
        borderRadius: 15,
    },
    progressText: {
        paddingTop: 7,
        fontWeight: '600',
        fontSize: 13
    }
})

export default ProgressBar