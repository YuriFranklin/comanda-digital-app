import styled from 'styled-components/native';
import {ButtonProps} from 'react-native';

export const Button = styled.TouchableOpacity.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
})<ButtonProps>`
  elevation: 5;
  background: #3e4bfc;
  border-radius: 12px;
  width: 100%;
  padding: 14px 16px 14px 16px;
  justify-items: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 18px;
  line-height: 22px;
  font-family: 'Nunito';
  font-weight: 700;
  letter-spacing: 4px;
  color: #ffffff;
  line-height: 28px;
`;
