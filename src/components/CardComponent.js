import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import { CheckBox } from 'native-base'

const CardComponent = () => {
    return (
        <View style={styles.cardContainer}>
            <View style={{flex: 1, paddingTop: 15, paddingLeft: 10}}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>Practical Biology</Text>
                <Text style={{paddingTop: 10, color: 'grey', fontWeight: '500'}}>Halaman 290 - 350 Kerjain Sermua</Text>
            </View>
            <View style={{width: wp('15%'), alignItems: 'center', justifyContent: 'center', paddingRight: 10}}>
                <CheckBox checked={true} color='#b6d591' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        height: hp('15%'),
        backgroundColor: 'white',
        marginBottom: 10,
        marginHorizontal: 10,
        borderRadius: 20,
        borderWidth: .5,
        borderColor: '#e2e2e2',
        flexDirection: 'row',
        padding: 10
    }
})

export default CardComponent