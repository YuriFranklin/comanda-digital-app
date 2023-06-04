import styled from 'styled-components/native';

interface ContainerProps {
  size: number;
}

export const Container = styled.TouchableOpacity.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 10,
})<ContainerProps>`
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  border-radius: ${props => `${props.size / 2}px`};
  background-color: #3e4bfc;
  align-items: center;
  justify-content: center;
`;
