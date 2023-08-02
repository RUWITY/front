import { RecoilRoot } from "recoil";
import { parse } from 'cookie';
import App from 'next/app';
import Head from 'next/head'
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";

import Header from "src/components/Header";
import BottomNav from "src/components/BottomNav";
import { useGoogleAnalytics as GoogleAnalytics } from 'src/hooks/useGoogleAnalytics'
import DefaultLayout from 'src/layouts/DefaultLayout'

import "nprogress/nprogress.css";
import '../styles/globals.css'
import '../styles/reset.css'
import '../styles/override.css'

MyApp.getInitialProps = async (appContext: any) => {
  const { ctx } = appContext;


  const cookies = ctx.req?.headers.cookie || '';
  const cookieObj = parse(cookies);

  const access_token = cookieObj.access_token || null;

  let pageProps = {};
  if (App.getInitialProps) {
    pageProps = await App.getInitialProps(appContext);
  }

  return { pageProps, access_token };
};

export default function MyApp({ Component, pageProps, access_token }: any) {
  const router = useRouter();
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
        <Header accessToken={access_token} />
        <GoogleAnalytics />
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
        <BottomNav accessToken={access_token} />
      </RecoilRoot>
    </>
  )
}
