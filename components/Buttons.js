/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS } from '../constants/theme';

export const CircularButton = ({imgUrl, style, handlePress, ...props}) => {
    
  return (
    <TouchableOpacity  {...props}
    style={{ 
        height: 30, 
        width: 30, 
        borderRadius: 10, 
        backgroundColor: COLORS.white, 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ...(style ? style : {}),
        ...SHADOWS.light,
      }}
      onPress={handlePress ? handlePress : () => null }
    >
        
        <Image source={imgUrl} resizeMode="contain" style={{ width: 25, height: 25 }} />

    </TouchableOpacity>
  )
}

export const RectButton = ({text, style, handlePress, ...props}) => {
    
  return (
    <TouchableOpacity  {...props}
    style={{ 
        height: 35, 
        maxWidth: 120,
        borderRadius: 50, 
        backgroundColor: COLORS.primary, 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ...(style ? style : {}),
        ...SHADOWS.light,
      }}
      onPress={handlePress ? handlePress : () => null }
    >
        
        <Text style={{ color: COLORS.white }}>{text ? text : 'Buy'}</Text>

    </TouchableOpacity>
  )
}
