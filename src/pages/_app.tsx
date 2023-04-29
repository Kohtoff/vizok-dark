import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Page } from '@/types/page';
import PageLayout from '@/components/layout/PageLayout';
import { Provider } from 'react-redux';
import store, { persistor } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import StartScreen from '@/components/screens/start/StartScreen';

type AppPropsWithLayout = AppProps & {
  Component: Page;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return Component.getLayout ? (
    Component.getLayout(<Component {...pageProps} />)
  ) : (
    <Provider store={store}>
      <PersistGate loading={<StartScreen />} persistor={persistor}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </PersistGate>
    </Provider>
  );
}
