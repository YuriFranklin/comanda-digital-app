import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container} from './styles';

interface CircleButtonProps {
  iconName: string;
  size: number;
  onPress(): void;
}

const CircleButton: React.FC<CircleButtonProps> = ({
  iconName,
  size,
  onPress,
  ...rest
}) => (
  <Container onPress={() => onPress()} size={size} {...rest}>
    <Icon name={iconName} size={size * 0.7} color="#FFF" />
  </Container>
);

export default CircleButton;
