import { ProvidersTech } from "./TechContext";
import { Providers } from "./UserContext";

export const AllProviders = ({ children }) => {
  return (
    <Providers>
      <ProvidersTech>{children}</ProvidersTech>
    </Providers>
  );
};
