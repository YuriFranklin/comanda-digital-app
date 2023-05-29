/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import LoginForm from '../../components/organisms/forms/LoginForm';
import {Container, FormContainer, LogoContainer, Text} from './styles';
import Logo from '../../../assets/logo_120px.svg';
import useKeyboard from '../../hooks/useKeyboard';

const SignIn: React.FC = () => {
  const isKeyboardOpen = useKeyboard();

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          {!isKeyboardOpen && (
            <LogoContainer>
              <Logo
                height={120}
                style={{
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,
                  elevation: 8,
                }}
              />
              <Text>ComandaDigital</Text>
            </LogoContainer>
          )}
          <FormContainer>
            <LoginForm />
          </FormContainer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
