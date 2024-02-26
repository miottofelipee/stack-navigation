import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from './src/screens/Profile'
import Home from './src/screens/Home';
import Contact from './src/screens/Contact';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}
        options={{
          title: 'Tela Inicial',
          headerStyle:{
            backgroundColor: '#f4511e'
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'blod',
          },
          headerTitleAlign: 'center',
          //headerShown: false,
        }}
        />
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='Contact' component={Contact}/>
      </Stack.Navigator>
      <StatusBar style='auto'/>
    </NavigationContainer>
  );
};

