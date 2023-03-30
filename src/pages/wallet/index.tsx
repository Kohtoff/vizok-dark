import Button from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import TextField from '@/components/ui/TextField';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

type Props = {};

const WalletPage = (props: Props) => {
  const { back } = useRouter();
  const [amount, setAmount] = useState(50)
  const user = {
    balance: '34.78',
  };
  const fastSetAmount = [20, 50, 100, 200];
  return (
    <div className='relative flex flex-col justify-between h-[100vh]'>
      <header className='py-6 px-5'>
        <div className='grid items-center grid-cols-3 w-full'>
          <div>
            <div onClick={back} className='bg-deepBlack p-4 w-fit rounded-full bg-opacity-20'>
              <Icon name='chevronLeft' className='w-6 h-6' />
            </div>
          </div>

          <div className='flex items-center justify-self-end'>
            <h3>Wallet Refill</h3>
          </div>
        </div>
        <div className='mt-[40px] flex items-center gap-6'>
          <Icon className='w-16 h-16' name='wallet' />
          <div>
            <p>My wallet</p>
            <p>
              Balance: <b>{user.balance} UAH</b>
            </p>
          </div>
        </div>
      </header>
      <main className='flex items-center flex-col justify-center'>
        <div className='flex justify-center flex-col mx-auto max-w-[240px]'>
          <h3 className='text-center'>Refill value</h3>
          <TextField variant='underlined' type="number" onChange={({target}) => setAmount(+target.value)} value={amount.toString()}  />
        </div>
        <div className='flex gap-6 mt-[35px] '>
            {fastSetAmount.map(item => {
                return(
                    <div key={item} onClick={() => setAmount(item)} className='px-2 py-3 border-2 border-gray rounded-full'>{item} UAH</div>
                )
            } )}
        </div>
      </main>
      <footer className='w-full px-5 py-5 flex flex-col gap-4 bg-black '>
        <Button variant='filled'>Refill</Button>
        <span className='text-center'>Payment source: </span>
      </footer>
    </div>
  );
};
WalletPage.getLayout = (page: NextPage) => page;

export default WalletPage;
