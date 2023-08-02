declare const window: any;

export const pageview = (url: string) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID as string, {
    page_path: url,
  });
};
