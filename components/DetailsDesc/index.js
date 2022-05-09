import { useState } from 'react'
import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import { assets, COLORS, SIZES } from '../../constants'
import { EthPrice, NFTtitle } from '../SubInfo'

const DetailsDesc = ({ data }) => {
   const [ReadMore, setReadMore] = useState(false)

   const Desc = ReadMore ? data.description : data.description.slice(0, 100) + "..."

   return (
      <>
         <View style={styles.container}>
            <NFTtitle
               title={data.name}
               subTitle={data.creator}
               Tstyle={{ fontSize: SIZES.extraLarge }}
               STstile={{ fontSize: SIZES.font }}
            />
            <EthPrice price={data.price} />
         </View>

         <View style={styles.DescContainer}>
            <Text
               style={{ textAlign: "right", fontSize: SIZES.large, color: COLORS.primary, fontWeight: "bold", marginBottom: SIZES.font }}
            >
               Description
            </Text>

            <Text
               style={{ textAlign: "right", fontSize: SIZES.small, color: COLORS.secondary, lineHeight: SIZES.large }}>
               {Desc}
               <Text
                  onPress={() => setReadMore(!ReadMore)}
                  style={{ fontWeight: "bold", color: COLORS.primary }}
               >
                  {ReadMore ? " Show Less" : " Read More"}
               </Text>
            </Text>
         </View>
      </>
   )
}

const styles = StyleSheet.create({
   container: {
      width: "100%",
      flexDirection: "row-reverse",
      justifyContent: "space-around",
      alignItems: "center",
      paddingHorizontal: 10
   },
   DescContainer: {
      marginVertical: SIZES.extraLarge,
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-end",
   }

})

export default DetailsDesc