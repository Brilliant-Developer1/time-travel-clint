import './App.css';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import Register from './Pages/Login/Register/Register';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Watches from './Pages/Watches/Watches/Watches';
import Footer from './Pages/Home/Footer/Footer';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route  path="/home">
         <Home/>
        </Route>
        <Route  path="/login">
         <Login/>
        </Route>
        <Route  path="/register">
         <Register/>
        </Route>
        <Route  path="/watches">
         <Watches/>
        </Route>
        <PrivateRoute  path="/placeOrder/:id">
         <PlaceOrder/>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
         <DashBoard/>
        </PrivateRoute>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
