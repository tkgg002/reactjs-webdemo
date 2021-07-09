import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './css/App.css';
import RiskAssessment from './pages/RiskAssessment';
import GlobalNavigation from './components/GlobalNavigation';
import ProjectNavigation from './components/ProjectNavigation';
import Overview from './components/Overview';
import Uploading from './components/Uploading';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <div className="landingPage">
              <div className="globalNavigationLanding">
                <GlobalNavigation />
              </div>

              <div className="projectNavigationLanding">
                <ProjectNavigation />
              </div>
            </div>
          </Route>

          <Route exact path="/newproject">
            <div className="riskAssessmentPage">

              <div className="firstRow">
                <div className="globalNavigationLanding">
                  <GlobalNavigation />
                </div>
              </div>

              <div className="secondRow">
                <div className="projectNavigationLanding">
                  <ProjectNavigation />
                </div>

                <div className="Uploading">
                  <Route path="/:redirectParam" component={Uploading} />
                </div>
              </div>

            </div>
          </Route>

          <Route exact path="/newproject">
            <div className="riskAssessmentPage">

              <div className="firstRow">
                <div className="globalNavigationLanding">
                  <GlobalNavigation />
                </div>
              </div>

              <div className="secondRow">
                <div className="projectNavigationLanding">
                  <ProjectNavigation />
                </div>

                <div className="riskAssessment">
                  <Overview />
                </div>
              </div>

            </div>
          </Route>

          <Route path="/riskassessment">
            <div className="riskAssessmentPage">

              <div className="firstRow">
                <div className="globalNavigationLanding">
                  <GlobalNavigation />
                </div>
              </div>

              <div className="secondRow">
                <div className="projectNavigationLanding">
                  <ProjectNavigation />
                </div>

                <div className="riskAssessment">
                  <RiskAssessment />
                </div>
              </div>

            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function WrappedApp() {
  return (
    <Suspense fallback={(
      <div className="spinner">
        <img src="https://i.pinimg.com/originals/73/7c/df/737cdf1d697638a09d934656421bc92c.gif" alt="Loading..." />
      </div>
    )}
    >

      <App />

    </Suspense>
  );
}

export default WrappedApp;
