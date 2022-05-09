import { View, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS, assets } from '../../constants'
import { CircleButton, SubInfo } from '../'

const NFTCard = ({ data }) => {
   const navigation = useNavigation()

   return (
      <View style={styles.container}>

         <View style={styles.inside}>
            <Image source={data.image} resizeMode={"cover"} style={styles.Bimg} />
         </View>

         <CircleButton style={{ top: 20, left: 20, backgroundColor: COLORS.white }} imgUrl={assets.heart} />

         <SubInfo data={data} />


      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
   },
   inside: {
      width: "100%",
      height: 250
   },
   Bimg: {
      width: "100%",
      height: "100%",
      borderTopLeftRadius: SIZES.font,
      borderTopRightRadius: SIZES.font,

   }
})

export default NFTCard