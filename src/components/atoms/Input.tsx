import React from 'react';
import {Controller, ControllerProps} from 'react-hook-form';
import {TextInput, TextInputProps, Text} from 'react-native';

interface InputProps extends TextInputProps {
  controllerProps: ControllerProps;
  errors?: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  controllerProps,
  errors,
  label,
  ...rest
}) => {
  return (
    <>
      {label && <Text>{label}</Text>}
      <Controller
        {...controllerProps}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            className="w-full py-2 px-16"
            onBlur={onBlur}
            value={value}
            onChange={onChange}
            {...rest}
          />
        )}
      />
      {errors && <Text>{errors}</Text>}
    </>
  );
};

export default Input;
