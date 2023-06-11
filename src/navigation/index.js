import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ChatScreen from '../screens/ChatScreen'
import ChatsScreen from '../screens/ChatsScreen'
import MainTabNavigator from './MainTabNavigator'
import ContactScreen from '../screens/ContactScreen'
import { Image } from 'react-native'
// import {useRoute} from '@react-navigation/native';

const Stack= createNativeStackNavigator();

const Navigator = () => {
  return (    
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{headerStyle: {backgroundColor: "whitesmoke"}}}
        >
        <Stack.Screen
          name="Home"
          component={MainTabNavigator}
          options={{headerShown: false}}
        />
         
         <Stack.Screen name='Chat' component={ChatScreen} options={{headerShown: false}}
              //  options={{
              //   headerLeft: () => (
              //     <Image
              //       style={{ width: 30, height: 30, margin: 20 }}
              //       source={{uri: }}
              //     />
              //   ),
              // }}
         />

         <Stack.Screen name='Contacts' component={ContactScreen}/>

        </Stack.Navigator>
        
      </NavigationContainer>
    
  )
}

export default Navigator