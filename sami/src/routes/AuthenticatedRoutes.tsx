import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

export interface AuthenticatedRoutesProps {}

const router = createBrowserRouter([
  // {
  //     path: '/',
  //     element: <Layout />,
  //     errorElement: <BaseErrorBoundary />,
  //     children: [
  //         { path: '/', element: <Navigate to="/notes" /> },
  //         { path: '/notes', element: <Notes /> },
  //     ],
  // },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

export const AuthenticatedRoutes: React.FC<AuthenticatedRoutesProps> = () => (
  <RouterProvider router={router} />
);
