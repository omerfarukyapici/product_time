import './App.css';

//Pages
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';
import CreatePage from './components/CreatePage';

//Routing
import { HashRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
     <div className="App bg-[#dfe1e6] py-10">

        <Switch>
        
          <Route exact path={"/"} component={HomePage} />

          <Route path={"/products/:id"} component={DetailPage} />

          <Route path={"/createproduct"} component={CreatePage} />

        </Switch>

      </div>
    </Router >
  );
}

export default App;
