import { SetupProvider } from "../context/setup-context"

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SetupProvider>
      <Component {...pageProps} />
    </SetupProvider>
  )
}

export default MyApp