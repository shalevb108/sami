import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { OpenHome } from "../pages/OpenHome";

export interface PublicRoutesProps {}

export const PublicRoutes: React.FC<PublicRoutesProps> = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<OpenHome />} />
    </Routes>
  </BrowserRouter>
);
