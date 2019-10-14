import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Thumbnail } from 'native-base';
import {withNavigation} from 'react-navigation'

import ProgressBar from './ProgressBar';
import Colors from '../../Constants/Colors';

const {width, height} = Dimensions.get('window')

export default class AttendanceCard extends React.Component {
  render() {

    return (
          <View style={{paddingTop: 20}}>
                  <View style={{ flexDirection: 'row'}} >
                    <View style={{
                        height: hp('25%'),
                        backgroundColor: 'white',
                        width: width,
                        borderRadius: 18
                    }}>
                        <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
                            <View style={{width: wp('20%'), paddingTop: 10, paddingLeft: 10}}>
                                <View style={{height: 43, width: 43, backgroundColor: Colors.seablue, borderRadius: 7, alignItems: 'center'}}>
                                    <Text style={{paddingTop: 10, fontWeight: 'bold', color: 'white'}}>9:30</Text>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: '700'}}>AM</Text>
                                </View>
                            </View>
                            <View style={{flex: 1, backgroundColor: 'white'}}>
                                <View>
                                    <View style={{flexDirection: 'row', paddingTop: 5, justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Text style={{fontWeight: '700', fontSize: 16}}>Biochemistry</Text>
                                        <View style={{marginRight: 5, backgroundColor: '#fef8e0', width: 60, height: 22, borderRadius: 4, alignItems: 'center', justifyContent: 'center'}}>
                                            <Text style={{fontSize: 11, fontWeight: 'bold', color: Colors.seablue}}>ONGOING</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 7}}>
                                        <Ionicons name='ios-person' size={15} color='grey'/>
                                        <Text style={{paddingLeft: 5, color: 'grey', fontWeight: '500'}}>Mr. Hendro M</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 13, paddingTop: 4}}>
                                        <FontAwesome5 name='building' size={15} color='grey'/>
                                        <Text style={{paddingLeft: 5, color: 'grey', fontWeight: '500'}}>Chemistry Dep't</Text>
                                    </View>
                                    <View>
                                        <ProgressBar/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
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
