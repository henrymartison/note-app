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

class HomeCard extends React.Component {
  render() {

    return (
      <View style={{backgroundColor: 'rgb(247,247,247)', flex: 1}}>
          <View style={{height: hp('22%'), backgroundColor: 'white', flexDirection: 'row'}}>
              <View style={{flex: 1, backgroundColor: 'white', paddingTop: 70, paddingLeft: 20}}>
                  <Text style={{fontSize: 28, fontWeight: '600'}}>Hello, Henry</Text>
                  <Text style={{fontSize: 13, fontWeight: '500', paddingTop: 10, color: 'grey'}}>Have a great day</Text>
              </View>
              <View style={{width: wp('35%'), backgroundColor: Colors.seablue, alignItems: 'center', justifyContent: 'center'}}>
                  <View style={{
                    //   backgroundColor: 'lightskyblue',
                      width: 58,
                      height: 58,
                      borderRadius: 58/2,
                      borderWidth: 1,
                      borderColor: 'white',
                      alignItems: 'center',
                      justifyContent: 'center'
                  }}>
                      <Thumbnail 
                        source={require('../../../assets/marvalinks.png')}
                      />
                  </View>
              </View>
          </View>

          <View style={{paddingHorizontal: 10, paddingTop: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{color: 'grey', fontWeight: '700', fontSize: 12}}>YOUR SCHEDULE</Text>
              <TouchableOpacity>
                  <Text style={{color: 'black', fontWeight: '700', fontSize: 13}}>See all</Text>
              </TouchableOpacity>
          </View>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{paddingTop: 20}}
          >
              <View style={{paddingLeft: 10,}}>
                  <Text style={{fontSize: 28, fontWeight: 'bold', paddingBottom: 15, paddingLeft: 8}}>Today</Text>
                  <TouchableOpacity 
                    style={{ flexDirection: 'row'}}
                    activeOpacity={.8}
                    onPress={() => this.props.navigation.navigate('Attendance')}
                >
                    <View style={{
                        height: hp('22%'),
                        backgroundColor: 'white',
                        width: width - wp('28%'),
                        borderRadius: 18
                    }}>
                        <View style={{flexDirection: 'row', flex: 1, }}>
                            <View style={{width: wp('20%'), paddingTop: 10, paddingLeft: 10}}>
                                <View style={{height: 43, width: 43, backgroundColor: Colors.seablue, borderRadius: 7, alignItems: 'center'}}>
                                    <Text style={{paddingTop: 10, fontWeight: 'bold', color: 'white'}}>9:30</Text>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: '700'}}>AM</Text>
                                </View>
                            </View>
                            <View style={{flex: 1, backgroundColor: 'white', margin: 10}}>
                                <View>
                                    <View style={{flexDirection: 'row', paddingTop: 5, justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Text style={{fontWeight: '700', fontSize: 16}}>Chem 217</Text>
                                        <View style={{marginRight: 5, backgroundColor: '#fef8e0', width: 60, height: 22, borderRadius: 4, alignItems: 'center', justifyContent: 'center'}}>
                                            <Text style={{fontSize: 11, fontWeight: 'bold', color: Colors.seablue}}>ONGOING</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 7}}>
                                        <Ionicons name='ios-person' size={15} color='grey'/>
                                        <Text style={{paddingLeft: 5, color: 'grey', fontWeight: '500'}}>Dr. Mary Chama</Text>
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
                    </TouchableOpacity>
              </View>
              
              {/* tomorrow */}
              <View style={{paddingHorizontal: 20,}}>
                  <Text style={{fontSize: 28, fontWeight: 'bold', paddingBottom: 15, paddingLeft: 8}}>Tomorrow</Text>
                  <View style={{ flexDirection: 'row'}}>
                    <View style={{
                        height: hp('22%'),
                        backgroundColor: 'white',
                        width: width - wp('28%'),
                        borderRadius: 18
                    }}>
                        <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
                            <View style={{width: wp('20%'), paddingTop: 10, paddingLeft: 10}}>
                                <View style={{height: 43, width: 43, backgroundColor: Colors.seablue, borderRadius: 7, alignItems: 'center'}}>
                                    <Text style={{paddingTop: 10, fontWeight: 'bold', color: 'white'}}>11: 20</Text>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: '700'}}>AM</Text>
                                </View>
                            </View>
                            <View style={{flex: 1, backgroundColor: 'white'}}>
                                <View>
                                    <View style={{flexDirection: 'row', paddingTop: 5, justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Text style={{fontWeight: '700', fontSize: 16}}>Mol. Biology</Text>
                                        <View style={{marginRight: 5, backgroundColor: '#fef8e0', width: 60, height: 22, borderRadius: 4, alignItems: 'center', justifyContent: 'center'}}>
                                            <Text style={{fontSize: 11, fontWeight: 'bold', color: Colors.seablue}}>ONGOING</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 7}}>
                                        <Ionicons name='ios-person' size={15} color='grey'/>
                                        <Text style={{paddingLeft: 5, color: 'grey', fontWeight: '500'}}>Mr. William A</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 13, paddingTop: 4}}>
                                        <FontAwesome5 name='building' size={15} color='grey'/>
                                        <Text style={{paddingLeft: 5, color: 'grey', fontWeight: '500'}}>Lower Theatre</Text>
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
          </ScrollView>

          
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

export default withNavigation(HomeCard)
