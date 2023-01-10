import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from '../pages/Login'
import Register from '../pages/Register'
import DashboardUser from '../pages/DashboardUser'
import DashboardAdmin from "../pages/DashboardAdmin";
import DashboardMember from "../pages/DashboardMember";
import UserRoute from "../router/UserRoute";
import MemberRoute from "../router/MemberRoute";
import AdminRoute from "../router/AdminRoute";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: '/', element: <Layout />, children: [
            { path: '/', element: <Home /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            { path: '/dashboard-user', element: <UserRoute><DashboardUser /> </UserRoute> },
            { path: '/dashboard-admin', element: <AdminRoute><DashboardAdmin /></AdminRoute> },
            { path: '/dashboard-member', element: <MemberRoute><DashboardMember /></MemberRoute> },
        ]
    }
])