import { RecoilRoot } from "recoil";
import Head from 'next/head'
import Router from "next/router";
import NProgress from "nprogress";
import Script from "next/script";

import { isProduction } from "src/utils/env";
import Header from "src/components/Header";
import BottomNav from "src/components/BottomNav";
import { useGoogleAnalytics as GoogleAnalytics } from 'src/hooks/useGoogleAnalytics'
import DefaultLayout from 'src/layouts/DefaultLayout'

import '../styles/globals.css'
import '../styles/reset.css'
import '../styles/override.css'
import "nprogress/nprogress.css";



export default function MyApp({ Component, pageProps, access_token }: any) {

  let typedRouter = Router as any;

  typedRouter.onRouteChangeStart = ({ shallow } = { shallow: false }) => {
    if (shallow) return;
    NProgress.start();
  };

  typedRouter.onRouteChangeComplete = ({ shallow } = { shallow: false }) => {
    if (shallow) return;
    NProgress.done();
  };

  typedRouter.onRouteChangeError = ({ shallow } = { shallow: false }) => {
    if (shallow) return;
    NProgress.done();
  };

  return (
    <>
      {isProduction() ? (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </>
      ) : null}
      <Head>
        <title>링크지</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, viewport-fit=cover"
          key="viewport"
        />
        <meta
          name="description"
          content="링크지"
        />
        <meta property="og:title" content="피둥피둥" />
        <meta
          property="og:description"
          content="링크지"
        />
        <link rel="shortcut icon" href="/logo-desktop.svg" />
      </Head>
      <RecoilRoot>
        <Header />
        <GoogleAnalytics />
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
        <BottomNav />
      </RecoilRoot>
    </>
  )
}
