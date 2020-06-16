// import { createAppContainer } from 'react-navigation';
import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import logo from './assets/instagram.png';

import Feed from './pages/Feed';

function LogoTitle() {
  return (
    <Image
      style={{ alignSelf:'center' }}
      source={logo}
    />
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f5f5f5',
          },
          headerTitle: props => <LogoTitle {...props} />,
        }}
      >
        <Stack.Screen 
          name="Feed"  
          component={Feed} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;