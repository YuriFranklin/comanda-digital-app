import React from 'react';
import LoginForm from '../../components/forms/LoginForm';
import {Container, FormContainer} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </Container>
  );
};

export default SignIn;
