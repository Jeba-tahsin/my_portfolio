import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog/Blog';
import BloodDetails from './pages/Details/BloodDetails';
import PotteryDetail from './pages/Details/PotteryDetail';
import TourismDetails from './pages/Details/TourismDetails';
import Header from './pages/Home/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header></Header>
        <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/blog'>
          <Blog></Blog>
        </Route>
        <Route path='/bloodDetails'>
          <BloodDetails></BloodDetails>
        </Route>
        <Route path='/potteryDetail'>
          <PotteryDetail></PotteryDetail>
        </Route>
        <Route path='/tourismDetails'>
           <TourismDetails></TourismDetails>
        </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
