import "./App.css";
// import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import PieChart from "./PieChart.jsx";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LineChart from "./LineChart";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
// import LineChart from "./LineChart";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/piechart" exact>
            <Header />
            <PieChart />
            {/* <Footer /> */}
          </Route>
          <Route path="/linechart" exact>
            <Header />
            <LineChart />
            {/* <Footer /> */}
          </Route>
          <Route path="/doughnutchart" exact>
            <Header />
            <DoughnutChart />
            {/* <Footer /> */}
          </Route>
          <Route path="/barchart" exact>
            <Header />
            <BarChart />
            {/* <Footer /> */}
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
