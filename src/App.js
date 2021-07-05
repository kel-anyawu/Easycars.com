import Header from "./Components/Header";
import About from "./Components/About";
import Home from "./Components/Home";
import Discount from "./Components/Discount";
import Contact from "./Components/Contact";
import Partners from "./Components/Partners";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Footer from "./Components/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
      <Route component={Header} />
      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Discount" component={Discount} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Partners" component={Partners} />
      <Route path="/Login" component={Login} />
      <Route exact path="/Register" component={Register} />
      <Route component={Footer} />
      </Router>
    </div>
  )
}

export default App;
