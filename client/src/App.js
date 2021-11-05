import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTempData } from './redux/action/action';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import MonltyData from './Pages/MonltyData';
import YearLyData from './Pages/YearLyData';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.temp);
  // console.log(state.daily)

  // get all data
  useEffect(() => {
    dispatch(getTempData())
  }, [dispatch, state.temp])

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/monthly" exact component={MonltyData} />
          <Route path="/yearly" exact component={YearLyData} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
