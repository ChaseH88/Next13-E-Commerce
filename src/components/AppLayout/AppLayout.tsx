import { Header } from "components/Header";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div id="layout">
      <Header />
      <div>{children}</div>
      <footer>footer</footer>
    </div>
  );
};

export { AppLayout };
