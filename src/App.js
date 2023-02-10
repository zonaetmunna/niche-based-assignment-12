import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import Home from './view/pages/Home/Home';
import Explore from './view/pages/Explore/Explore';
import Purchase from './view/pages/Purchase/Purchase';
import Register from './view/pages/Register/Register';
import Login from './view/pages/Login/Login';
import Dashboard from './view/pages/Dashboard/Dashboard';
import PrivateRoute from './view/components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <PrivateRoute path="/purchase/:id">
              <Purchase />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
