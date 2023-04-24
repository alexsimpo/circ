// https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet
import '../css/globals.css';
import type { AppProps } from 'next/app';

// This default export is required in a new `pages/_app.tsx` file.
export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
