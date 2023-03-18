import { AuthLayoutStyled } from "./styles";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <AuthLayoutStyled>{children}</AuthLayoutStyled>;
};

export { AuthLayout };
