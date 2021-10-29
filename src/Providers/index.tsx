import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
interface AuthProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: AuthProviderProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};
export default Providers;
