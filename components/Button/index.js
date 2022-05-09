import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, SIZES } from '../../constants'

export const CircleButton = ({ Bsize = 40, Isize = 24, style, handlePress, imgUrl }) => {
   return (
      <TouchableOpacity
         style={{ width: Bsize, height: Bsize, ...styles.cb, ...style }}
         onPress={handlePress}
      >
         <Image resizeMode='contain' style={{ width: Isize, height: Isize }} source={imgUrl} />
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   cb: {
      position: "absolute",
      borderRadius: SIZES.extraLarge,
      alignItems: "center",
      justifyContent: "center",
      ...SHADOWS.light
   }
})

export const TextButton = ({ Bsize = 40, style, handlePress, text, textStyle }) => {
   return (
      <TouchableOpacity
         style={{ width: Bsize, height: Bsize, ...SecButtonstyles.cb, ...style }}
         onPress={handlePress}
      >
         <Text style={{ ...textStyle, textAlign: "center" }}>{text}</Text>
      </TouchableOpacity>
   )
}

const SecButtonstyles = StyleSheet.create({
   cb: {
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.extraLarge,
      padding: SIZES.small,
      minHeight: 45,
      alignItems: "center",
      justifyContent: "center",
   }
})

