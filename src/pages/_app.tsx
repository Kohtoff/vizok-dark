import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Page } from '@/types/page';
import PageLayout from '@/components/layout/PageLayout';

type AppPropsWithLayout = AppProps & {
  Component: Page;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return Component.getLayout ? (
    Component.getLayout(<Component {...pageProps} />)
  ) : (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
