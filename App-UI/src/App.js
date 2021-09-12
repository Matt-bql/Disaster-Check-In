import { Switch, Route } from "react-router-dom";
// Layouts
import LandingPageLayout from "./layouts/LandingPage";
// Pages
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Switch>
        <Route path='/'>
          <LandingPageLayout heading='Disaster Check-In'>
            <HomePage />
          </LandingPageLayout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
