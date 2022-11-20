/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */


import React, { useState } from 'react';
import { Dimensions, Button, Text, ScrollView, View, SafeAreaView, FlatList, SafeAreaViewComponent, Image, StatusBar } from 'react-native';
import { CircularButton, RectButton } from '../Buttons';
import { NTitle, NPrice, NPeople, EndDate } from '../sub_components/NftCardComponents';
import { FONTS, SIZES, COLORS } from '../../constants/theme';
import assets from '../../constants/assets';
// import Icon from 'react-native-vector-icons/MaterialIcons';


function HomeScreen({ route, navigation }) {
  const { item } = route.params;

  // console.log(item);

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
      height: Dimensions.get('window').height - 25,
      overflowX: 'scroll',
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
      marginBottom: 3,
    },
    placeBitButton: {
      width: 150,
    },
    curcularButton1: { 
      position: 'absolute', 
      top: (StatusBar.currentHeight), 
      left: '3%',
    },
    curcularButton2:{ 
      position: 'absolute', 
      top: (StatusBar.currentHeight), 
      right: '3%',
    },
    detailsBody: { 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      marginTop: -25,
      paddingHorizontal: 10,
    },
    detailsHeader: { 
      width: '100%', 
      height: 300,
    },
    detailsDescMain: {
      paddingHorizontal: 10,
    }, 
    detailsDesc: { 
      paddingTop: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    detailsLabel: {
      paddingTop: 30,
      fontSize: SIZES.medium,
      fontWeight: 'bold',
      fontFamily: FONTS.semiBold,
      color: COLORS.primary,
    },
    detailsPara: {
      marginTop: 10,
      fontSize: SIZES.small,
      fontFamily: FONTS.regular,
      color: COLORS.secondary,
      lineHeight: 25,
    },
    currentBid: {
      paddingVertical: 20,
      fontSize: SIZES.medium,
      fontWeight: 'bold',
      fontFamily: FONTS.semiBold,
      color: COLORS.primary,
    },
    bidBlockMain: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 5, paddingHorizontal: 5 },
    bidBlockImage: { height: SIZES.extraLarge * 2, width: SIZES.extraLarge * 2 },
    bidBlockSection1: { marginLeft: 30, marginRight: 'auto' },
    bidBlockp1: { fontSize: SIZES.medium, fontFamily: FONTS.semiBold, color: COLORS.primary, },
    bidBlockp2: { fontSize: SIZES.small, fontFamily: FONTS.medium, color: COLORS.secondary, marginTop: SIZES.font - 10 },
  }

  function DetailsHeader({ bid }) {

    return (
      <View>
        <Image
          source={item.image}
          resizeMode={'cover'}
          style={styles.detailsHeader}
        />

        <CircularButton imgUrl={assets.left} style={styles.curcularButton1} handlePress={() => navigation.goBack()} />
        <CircularButton imgUrl={assets.heart} style={styles.curcularButton2} />
      </View>
    )
  }

  function DetailsBody(props) {

    return (
      <View
        style={styles.detailsBody}
      >
        <NPeople people={() => item.bids.map((bid) => bid.image)} />
        <EndDate />
      </View>
    )
  }

  function DetailsDesc(props) {

    const [readMore, setreadMore] = useState(false)

    return (
      <View style={styles.detailsDescMain}>
        
        <View
          style={styles.detailsDesc}
        >
          <NTitle title={item.name} subtitle={item.creator} titleSize={SIZES.extraLarge} subtitleSize={SIZES.medium} />
          <NPrice price={item.price} />
        </View>

        <View>
          <Text style={styles.detailsLabel}>Description</Text>
            <Text style={styles.detailsPara}>
              {readMore ? item.description : item.description.slice(0, 150)}
              <Text style={{ fontWeight: 'bold' }} 
                onPress={() => setreadMore( (readMore) => !readMore )}>
                  {readMore ? ' Show less' : ' Read more'}
                </Text>
            </Text>
        </View>

        <View>
          <Text style={styles.currentBid} >Current bids</Text>
          {item.bids.length ? 
            item.bids.map((bid, i) => <BidBlock key={i} bid={bid} />)
            : 
            null
          }
        </View>
      </View>
    )
  }

  function BidBlock ({bid}) {

    return (
      <View style={styles.bidBlockMain} >
        <Image source={bid.image} style={styles.bidBlockImage} />

        <View style={styles.bidBlockSection1}>
          <Text style={styles.bidBlockp1} >{bid.name}</Text>
          <Text style={styles.bidBlockp2} >{bid.date}</Text>
        </View>

        <NPrice price={bid.price} />
      </View>
    )
  }



  //!  ****************** main Component return statement ******************  main Component return statement 
  //*  ****************** main Component return statement ******************  main Component return statement 
  //?  ****************** main Component return statement ******************  main Component return statement 
  //*  ****************** main Component return statement ******************  main Component return statement 
  //!  ****************** main Component return statement ******************  main Component return statement 
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.innerSection1}>
        <ScrollView showsVerticalScrollIndicator={false} scrollBehavior={'smooth'} >
          <DetailsHeader />
          <DetailsBody />
          <DetailsDesc />
        </ScrollView>
        <View style={styles.placeBitButtonContainer}>
          <RectButton style={styles.placeBitButton} handlePress={() => { }} text="Place Bid" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;