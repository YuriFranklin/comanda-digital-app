import React from 'react';
import Bills from '../screens/Bills';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTab from '../components/organisms/BottomTab';

const Tab = createBottomTabNavigator();

const MainRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={BottomTab}>
      <Tab.Screen
        name="bills"
        component={Bills}
        options={{
          title: 'Contas',
          type: 'add',
          iconName: 'content-paste',
          onAdd: () => console.log('a'),
        }}
      />
      <Tab.Screen
        name="pendencies"
        component={Bills}
        options={{
          title: 'Pendências',
          type: 'add',
          iconName: 'payments',
        }}
      />
      <Tab.Screen
        name="history"
        component={Bills}
        options={{
          title: 'Histórico',
          iconName: 'description',
        }}
      />
      <Tab.Screen
        name="more"
        component={Bills}
        options={{
          title: 'Mais',
          iconName: 'menu',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainRoutes;
