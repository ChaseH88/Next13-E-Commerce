interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div id="layout">
      <header>header</header>
      <div>{children}</div>
      <footer>footer</footer>
    </div>
  );
};

export { AppLayout };
