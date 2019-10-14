import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ImageBackground } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Divider from 'react-native-divider'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import Colors from '../../Constants/Colors';
import { Button } from 'native-base';

export default class SignUp extends React.Component {
  render() {

    return (
        <ImageBackground 
            style={{flex: 1}} 
            source={require('../../../assets/bgImage3.jpeg')}
        >
            <View style={{flex: 2,}}>
              <SafeAreaView>
                  <Button 
                    transparent
                    style={{justifyContent: 'flex-end', paddingRight: 20}}
                    onPress={() => this.props.navigation.navigate('Login')}
                  >
                      <Text style={{color: Colors.seablue, fontSize: 20, fontWeight: '600'}}>Log in</Text>
                  </Button>
              </SafeAreaView>
          </View>
          <View style={styles.container}>
              <View style={styles.textContainer}>
                  <Text style={styles.title}>Connect to Your</Text>
                  <Text style={styles.title}>Dry Cleaner</Text>
              </View>
              <View style={styles.textInputContainer}>
                  <TextInput 
                    style={styles.textInput}
                    placeholder='Email'
                    placeholderTextColor={Colors.DARKGRAY}
                  />
                  <TextInput 
                    style={styles.textInput}
                    placeholder='Password'
                    placeholderTextColor={Colors.DARKGRAY}
                    secureTextEntry={true}
                  />
              </View>
              <View style={{marginHorizontal: 30,}}>
                  <Divider 
                    orientation='center' 
                    color={Colors.DARKGRAY}  
                    borderColor='rgba(0,0,0,.1)'
                >
                      OR
                  </Divider>
              </View>
              <Button
                style={styles.loginButton}
                onPress={() => this.props.navigation.navigate('Home')}
              >
                  <Text style={{fontSize: 18, color: 'white', fontWeight: '600'}}>Sign up</Text>
              </Button>
          </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: Colors.blizzardblue,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  textContainer: {
      paddingHorizontal: 33,
      paddingTop: 25
  },
  title: {
    fontSize: 30, 
    fontWeight: 'bold',
    letterSpacing: .5
  },
  textInputContainer: {
    height: heightPercentageToDP('25%'),
    paddingTop: 15,
    // backgroundColor: 'orange'
  },
  textInput: {
      backgroundColor: 'rgba(225,225,225, 0.6)',
      height: heightPercentageToDP('8%'),
      marginHorizontal: 30,
      paddingLeft: 10,
      borderRadius: 10,
      fontSize: 18,
      marginTop: 10
  },
  separator: {
      height: StyleSheet.hairlineWidth,
      marginLeft: 40,
      backgroundColor: Colors.DARKGRAY,
    //   marginBottom: 20
  },
  loginButton: {
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: heightPercentageToDP('4%'),
      marginTop: 12,
      backgroundColor: Colors.seablue
  }
});