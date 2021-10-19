import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Doctors from './Pages/Doctos/Doctors';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/LogIn/Login';
import AuthProvider from './context/AuthProvider';
import Register from './Pages/LogIn/Register/Register';
import PrivateRoute from './Pages/LogIn/PriveRoute/PrivetRoute';


function App() {
  return (
    <div className="App">
  <AuthProvider>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                  <Home></Home>
              </Route>
              <Route exact path="/doctors">
                <Doctors></Doctors>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/contact">
                <Contact></Contact>
              </Route>
              <PrivateRoute exact path="/booking/:serviceid">
                <Booking></Booking>
              </PrivateRoute>
              <Route exact path="/register">
                <Register></Register>
              </Route>
              <Route exact path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
  </AuthProvider>
    </div>
  );
}

export default App;
