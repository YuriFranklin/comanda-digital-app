/* eslint-disable react-native/no-inline-styles */
import React, {useMemo, useRef, useState} from 'react';
import Button from '../../../molecules/Button';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {Container, Title} from './styles';
import Input from '../../../molecules/Input';
import {TextInput} from 'react-native';
import {Registry, container} from '../../../../@core/infra/Container';
import useToast from '../../../../hooks/useToast';
import AuthController from '../../../../@core/presentation/controllers/AuthController';

const loginSchema = z.object({
  username: z.string().nonempty({message: 'Insira um login válido.'}),
  password: z.string().nonempty({message: 'Insira uma senha válida.'}),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginSchemaType>({resolver: zodResolver(loginSchema)});
  const passwordInputRef = useRef<TextInput>(null);
  const authController = useMemo(
    () => container.get<AuthController>(Registry.AuthController),
    [],
  );
  const [isLoading, setIsLoading] = useState(false);
  const {addToast} = useToast();

  const onSubmit = async ({username, password}: LoginSchemaType) => {
    try {
      setIsLoading(true);
      const isSigned = await authController.signIn(username, password);

      if (!isSigned) {
        throw 'Error';
      }
    } catch (e) {
      addToast({
        text: 'Não foi possível conectar-se, tente novamente.',
        type: 'error',
        buttonTitle: 'OK',
        onClick: () => console.log('Error when try login.'),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Title>ENTRAR NO APP</Title>
      <Input
        label="Login"
        placeholder="login"
        controllerProps={{control: control, name: 'username'}}
        returnKeyType="next"
        onSubmitEditing={() => passwordInputRef?.current?.focus()}
        {...(typeof errors.username?.message === 'string' && {
          errors: errors.username?.message,
        })}
      />
      <Input
        inputRef={passwordInputRef}
        label="Senha"
        secureTextEntry={true}
        placeholder="••••••••"
        returnKeyType="done"
        onSubmitEditing={handleSubmit(onSubmit)}
        controllerProps={{control, name: 'password'}}
        {...(typeof errors.password?.message === 'string' && {
          errors: errors.password?.message,
        })}
      />
      <Button
        //@ts-ignore
        style={{marginTop: 16}}
        title="ENTRAR"
        isLoading={isLoading}
        onPress={handleSubmit(onSubmit)}
      />
    </Container>
  );
};

export default LoginForm;
