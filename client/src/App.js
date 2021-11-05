import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserIN } from './redux/action/action';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import MonltyData from './Pages/MonltyData';
import YearLyData from './Pages/YearLyData';
import Login from './Pages/Login';
import PublicRoute from './router/PublicRoute';
import PrivateRoute from './router/PrivateRoute';
import './App.css';
import SignUp from './Pages/SignUp';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.userinfo);
  // console.log(state.daily)

  // get all data
  useEffect(() => {
    dispatch(getUserIN())
  }, [dispatch, state.userinfo])

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/register" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
