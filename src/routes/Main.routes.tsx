import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bills from '../screens/Bills';

const Stack = createNativeStackNavigator();

const MainRoutes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Bills" component={Bills} />
    </Stack.Navigator>
  );
};

export default MainRoutes;
