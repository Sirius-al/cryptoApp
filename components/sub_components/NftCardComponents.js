/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */


import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import assets from '../../constants/assets'
import { FONTS, COLORS, SHADOWS, SIZES } from '../../constants/theme'

export const NTitle = ({ title, subtitle, titleSize, subtitleSize, style }) => {
  return (
    <View style={{ ...(style ? style : {}) }}>
      <Text style={{ 
        color: COLORS.primary,
        fontSize: titleSize ? titleSize : SIZES.large,
        fontFamily: FONTS.semiBold,
        fontWeight: 'bold',
      }}
      >
        {title}
      </Text>
      <Text style={{ 
        color: COLORS.primary,
        fontSize: subtitleSize ? subtitleSize : SIZES.small,
        fontFamily: FONTS.regular,
        fontWeight: '400',

       }}
      >
        {subtitle}
      </Text>
    </View>
  )
}

export const NPrice = ({ price, Btn, btnTxt, handlePress, ...props }) => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Image source={assets.eth} style={{ height: 25, width: 20 }} />
        <Text style={{ fontSize: SIZES.font, fontWeight: '600' }} >{price}</Text>
      </View>
      {Btn ? <Btn text={btnTxt ? btnTxt : null} handlePress={handlePress} /> : null}
    </View>
  )
}

export const NPeople = (people = []) => {
  const peoples = people.length 
        ? people 
        : [assets.person01, assets.person02, assets.person03, assets.person04];

  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>

      {peoples.map((imgUrl, ind) => {
        return <Image source={imgUrl} key={ind} resizeMode="contain"
          style={{ height: 40, width: 40, marginLeft: ind === 0 ? 0 : -SIZES.font }} 
        />
      })}
    </View>
  )
}

export const EndDate = ({date, ...props}) => {
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.base,
      maxWidth: '50%',
      backgroundColor: COLORS.white,
      ...SHADOWS.light,
    }}
    >
      <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.primary }} >
        Ending in:
      </Text>
      <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, color: COLORS.primary }} >
        {date ? date.toString() : "10 hrs 40 min"}
      </Text>
    </View>
  )
}
