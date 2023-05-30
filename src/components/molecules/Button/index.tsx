import React from 'react';
import {ButtonProps as RNButtonProps, ActivityIndicator} from 'react-native';
import {Button as RNButton, Text} from './styles';

interface Test extends React.Component<RNButtonProps> {
  title: string;
  isLoading?: boolean;
}

const Button: React.FC<Test> = ({title, isLoading, ...rest}: Test) => {
  return (
    <RNButton {...rest}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#ffffff" />
      ) : (
        <Text style={{}}>{title}</Text>
      )}
    </RNButton>
  );
};

export default Button;
