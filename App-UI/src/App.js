import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/Signup-Page";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserAccount from "./pages/UserAccount";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import {
  AmplifySignOut,
  withAuthenticator,
  AmplifyAuthenticator,
} from "@aws-amplify/ui-react";
Amplify.configure(awsconfig);

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/create-account' exact component={SignupPage} />
          <Route path='/feedback' />
          <Route path='/about' />

          <AmplifyAuthenticator>
            <Route path='/my-account' exact component={UserAccount} />
          </AmplifyAuthenticator>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
