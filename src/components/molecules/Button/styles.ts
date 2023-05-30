import styled from 'styled-components/native';
import {ButtonProps} from 'react-native';

export const Button = styled.TouchableOpacity.attrs({
  shadowColor: '#3e4bfc',
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 0.58,
  shadowRadius: 10.0,
  elevation: 30,
})<ButtonProps>`
  background: #3e4bfc;
  border-radius: 12px;
  width: 100%;
  padding: 14px 16px 14px 16px;
  justify-items: center;
  align-items: center;
  height: 56px;
`;

export const Text = styled.Text`
  font-size: 18px;
  line-height: 22px;
  font-family: 'Inter-SemiBold';
  letter-spacing: 4px;
  color: #ffffff;
  line-height: 28px;
`;
