import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import QRCode from 'react-native-qrcode-svg'

import ProgressBar from '../../components/HomePage/ProgressBar';
import AttendanceCard from '../../components/HomePage/AttendanceCard';
import Colors from '../../Constants/Colors';

const {width, height} = Dimensions.get('window')

export default class Attendance extends React.Component {
  render() {

    return (
      <View style={{flex: 1, backgroundColor: 'rgb(247,247,247)'}}>
          <AttendanceCard/>
          <View style={{flex: 1, backgroundColor: '#b1b1b1', justifyContent: 'space-between'}}>
              <View style={{alignItems: 'center', justifyContent: 'center', height: hp('50%'),}}>
                <QRCode
                    value="https://expo.io/--/to-exp/exp%3A%2F%2F192.168.8.136%3A19000"
                    size={200}
                />
                <Text style={{paddingTop: 10, paddingHorizontal: 50, textAlign: 'center', color: 'white', fontWeight: '600'}}>
                    Scan Class QR Code to book your attendance.
                    Scan the QR Code before your class running on 10%
                </Text>
              </View>
              <TouchableOpacity 
                style={{padding: 20}}
                activeOpacity={.8}
                onPress={() => this.props.navigation.goBack()}
            >
                  <View style={{height: 70, width: 70, borderRadius: 70/2, backgroundColor: Colors.seablue, justifyContent: 'center', alignItems: 'center'}}>
                      <Ionicons name='ios-arrow-back' size={26} color='white' />
                  </View>
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
