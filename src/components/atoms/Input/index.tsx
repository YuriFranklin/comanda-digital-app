import React, {useState} from 'react';
import {Controller, ControllerProps} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {TextInput, Container, Error, Label} from './styles';

interface InputProps extends TextInputProps {
  controllerProps: Omit<ControllerProps<any>, 'render'>;
  errors?: string;
  label?: string | undefined;
}

const Input: React.FC<InputProps> = ({
  controllerProps,
  errors,
  label,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Controller
        {...controllerProps}
        defaultValue={controllerProps.defaultValue || ''}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            isFocused={isFocused}
            isErrored={!!errors}
            selectionColor={'#3E4BFC'}
            onFocus={() => setIsFocused(true)}
            className="w-full h-auto py-2 px-4 bg-gray-200 text-lg"
            onBlur={(e: any) => {
              //@ts-ignore
              onBlur(e);
              setIsFocused(false);
            }}
            value={value}
            onChangeText={onChange}
            {...rest}
          />
        )}
      />
      {errors && <Error>{errors}</Error>}
    </Container>
  );
};

export default Input;
