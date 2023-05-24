import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';
import TextField from '@/components/ui/TextField';
import { login } from '@/ducks/auth.ducks';
import AuthService from '@/modules/auth/services/auth.service';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { FormData } from '../../types/auth';
import AuthForm from '../AuthForm';

export default function SignInForm() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: { password: '', email: '' },
  });
  const router = useRouter();
  const onSubmit = (data: FormData) => {
    AuthService.login(data).then(() => router.push('/home'));
  };

  return (
    <>
      <AuthForm title='Sign In' onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-[20px] mb-[30px] flex flex-col gap-[20px]'>
          <div>
            <Controller
              name='email'
              control={control}
              rules={{
                required: 'It`s a required field',
                pattern: {
                  value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: 'Not valid email address',
                },
              }}
              render={({ field }) => (
                <>
                  <TextField label='Email' placeholder='example@email.com' autoFocus {...field} />
                  {errors.email && (
                    <small className='text-left text-red'>{errors.email.message}</small>
                  )}
                </>
              )}
            />
          </div>

          <div>
            <Controller
              name='password'
              control={control}
              rules={{
                required: 'It`s a required field',
                minLength: {
                  value: 6,
                  message: 'Пароль должен состоять хотя бы из 6 символов',
                },
              }}
              render={({ field }) => (
                <>
                  <TextField
                    type='password'
                    label='Password'
                    placeholder='Your password'
                    {...field}
                  />
                  {errors.password && (
                    <small className='text-left text-red'>{errors.password.message}</small>
                  )}
                </>
              )}
            />
          </div>
          <Link className='text-end' href='/password-recovery'>
            <small>Forgot your password?</small>
          </Link>
        </div>
        <Button type='submit' variant='filled'>
          Login
        </Button>
      </AuthForm>
      <AuthForm.ExternalAuth />

      <AuthForm.Footer>
        <small>
          Newbie?{' '}
          <Link href='/auth/signup' className='text-white'>
            Create an account
          </Link>
        </small>
        <small>
          Vizok uses cookies for analytics personalized content and ads. By using Vizok`s services
          you agree to{' '}
          <Link className='text-white' href='/cookies-policy'>
            cookies policy
          </Link>{' '}
          and{' '}
          <Link className='text-white' href='/terms'>
            terms of use
          </Link>
        </small>
      </AuthForm.Footer>
    </>
  );
}

