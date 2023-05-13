import React from 'react';
import {TouchableOpacity, ButtonProps as RNButtonProps} from 'react-native';

interface ButtonProps extends RNButtonProps {}

const Button: React.FC<ButtonProps> = () => {
  return <TouchableOpacity />;
};

export default Button;
