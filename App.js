import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
// import { useFonts, loadAsync } from 'expo-font'
import { Home } from './screens/Home';
import { Details } from './screens/Details';
// import { useEffect, useState } from 'react';



const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {
  // const [FontLoaded, setFontLoaded] = useState(false)

  // useEffect(() => {
  //   (
  //     async () => {
  //       const r = await loadAsync({
  //         InterBold: require("./assets/fonts/Inter-Bold.ttf"),
  //         InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  //         InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
  //         "InterRegular": require("./assets/fonts/Inter-Regular.ttf"),
  //         InterLight: require("./assets/fonts/Inter-Light.ttf"),
  //       })
  //       console.log(r)
  //     })

  // }, [])

  // const [loaded] = useFonts({
  // InterBold: require("./assets/fonts/Inter-Bold.ttf"),
  // InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  // InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
  // InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
  // InterLight: require("./assets/fonts/Inter-Light.ttf"),
  // })

  // if (!loaded) return null

  // if (!FontLoaded) return null

  return (<>
    {/* <Text>{JSON.stringify(FontLoaded)}</Text> */}
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
  );
}

export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     color: "#fff",
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: "#262626",
//   }
// });
