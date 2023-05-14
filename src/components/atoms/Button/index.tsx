import React from 'react';
import {ButtonProps as RNButtonProps} from 'react-native';
import {Button as RNButton, Text} from './styles';

interface Test extends React.Component<RNButtonProps> {
  title: string;
}

const Button: React.FC<Test> = ({title, ...rest}: Test) => {
  return (
    <RNButton
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        shadowColor: '#3e4bfc',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.58,
        shadowRadius: 10.0,
        elevation: 30,
      }}
      {...rest}>
      <Text style={{}}>{title}</Text>
    </RNButton>
  );
};

export default Button;
