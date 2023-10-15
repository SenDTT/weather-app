import '@/styles/globals.css'
import { AppLayoutProps } from 'next/app';

export default function MyApp({Component, pageProps}: AppLayoutProps) {
  return (
    <Component {...pageProps} />
  );
}