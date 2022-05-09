import { View, Text, Image, StyleSheet } from 'react-native'
import { assets, COLORS, SIZES } from '../../constants'
import { EthPrice } from '../SubInfo'

const DetailsBid = ({ bid }) => {

   return (
      <View style={styles.container}>

         <Image source={bid.image} resizeMode="contain" style={{ width: 48, height: 48 }} />

         <View style={{ overflow: "hidden" }}>
            <Text style={{ fontSize: SIZES.small, color: COLORS.primary, fontWeight: "bold", textAlign: "right" }} >
               Bid Placed By {bid.name}
            </Text>
            <Text style={{ fontSize: SIZES.small - 1, color: COLORS.secondary, marginTop: 3 }} >
               Placed at {bid.date}
            </Text>
         </View>

         <EthPrice price={bid.price} />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.font,
      width: "100%",
      flexDirection: "row-reverse",
      alignItems: "center",
      justifyContent: "space-between"
   },

})

export default DetailsBid