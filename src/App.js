import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './route/PrivateRoute';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import EditPage from './pages/EditPage';
import ErrorPage from './pages/ErrorPage';
import AllApplicationsPage from './pages/AllApplicationsPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/" component={MainPage} />
          <PrivateRoute path="/edit-application/:applicationId" component={EditPage} />
          <PrivateRoute path="/all-application" component={AllApplicationsPage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
