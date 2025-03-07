import { createBrowserRouter } from 'react-router-dom';
import About from '../Components/About/About.jsx';
import Cart from '../Components/Cart/Cart.jsx';
import Error from '../Components/Error/Error';

import EstateDetails from '../Components/EstateDetails/EstateDetails.jsx';
import EventCalendar from '../Components/EventCalendar/EventCalendar';

import Faq from '../Components/Faq/Faq';
import ForgotPassword from '../Components/ForgotPassword/ForgotPassword.jsx';
import Home from '../Components/Home/Home';
import ServicesDetails from '../Components/Home/Services/ServicesDetails.jsx';
import Layout from '../Components/Layout/Layout';
import Login from '../Components/Login/Login';
import Signup from '../Components/Signup/Signup';
import Teams from '../Components/Teams/Teams';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/services.json'),
      },
      {
        path: '/faq',
        element: (
          <PrivateRoute>
            <Faq />
          </PrivateRoute>
        ),
        loader: () => fetch('/faq.json'),
      },

      {
        path: '/team',
        element: (
          <PrivateRoute>
            <Teams />
          </PrivateRoute>
        ),
        loader: () => fetch('/teams.json'),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: '/estate-details',
        element: (
          <PrivateRoute>
            <EstateDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/about',
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
      },
      {
        path: '/service/:id',
        element: (
          <PrivateRoute>
            <ServicesDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/cart',
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
