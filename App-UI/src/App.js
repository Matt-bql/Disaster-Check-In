import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Layouts
import LandingPageLayout from "./layouts/LandingPage";
// Pages
import Signup from "./pages/Signup-Page";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import UserAccount from "./pages/UserAccount";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={LandingPageLayout} />
          <Route path='/create-account' exact component={Signup} />
          <Route path='/feedback' />
          <Route path='/login' exact component={LoginForm} />
          <Route path='/about' />
          <Route path='/user-account' exact component={UserAccount} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
