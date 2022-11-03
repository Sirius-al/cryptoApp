/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import { View, Text, SafeAreaView, Image, TextInput } from 'react-native';
import React from 'react'
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants/theme';
import assets from '../constants/assets';


const HomeHeader = ({ onSearchInputChange }) => {

  const styles = {
    main: {
      backgroundColor: COLORS.primary,
      padding: SIZES.font,
    },
    head: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: { 
      width: 90,
      height: 25,
    },
    user: { 
      width: 45,
      height: 45,
      position: 'relative',
    },
    person1: { 
      width: '100%',
      height: '100%',
    },
    text1: {
      marginTop: SIZES.base,
      color: COLORS.white,
      fontSize: SIZES.small,
    },
    text2: {
      marginTop: SIZES.base + 5,
      marginBottom: SIZES.base,
      color: COLORS.white,
      fontSize: SIZES.large,
    },
    badge: { 
      width: 15, 
      height: 15, 
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
    searchIcon: {
      width: 20,
      height: 20,
      marginRight: SIZES.base,
      marginLeft: SIZES.base,
    },
    searchbar: { 
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      marginTop: 10,
      padding: 2,
      borderRadius: SIZES.font,
      backgroundColor: COLORS.gray,
    },
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.head}>
        <Image source={assets.logo} resizeMode="contain" style={styles.logo}/>

        <View style={styles.user}>
          <Image source={assets.person01} resizeMode="contain" style={styles.person1}/>
          <Image source={assets.badge} resizeMode="contain" style={styles.badge}/>
        </View>

      </View>

      <View>
          <Text style={styles.text1}>
            Hello Devs 👋
          </Text>
          <Text style={styles.text2}>
            Let's find a masterpiece..
          </Text>
      </View>

      <View style={styles.searchbar}>
        <Image source={assets.search} resizeMode="contain" style={styles.searchIcon}/>
        <TextInput placeholder='Search NFTs' onChangeText={onSearchInputChange} />
      </View>
      
    </SafeAreaView>
  )
}

export default HomeHeader;