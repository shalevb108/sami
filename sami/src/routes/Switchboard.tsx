// import { AuthenticatedRoutes } from './AuthenticatedRoutes';
import { PublicRoutes } from "./PublicRoutes";

export interface SwitchboardProps {}

export const Switchboard: React.FC<SwitchboardProps> = () => (
  <>
    {/* <AuthenticatedRoutes /> */}
    <PublicRoutes />
  </>
);
