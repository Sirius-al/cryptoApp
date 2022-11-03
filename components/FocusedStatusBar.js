/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import React from 'react'
import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core';


const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();
  
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
}

export default FocusedStatusBar