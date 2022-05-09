import React, { useState } from 'react'
import { View, SafeAreaView, FlatList, StyleSheet, Text } from 'react-native'

import { COLORS, NFTData, SHADOWS, SIZES } from "../constants"
import { FocusedBar, HomeHeader, NFTCard } from "../components"

export const Home = () => {
   const [Search, setSearch] = useState("")

   const filteredList = NFTData.filter(n => n.name.toLowerCase().includes(Search.toLowerCase()))

   return (
      <SafeAreaView style={styles.safeArea}>
         <FocusedBar background={COLORS.primary} />

         <View style={styles.container}>
            <View style={styles.main}>

               <FlatList
                  data={filteredList}
                  renderItem={({ item }) => <NFTCard data={item} />}
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false}
                  ListHeaderComponent={<HomeHeader setSearch={setSearch} />}
                  ListEmptyComponent={<NotFound />}
               />

            </View>
         </View>

         <View style={styles.secondC}>
            <View style={{ height: 300, backgroundColor: COLORS.primary }} />
            <View style={{ flex: 1, backgroundColor: COLORS.white }} />
         </View>

      </SafeAreaView>
   )
}

const NotFound = () =>
   <View style={{ width: "100%", padding: 20, backgroundColor: COLORS.white, ...SHADOWS.dark }}>
      <Text style={{ textAlign: "center", lineHeight: SIZES.extraLarge }}>
         Sorry! {'\n'}
         We Can't Found Any NFT With That Name... 🤔</Text>
   </View>

const styles = StyleSheet.create({
   safeArea: {
      flex: 1,
   },
   container: {
      flex: 1,
   },
   main: {
      zIndex: 0,
   },
   secondC: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: -1,
   }
})