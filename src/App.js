import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ErrorScreen from './screens/error';
import RealtimeDatabase from './screens/realtime-database';
import Auth from './screens/auth';
import Analitycs from './screens/analitycs';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Analitycs" component={Analitycs} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="RealtimeDatabase" component={RealtimeDatabase} />
        <Stack.Screen name="Error" component={ErrorScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
