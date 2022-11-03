/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */


import React, { useState } from 'react';
import { Dimensions, Button, Text, View, SafeAreaView, FlatList, SafeAreaViewComponent } from 'react-native';
import { CircularButton, RectButton } from '../Buttons';
import { NTitle, NPrice, NPeople, EndDate } from '../sub_components/NftCardComponents';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../constants/theme';
// import Icon from 'react-native-vector-icons/MaterialIcons';


function HomeScreen({ route, navigation }) {
    const { item } = route.params;

    console.log(item);

    const styles = {
      main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      innerSection1: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        overflowX: 'hidden',
        overflowY: 'scroll',
        paddingBottom: 40,
        position: 'relative',
      },
      placeBitButtonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 3
      },
      placeBitButton: {
        width: 150,
      },
    }
  
    return (
        <SafeAreaView style={styles.main}>
          <View style={styles.innerSection1}>

            <FlatList
              data={item.bids}
              showsVerticalScrollIndicator={false}
              renderItem={(bid) => {
                const { item, index } = bid;

                return (
                  <NTitle title={item.name} key={index} subtitle={item.id}  />
                )}
              }
            />


            <View style={styles.placeBitButtonContainer}>
              <RectButton style={styles.placeBitButton} handlePress={() => navigation.navigate('Home')} text="Place a bid" />
            </View>
          </View>
        </SafeAreaView>
      );
};

export default HomeScreen;