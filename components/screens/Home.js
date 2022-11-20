/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import { Button, Text, View, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NFTData } from '../../constants/dummy';
import NFTCard from '../NFTCard';
import HomeHeader from '../HomeHeader';
import { COLORS } from '../../constants/theme';

function HomeScreen(props) {
  useEffect(() => {
    setallNfts(NFTData)
  }, [])
  
  const [allNfts, setallNfts] = useState([])

    
  const searchInputChange = (text) => {
    if (!text.length) {return setallNfts(NFTData)}

    const filteredNfts = NFTData.filter(nft => nft.name.toLowerCase().includes(text.toLowerCase()))

    if (filteredNfts.length) {
      setallNfts(filteredNfts)
    } else {
      setallNfts(NFTData)
    }

  }
  
  return (
    <SafeAreaView>
      <View>
        <FlatList 
          data={allNfts} 
          keyExtractor={( {id} ) => id} 
          renderItem={({ item, index }) => {
            return <NFTCard item={item} key={index} />
          }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeHeader onSearchInputChange={searchInputChange} />}
        />
      </View>
      <View style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
      }}>
        
        <View style={{ height: 300, backgroundColor: COLORS.primary }}></View>
        <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;