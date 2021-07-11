/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ProjectTitleComponent from '../components/ProjectTitleComponent';
import OverviewTable from '../components/OverviewTable';
import OverviewText from '../components/OverviewText';
import '../css/NewProjectPage.css';

function NewProjectPage() {
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
          <Route exact path="/newproject">
            <Redirect to="/newproject" />
          </Route>
          <Route path="/newproject/overview">
            <OverviewTable />
          </Route>
        </Switch>

      </Router>
      <div>
        <button type="button" className="btn-delete">Fjern</button>
        <button type="button" className="btn-cancel">Avbryt</button>
        <button type="button" className="btn-create">Opprett prosjekt</button>
      </div>
    </div>
  );
}

export default NewProjectPage;
