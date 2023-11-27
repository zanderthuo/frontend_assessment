import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import PrivateRoute from './route/PrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import MainPage from './pages/MainPage';
import EditPage from './pages/EditPage';
import ErrorPage from './pages/ErrorPage';
import AllApplicationsPage from './pages/AllApplicationsPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/edit-application" component={EditPage} />
          <PrivateRoute path="/all-application" component={AllApplicationsPage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
