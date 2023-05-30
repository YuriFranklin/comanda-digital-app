import styled from 'styled-components/native';
import {animated} from '@react-spring/native';

export const Container = styled(animated.View).attrs({
  left: 0,
  right: 0,
  position: 'absolute',
})`
  bottom: 0px;
  padding: 16px;
  overflow: hidden;
  z-index: 50;
`;
