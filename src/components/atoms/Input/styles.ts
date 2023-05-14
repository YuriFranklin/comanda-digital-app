import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 18px;
  line-height: 28px;
`;

export const TextInput = styled.TextInput`
  padding: 12px 16px 12px 16px;
  background: #d3d3d3;
  border-radius: 12px;
  font-size: 18px;
  line-height: 28px;
  color: #3e4bfc;
  border: 1px solid #b3b4bb;

  ${({isFocused, isErrored}: {isFocused: boolean; isErrored: boolean}) => {
    if (isFocused) {
      return 'border: 1px solid #3e4bfc';
    }
    if (isErrored) {
      return 'border: 1px solid #fc4141';
    }
  }}
`;

export const Error = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #fc4141;
`;
