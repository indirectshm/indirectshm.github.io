import '@/styles/globals.css';
import Skeleton from '@/components/skeleton';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Skeleton>
      <Component {...pageProps} />
    </Skeleton>
  )
}
