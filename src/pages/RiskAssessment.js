import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ProjectTitleComponent from '../components/ProjectTitleComponent';
import RiskAssessmentTable from '../components/RiskAssessmentTable';
import RiskAssessmentSmallTable from '../components/RiskAssessmentSmallTable';
import ExportListButton from '../components/ExportListButton';
import OverviewText from '../components/OverviewText';

function RiskAssessment() {
  return (
    <div
      className="riskAssessment"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '100vh',
      }}
    >

      <Router>
        <ProjectTitleComponent />
        <OverviewText />

        <Switch>
          <Route exact path="/riskassessment">
            <Redirect to="/riskassessment/largelist" />
          </Route>
          <Route path="/riskassessment/largelist">
            <RiskAssessmentTable />
          </Route>
          <Route path="/riskassessment/list">
            <RiskAssessmentSmallTable />
          </Route>
        </Switch>

      </Router>

      <ExportListButton />
    </div>
  );
}

export default RiskAssessment;
