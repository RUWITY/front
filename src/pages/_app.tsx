import { RecoilRoot } from "recoil";

import Header from "src/components/Header";
import BottomNav from "src/components/BottomNav";

import '../styles/globals.css'
import '../styles/reset.css'
import '../styles/override.css'

import type { AppProps } from 'next/app'
import DefaultLayout from 'src/layouts/DefaultLayout'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
      <BottomNav />
    </RecoilRoot>
  )
}
