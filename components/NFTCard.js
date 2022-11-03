/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import React from 'react'
import { Button, Text, View, SafeAreaView, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SHADOWS, FONTS, SIZES } from '../constants/theme';
import assets from '../constants/assets';
import { CircularButton, RectButton } from './Buttons';
import { NPeople, NTitle, EndDate, NPrice } from './sub_components/NftCardComponents';

const NFTCard = (props) => {
    
 const { item } = props;
 const navigation = useNavigation();


 return (
    <View 
        style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font,
            marginBottom: SIZES.extraLarge,
            margin: SIZES.base,
            ...SHADOWS.dark,
        }}
    >
        <View style={{ width: '100%', height: 320, position: 'relative'}}>
            <Image 
                source={item.image} 
                resizeMode={'cover'} 
                style={{ 
                    left: 0,
                    width: '100%',
                    height: '65%',
                    // borderRadius: SIZES.font,
                    borderTopLeftRadius: SIZES.font, 
                    borderTopRightRadius: SIZES.font,
                }}
            />
            <CircularButton imgUrl={assets.heart} style={{ position: 'absolute', right: 5, top: 5 }} />
            <View 
                accessibilityLabel='card info'
                // style={{ position: 'absolute', top: 40, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column' }}
                style={{  bottom: 0, display: 'flex', flexDirection: 'column', marginHorizontal: 10 }}
            >
                <View 
                    accessibilityLabel='card section bottom'
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: -25 }}
                >
                    <NPeople />
                    <EndDate />
                </View>
                <NTitle title={item.name} subtitle={item.creator} />
                <NPrice price={item.price} Btn={RectButton} btnTxt={'Place a bid'} handlePress={() => navigation.navigate('Details', { item }) } />
            </View>
        </View>
    </View>
 )
}

export default NFTCard;