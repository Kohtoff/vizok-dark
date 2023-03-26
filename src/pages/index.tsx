import StartScreen from '@/components/screens/start/StartScreen';
import { NextPage } from 'next';

export default function StartPage() {
  return <StartScreen />;
}

StartPage.getLayout = (page: NextPage) => page;
