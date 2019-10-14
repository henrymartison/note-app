import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'

import HomeCard from '../../components/HomePage/Cards';
import CardComponent from '../../components/CardComponent';
import Colors from '../../Constants/Colors';

const {height} = Dimensions.get('window')

export default class Home extends React.Component {
  render() {

    return (
      <View style={{flex: 1, backgroundColor: 'rgb(247,247,247)'}} >
          <HomeCard/>
          <View style={{backgroundColor: 'white', height: hp('35%'), justifyContent: 'flex-end'}}>
              <View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingBottom: 18}}>
                      <Text style={{fontWeight: '600', fontSize: 17}}>TODAY'S NOTES</Text>
                      <Text style={{fontWeight: '900'}}>See all</Text>
                  </View>
                  <CardComponent/>
              </View>
              <View style={{padding: 10, flexDirection: 'row',}}>
                <View style={styles.bottomBarContainer}>
                    <View style={{paddingLeft: 15}}>
                        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Check in Attendance</Text>
                    </View>
                    <View style={styles.arrowForwardContainer}>
                        <Ionicons name='md-arrow-forward' size={28} color='white' />
                    </View>
                </View>
                <View style={styles.moreContainer}>
                    <Ionicons name='md-apps' size={30} color='white' />
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
  bottomBarContainer: {
    backgroundColor: 'white',
    height: hp('8%'),
    borderRadius: hp('10%'),
    flex: 1,
    marginRight: 15,
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: .2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  moreContainer: {
    backgroundColor: Colors.seablue,
    height: hp('8%'),
    width: wp('15%'),
    borderRadius: hp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: .2
  },
  arrowForwardContainer: {
    backgroundColor: Colors.seablue,
    height: hp('7.8%'),
    borderRadius: hp('10%'),
    width: wp('18%'), alignItems: 'center',
    justifyContent: 'center'
  }

});
