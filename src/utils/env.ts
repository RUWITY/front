export const isServer = (): boolean => {
  return typeof window === 'undefined';
};

export const isProduction = (): boolean => {
  return process.env.NEXT_PUBLIC_ENV === 'production';
};
