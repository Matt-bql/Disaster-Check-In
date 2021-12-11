import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/Signup-Page";
import MemberFeedPage from "./pages/MemberFeedPage";
//Components
import Header from "./components/Header/Header";
//Amplify
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import {
  AmplifySignUp,
  AmplifySignIn,
  AmplifyConfirmSignUp,
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
            <AmplifySignUp
              slot='sign-up'
              formFields={[
                { type: "username" },
                {
                  type: "name",
                  label: "Name *",
                  placeholder: "Your name",
                },
                { type: "email" },
                { type: "password" },
              ]}
            />
            <AmplifyConfirmSignUp
              headerText='See Email For Confirmation Code'
              slot='confirm-sign-up'
            ></AmplifyConfirmSignUp>
            <AmplifySignIn slot='sign-in' usernameAlias='username' />
            <div className='bg-primary-bg'>
              <Route path='/user-page' exact component={MemberFeedPage} />
            </div>
          </AmplifyAuthenticator>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
