import Button from '@/components/ui/Button'
import Logo from '@/components/ui/Logo'
import TextField from '@/components/ui/TextField'
import AuthService from '@/services/auth.service'
import { phoneNumberAutoFormat } from '@/utils/phoneFormatter'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { FormData } from './signin'

type Props = {}

const SignupPage = (props: Props) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: { password: '', phone: '', email: '' },
  });
  const router = useRouter()
  const onSubmit = (data: FormData & { phone: string}) => {
    AuthService.signup(data).then(() => router.push('/home'))
  };
  return (
    <>
      <div className='flex flex-col h-[100vh] pt-[100px] px-[24px]'>
        <Logo />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className='text-center'>Sign Up</h2>
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
                name='phone'
                control={control}
                rules={{
                  required: 'It`s a required field',
                  pattern: {
                    value: /\+[0-9]{3} [0-9]{2} [0-9]{3} [0-9]{4}/,
                    message: 'Not valid phone number',
                  },
                }}
                render={({ field: {onChange, ...field } }) => (
                  <>
                    <TextField label='phone' onChange={(e) => onChange(phoneNumberAutoFormat(e.target.value))} type="tel" placeholder='+380' autoFocus {...field} />
                    {errors.phone && (
                      <small className='text-left text-red'>{errors.phone.message}</small>
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
          </div>
          <Button type='submit' variant='filled'>
            Sign Up
          </Button>
        </form>
        <div className='mt-6 space-y-[30px] xl:space-y-[30px] lg:space-y-[50px]'>
          <div className='flex items-center justify-center'>
            <hr className='grow text-darkGray' />
            <span className='text-sm bg-transparent px-2 text-gray'>OR</span>
            <hr className='grow text-darkGray' />
          </div>

          <div className='flex flex-col justify-center gap-[20px]'>
            <Button variant='filled' className='' color='black' icon='apple'>
              Sign up with Apple
            </Button>
            <Button variant='filled' color='black' icon='google'>
              Sign up with Google
            </Button>
          </div>
        </div>
        <div className='mt-[100px] gap-1 text-center text-gray flex flex-col'>
          <small>
            Already has an account?{' '}
            <Link href='/auth/signin' className='text-white'>
              Login
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
        </div>
      </div>
    </>
  )
}

SignupPage.getLayout = (page: NextPage) => page;
export default SignupPage;
