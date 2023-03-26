import { globalCss } from '@/styles/config.stitches'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  globalCss()
  return <Component {...pageProps} />
}
