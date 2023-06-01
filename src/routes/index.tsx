import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoutes from './Auth.routes';
import useAuth from '../hooks/useAuth';
import MainRoutes from './Main.routes';

const Routes: React.FC = () => {
  const {isSigned} = useAuth();

  useEffect(() => {
    console.log(isSigned);
  }, [isSigned]);

  return (
    <NavigationContainer>
      {isSigned ? <MainRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
