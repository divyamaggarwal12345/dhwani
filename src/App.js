import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import TableData from './Page1';
import PieChart from './Page2';
import history from './history';
import DoughnutChart from "./Page2";
function App() {
  return (
    <div className="App">
       <Router history={history}>
      <Switch>
                    <Route path="/" exact component={TableData} />
                    <Route path="/page2" component={PieChart} />
      </Switch>

      </Router>
     
    </div>
  );
}

export default App;
