import React from 'react';
import {View, Text} from 'react-native';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

// import { Container } from './styles';

const LoginForm: React.FC = () => {
  return (
    <View className="flex-col gap-2">
      <Text>ENTRAR NO APP</Text>
      <Input />
      <Input />
      <Button />
    </View>
  );
};

export default LoginForm;
