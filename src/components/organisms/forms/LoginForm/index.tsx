/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import Button from '../../../molecules/Button';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {Container, Title} from './styles';
import Input from '../../../molecules/Input';
import {TextInput} from 'react-native';
import {Registry, container} from '../../../../@core/infra/Container';
import LoginUseCase from '../../../../@core/domain/usecases/LoginUseCase';
import useToast from '../../../../hooks/useToast';

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
  const loginUseCase = container.get<LoginUseCase>(Registry.LoginUseCase);
  const [isLoading, setIsLoading] = useState(false);
  const {addToast} = useToast();

  const onSubmit = async ({username, password}: LoginSchemaType) => {
    try {
      setIsLoading(true);
      const isSigned = await loginUseCase.execute(username, password);

      if (!isSigned) {
        throw 'Error';
      }
    } catch (e) {
      addToast({
        text: 'Teste',
        type: 'error',
        buttonTitle: 'OK',
        onClick: () => console.log('Test'),
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
