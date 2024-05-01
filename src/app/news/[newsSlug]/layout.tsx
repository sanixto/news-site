interface NewsDetailLayoutProps {
  children: React.ReactNode,
  modal: React.ReactNode,
}

export default function NewsDetailLayout({ children, modal }: NewsDetailLayoutProps) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}