import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/molecules/Button';

// import { Container } from './styles';

const Bills: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#F2F3F7',
      }}>
      <Text>Lorem Ipsum</Text>
      <Button title="Sit amet" />
    </View>
  );
};

export default Bills;
