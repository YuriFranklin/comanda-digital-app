import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 18px;
  line-height: 28px;
  font-family: 'Inter-Regular';
`;

export const TextInput = styled.TextInput`
  padding: 12px 16px 12px 16px;
  background: #d3d3d3;
  border-radius: 12px;
  height: 56px;
  font-size: 18px;
  line-height: 28px;
  color: #3e4bfc;
  border: 1px solid #b3b4bb;
  font-family: 'Inter-Regular';
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
  font-family: 'Inter-Regular';
`;
