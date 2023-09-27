import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Page } from '@/types/page';
import PageLayout from '@/components/layout/PageLayout';
import { Provider } from 'react-redux';
import store, { persistor } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import StartScreen from '@/components/screens/start/StartScreen';
import { useJsApiLoader } from '@react-google-maps/api';

type AppPropsWithLayout = AppProps & {
  Component: Page;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_API_TOKEN as string,
    libraries: ['places'],
  });

  if (!isLoaded || loadError) {
    return <StartScreen />;
  } else {
    return (
      <>
        <Provider store={store}>
          <PersistGate loading={<StartScreen />} persistor={persistor}>
            {Component.getLayout ? (
              Component.getLayout(<Component {...pageProps} />)
            ) : (
              <PageLayout>
                <Component {...pageProps} />
              </PageLayout>
            )}
          </PersistGate>
        </Provider>
      </>
    );
  }
}
