interface DefaultLayoutProps {
  children: JSX.Element;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return <div className="mx-auto max-w-[390px]">{children}</div>;
}
