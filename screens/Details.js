import React from 'react'
import { Text, View, SafeAreaView, Image, StatusBar, FlatList, StyleSheet } from "react-native"
import { assets, COLORS, SHADOWS, SIZES } from '../constants'
import { CircleButton, FocusedBar, SubInfo, TextButton, DetailsBid, DetailsDesc } from '../components'

export const Details = ({ route, navigation }) => {
   const { data } = route.params

   return (
      <SafeAreaView style={styles.container}>
         <FocusedBar barStyle='dark-content' backgroundColor="transparent" translucent={true} />

         <View style={styles.btnContainer}>
            <TextButton
               handlePress={() => { }}
               text="place a bid"
               style={{ minWidth: 170, ...SHADOWS.dark }}
               textStyle={{ fontSize: SIZES.font, color: COLORS.white }}
            />
         </View>

         <FlatList
            data={data.bids}
            renderItem={({ item }) => <DetailsBid bid={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
            ListHeaderComponent={() =>
               <>
                  <DetailsHeader data={data} navigation={navigation} />
                  <SubInfo data={data} screen={"details"} />
                  <View style={{ padding: SIZES.font }}>
                     <DetailsDesc data={data} />
                  </View>

                  {data.bids.length &&
                     <Text
                        style={{
                           textAlign: "right",
                           fontSize: SIZES.large,
                           color: COLORS.primary,
                           fontWeight: "bold",
                           marginRight: 15
                        }}>
                        Current Bids:
                     </Text>}
               </>
            }
         />

      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   btnContainer: {
      width: "100%",
      position: "absolute",
      bottom: 0,
      paddingVertical: SIZES.font,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(255,255, 255, 0.5)",
      zIndex: 1
   }
})

const DetailsHeader = ({ data, navigation }) =>
   <View style={{ width: "100%", height: 373 }}>

      <Image
         source={data.image}
         resizeMode="cover"
         style={{ width: "100%", height: "100%" }}
      />

      <CircleButton
         style={{ backgroundColor: COLORS.white, top: StatusBar.currentHeight + 10, right: 15 }}
         imgUrl={assets.left}
         handlePress={() => navigation.goBack()}
      />

      <CircleButton
         style={{ backgroundColor: COLORS.white, top: StatusBar.currentHeight + 10, left: 15 }}
         imgUrl={assets.heart}
         handlePress={() => { }}
      />
   </View>

