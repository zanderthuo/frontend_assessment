import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => {
  // Check if a token is saved in local storage
  const token = localStorage.getItem('token');
  // Return true if token exists, false otherwise
  return !!token;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" /> // Redirect to login page if not authenticated
        )
      }
    />
  );
};

export default PrivateRoute;