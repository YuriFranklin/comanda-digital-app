import styled from 'styled-components/native';
import {animated} from '@react-spring/native';

export const Container = styled(animated.View).attrs({
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
})`
  padding-left: 16px;
  background-color: #9f35f7;
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const Text = styled.Text`
  color: #fafbfd;
  font-size: 16px;
  line-height: 24px;
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;
