import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../../constants'
import { TextButton } from '../Button'

const SubInfo = ({ data, screen }) => {
   const navigation = useNavigation()

   return (
      <>
         <View style={stylesSub.container}>
            <People />
            <EndDate />
         </View>

         {screen != "details" &&
            <>
               <NFTtitle
                  title={data.name}
                  subTitle={data.creator}
               />

               <View style={stylesSub.secContainer}>
                  <EthPrice price={data.price} />
                  <TextButton
                     handlePress={() => navigation.navigate("Details", { data })}
                     text="Place a bid"
                     style={{ minWidth: 120 }}
                     textStyle={{ color: COLORS.white }}
                  />
               </View>
            </>
         }
      </>
   )
}

const stylesSub = StyleSheet.create({
   container: {
      width: "100%",
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.extraLarge,
      flexDirection: "row-reverse",
      // flexDirection: "row",
      justifyContent: "space-between",
   },
   secContainer: {
      width: "100%",
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.base,
      marginBottom: SIZES.font,
      flexDirection: "row-reverse",
      // flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
   }
})

export const NFTtitle = ({ title, subTitle, Tstyle, STstile }) => {
   return (
      <View style={{ padding: 20, flexDirection: 'column', alignItems: "flex-end", width: "100%" }}>
         <Text style={{ fontSize: SIZES.large, fontWeight: "bold", color: COLORS.primary, ...Tstyle }}>{title}</Text>
         <Text style={{ fontSize: SIZES.small, color: COLORS.primary, ...STstile }}>{subTitle}</Text>
      </View>
   )
}
export const EthPrice = ({ price }) => {
   return (
      <View style={{ flexDirection: "row-reverse", alignItems: "center" }}>
         <Image source={assets.eth} resizeMode="contain" style={{ width: 20, height: 20, marginRight: 2 }} />
         <Text>{price}</Text>
      </View>
   )
}
export const ImgPpl = ({ urlImg, index }) => {
   return (
      <Image
         source={urlImg}
         resizeMode="contain"
         style={{ width: 48, height: 48, marginLeft: !index ? 0 : -SIZES.font }}
      />
   )
}

export const People = () => {
   const pplArr = [assets.person02, assets.person03, assets.person04]
   return (
      <View style={{ flexDirection: "row" }}>
         {pplArr.map((urlImg, i) =>
            <ImgPpl urlImg={urlImg} index={i} key={`ppl-${i}`} />
         )}
      </View>
   )
}

export const EndDate = () => {
   return (
      <View style={EndDateSub.container}>
         <Text style={EndDateSub.fText}>EndDate</Text>
         <Text style={EndDateSub.sText}>23h 02m</Text>
      </View>
   )
}
const EndDateSub = StyleSheet.create({
   container: {
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.base,
      backgroundColor: COLORS.white,
      justifyContent: "center",
      alignItems: "center",
      ...SHADOWS.light,
      maxWidth: "50%"
   },
   fText: {
      // fontFamily: FONTS.regular,
      fontSize: SIZES.small,
      color: COLORS.primary,
   },
   sText: {
      // fontFamily: FONTS.semiBold,
      fontSize: SIZES.medium,
      color: COLORS.primary,
      fontWeight: "bold"
   }
})



export default SubInfo
