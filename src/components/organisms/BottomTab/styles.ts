import styled from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 20,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 20,
})`
  flex-direction: row;
  width: 100%;
  height: 60px;
`;

export const Shadow = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: -20,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 20,
})`
  height: 60px;
  width: 100%;
  position: absolute;
  background-color: #fff;
  bottom: 0px;
`;

export const TabButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
`;

interface Props {
  isFocused: boolean;
}

export const Title = styled.Text<Props>`
  font-size: ${({isFocused}) => (isFocused ? '12px' : '10px')};
  line-height: ${({isFocused}) => (isFocused ? '16px' : '12px')};
  font-family: 'Inter-Regular';
  color: ${({isFocused}) => (isFocused ? '#3e4bfc' : '#51525e')};
`;

interface IconProps extends Props {
  name: string;
}

export const Icon = styled(MaterialIcon).attrs(
  ({isFocused, name}: IconProps) => ({
    size: isFocused ? 30 : 28,
    name: name,
    color: isFocused ? '#3e4bfc' : '#51525e',
  }),
)<IconProps>``;

export const AddButtonContainer = styled.View`
  position: absolute;
  background-color: rgba(62, 75, 252, 0.1);
  border-radius: 40px;
  top: -20px;
  padding: 6px;
`;
