import React from 'react';
import Button from '../atoms/Button';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {Container, Title} from './styles';
import Input from '../atoms/Input';

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

  const onSubmit = (data: LoginSchemaType) => console.log(data);

  return (
    <Container>
      <Title>ENTRAR NO APP</Title>
      <Input
        label="Login"
        placeholder="login"
        controllerProps={{control: control, name: 'username'}}
        {...(typeof errors.username?.message === 'string' && {
          errors: errors.username?.message,
        })}
      />
      <Input
        label="Senha"
        secureTextEntry={true}
        placeholder="••••••••"
        controllerProps={{control, name: 'password'}}
        {...(typeof errors.password?.message === 'string' && {
          errors: errors.password?.message,
        })}
      />
      <Button
        //@ts-ignore
        style={{marginTop: 16}}
        title="ENTRAR"
        onPress={handleSubmit(onSubmit)}
      />
    </Container>
  );
};

export default LoginForm;
