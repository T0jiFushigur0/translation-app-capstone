import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import HomeScreen from './Screens/HomeScreen'
import Spanish from './Screens/Spanish/Spanish'
import French from './Screens/French/French'
import BasicScreenS from './Screens/Spanish/BasicWordsS'
import BasicScreenS2  from './Screens/Spanish/BasicWordsS2'
import MediumScreenS from './Screens/Spanish/MediumWordsS'
import MediumScreenS2  from './Screens/Spanish/MediumWordsS2'
import HardScreenS from './Screens/Spanish/HardWordsS'
import HardScreenS2 from './Screens/Spanish/HardWordsS2'
import BasicScreenF from './Screens/French/BasicWordsF'
import BasicScreenF2  from './Screens/French/BasicWordsF2'
import MediumScreenF from './Screens/French/MediumWordsF'
import MediumScreenF2  from './Screens/French/MediumWordsF2'
import HardScreenF from './Screens/French/HardWordsF'
import HardScreenF2 from './Screens/French/HardWordsF2'
import BasicScreenJ from './Screens/Japanese/BasicWordsJ'
import BasicScreenJ2  from './Screens/Japanese/BasicWordsJ2'
import MediumScreenJ from './Screens/Japanese/MediumWordsJ'
import MediumScreenJ2  from './Screens/Japanese/MediumWordsJ2'
import HardScreenJ from './Screens/Japanese/HardWordsJ'
import HardScreenJ2 from './Screens/Japanese/HardWordsJ2'
import Japanese from './Screens/Japanese/Japanese'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
const Stack = createStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initalRouteName="Home" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={HomeScreen}/>
           <Stack.Screen name="Spanish" component={Spanish}/>
          <Stack.Screen name="BasicWordsS" component={BasicScreenS}/>
          <Stack.Screen name="BasicWordsS2" component={BasicScreenS2}/>
          <Stack.Screen name="MediumWordsS" component={MediumScreenS}/>
          <Stack.Screen name="MediumWordsS2" component={MediumScreenS2}/>
          <Stack.Screen name="HardWordsS" component={HardScreenS}/>
          <Stack.Screen name="HardWordsS2" component={HardScreenS2}/>
          <Stack.Screen name="French" component={French}/>
          <Stack.Screen name="BasicWordsF" component={BasicScreenF}/>
          <Stack.Screen name="BasicWordsF2" component={BasicScreenF2}/>
          <Stack.Screen name="MediumWordsF" component={MediumScreenF}/>
          <Stack.Screen name="MediumWordsF2" component={MediumScreenF2}/>
          <Stack.Screen name="HardWordsF" component={HardScreenF}/>
          <Stack.Screen name="HardWordsF2" component={HardScreenF2}/>
          <Stack.Screen name="Japanese" component={Japanese}/>
          <Stack.Screen name="BasicWordsJ" component={BasicScreenJ}/>
          <Stack.Screen name="BasicWordsJ2" component={BasicScreenJ2}/>
          <Stack.Screen name="MediumWordsJ" component={MediumScreenJ}/>
          <Stack.Screen name="MediumWordsJ2" component={MediumScreenJ2}/>
          <Stack.Screen name="HardWordsJ" component={HardScreenJ}/>
          <Stack.Screen name="HardWordsJ2" component={HardScreenJ2}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
