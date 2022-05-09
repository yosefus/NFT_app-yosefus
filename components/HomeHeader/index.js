import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import { assets, COLORS, SIZES } from '../../constants'

const HomeHeader = ({ setSearch }) => {

   return (
      <View style={styles.container}>

         <View style={styles.innerView}>

            <Image
               source={assets.logo}
               resizeMode="contain"
               style={{ width: 90, height: 25 }}
            />

            <View style={styles.innerView2}>
               <Image
                  source={assets.person01}
                  resizeMode="contain"
                  style={{ width: "100%", height: "100%" }}
               />
               <Image
                  source={assets.badge}
                  resizeMode="contain"
                  style={{ width: 15, height: 15, position: "absolute", bottom: 0, left: 0 }}
               />
            </View>

         </View>

         <View style={styles.textContainer}>
            <Text style={styles.text}>welcome back, adele 👋 </Text>
            <Text style={styles.text2}>what are we gonna find today? </Text>
         </View>

         <View style={{ marginTop: SIZES.font }}>
            <View style={styles.searchContainer}>
               <Image source={assets.search} resizeMode="contain" style={{ width: 20, height: 20 }} />
               <TextInput
                  placeholder='search your NFT...'
                  placeholderTextColor={COLORS.gray}
                  style={{ flex: 1, marginRight: 15, color: COLORS.white, fontSize: SIZES.large }}
                  onChangeText={(text) => setSearch(text)}
               />
            </View>
         </View>

      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: COLORS.primary,
      padding: SIZES.font
   },
   innerView: {
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      alignItems: "center"
   },
   innerView2: {
      width: 45,
      height: 45
   },
   text: {
      fontSize: SIZES.small,
      color: COLORS.white
   },
   text2: {
      marginTop: SIZES.font / 2,
      fontSize: SIZES.large,
      color: COLORS.white,
      fontWeight: "bold"
   },
   textContainer: {
      marginVertical: SIZES.font,
      justifyContent: "flex-end",
      flexDirection: "column",
      alignItems: "flex-end"
   },
   searchContainer: {
      width: "100%",
      borderRadius: SIZES.extraLarge,
      flexDirection: "row-reverse",
      borderColor: COLORS.white,
      padding: 10,
      borderWidth: 2,
      alignItems: "center",
   }
})

export default HomeHeader