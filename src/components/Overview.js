/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Overview.css';
import '../css/ProjectTitleComponent.css';

function Overview() {
  const { t } = useTranslation();

  function updateState() {
    const [value, setValue] = useState(0);

    return () => setValue(!value);
  }

  function selectAllCheckbox() {
    const checkboxes = document.getElementsByClassName('large-table-checkbox');

    if (checkboxes.item(0).firstChild.firstChild.checked === true) {
      for (let i = 0; i < checkboxes.length; i += 1) {
        checkboxes.item(i).firstChild.firstChild.checked = true;
      }
    } else {
      for (let i = 0; i < checkboxes.length; i += 1) {
        checkboxes.item(i).firstChild.firstChild.checked = false;
      }
    }
  }

  /** First flip arrow, and flip other arrows so that only one points down */
  function sortByType() {
    const sortArrow = document.getElementById('sortType');
    // Check if arrow points up
    const arrowIsUp = sortArrow.className === 'fas fa-sort-up';

    // If element is to be sorted by this it cannot be sorted by others as well
    if (arrowIsUp) {
      const currentSort = document.getElementsByClassName('fas fa-sort-down');
      if (currentSort[0] !== undefined) {
        currentSort[0].className = 'fas fa-sort-up';
      }
    }

    // Flips arrow according to if it points upwards or downwards
    sortArrow.className = arrowIsUp ? 'fas fa-sort-down' : 'fas fa-sort-up';
  }

  /** First flip arrow, and flip other arrows so that only one points down */
  function sortByName() {
    const sortArrow = document.getElementById('sortName');
    // Check if arrow points up
    const arrowIsUp = sortArrow.className === 'fas fa-sort-up';

    // If element is to be sorted by this it cannot be sorted by others as well
    if (arrowIsUp) {
      const currentSort = document.getElementsByClassName('fas fa-sort-down');
      if (currentSort[0] !== undefined) {
        currentSort[0].className = 'fas fa-sort-up';
      }
    }
  }

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <section>
      // PROJECT TITLE IN DOCS OVERVIEW
      <nav className="navbar" role="navigation" aria-label="main navigation">

        <div className="navbar-brand column is-3">
          {/* <p className="projectTitle">{t('landingpage.projecttitle')}</p> */}
          <p className="projectTitle">ProjectTitle</p>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <span className="navbar-item" />
          </div>

          <div className="navbar-end" id="navbar-end">
            <div className="navbar-item">
              {/* <div className="buttons"> */}

              <div className="searchbar-container">
                <button type="button" className="button is-white" aria-haspopup="true" aria-controls="dropdown-menu3">
                  <span className="fas fa-download" />
                  <span>&nbsp;&nbsp;Last opp file</span>
                </button>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </nav>

      {/* OVERVIEW */}

      <div id="overviewText">
        <h4 className="title is-4">{t('createproject.overview')}</h4>
      </div>

      {/* DOCS TABLE */}

      <div className="riskAssessmentTable">
        <table className="table">
          <thead>
            <tr>
              <th className="table-checkbox">
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                <label className="checkbox" onClick={updateState()} onKeyDown={updateState()}>
                  <input type="checkbox" onClick={() => selectAllCheckbox()} onKeyDown={() => selectAllCheckbox()} />
                </label>
              </th>
              <th className="table-type">
                <a href="#" onClick={() => sortByType()}>
                  {t('createproject.type')}
                  <i className="fas fa-sort-up" id="sortType" />
                </a>
              </th>
              <th className="table-name">
                <a href="#" onClick={() => sortByName()}>
                  {t('createproject.name')}
                  <i className="fas fa-sort-up" id="sortName" />
                </a>
              </th>
            </tr>
          </thead>

          <tbody>

            {/* Double treatment */}
            {/* Double treatment */}
            {/* Double treatment */}
            <tr>
              <td className="table-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td className="table-type">
                <i className="far fa-clone" />
              </td>
              <td className="table-name">
                <strong> B1.1 Generell.pdf </strong>
                {t('riskassessment.has')}
                X
                {t('riskassessment.conflicts')}
                <strong> B1.4 Dokumentliste.xlsx </strong>

              </td>
            </tr>

            <tr>
              <td className="table-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td className="table-type">
                <i className="far fa-clone" />
              </td>
              <td className="table-name">
                <strong> B1.1 Generell.pdf </strong>
                {t('riskassessment.has')}
                X
                {t('riskassessment.conflicts')}
                <strong> B1.4 Dokumentliste.xlsx </strong>
              </td>
            </tr>

            <tr>
              <td className="table-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td className="table-type">
                <i className="far fa-clone" />
              </td>
              <td className="table-name">
                <strong> B1.1 Generell.pdf </strong>
                {t('riskassessment.has')}
                X
                {t('riskassessment.conflicts')}
                <strong> B1.4 Dokumentliste.xlsx </strong>

              </td>
            </tr>

            <tr>
              <td className="table-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td className="table-type">
                <i className="far fa-clone" />
              </td>
              <td className="table-name">
                <strong> B1.1 Generell.pdf </strong>
                {t('riskassessment.has')}
                X
                {t('riskassessment.conflicts')}
                <strong> B1.4 Dokumentliste.xlsx </strong>

              </td>
            </tr>

            <tr>
              <td className="table-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td className="table-type">
                <i className="far fa-clone" />
              </td>
              <td className="table-name">
                <strong> B1.1 Generell.pdf </strong>
                {t('riskassessment.has')}
                X
                {t('riskassessment.conflicts')}
                <strong> B1.4 Dokumentliste.xlsx </strong>
              </td>
            </tr>

            <tr>
              <td className="table-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td className="table-type">
                <i className="far fa-clone" />
              </td>
              <td className="table-name">
                <strong> B1.1 Generell.pdf </strong>
                {t('riskassessment.has')}
                X
                {t('riskassessment.conflicts')}
                <strong> B1.4 Dokumentliste.xlsx </strong>
              </td>
            </tr>

            <tr>
              <td className="table-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td className="table-type">
                <i className="far fa-clone" />
              </td>
              <td className="table-name">
                <strong> B1.1 Generell.pdf </strong>
                {t('riskassessment.has')}
                X
                {t('riskassessment.conflicts')}
                <strong> B1.4 Dokumentliste.xlsx </strong>
              </td>
            </tr>

            <tr>
              <td className="table-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td className="table-type">
                <i className="far fa-clone" />
              </td>
              <td className="table-name">
                <strong> B1.1 Generell.pdf </strong>
                {t('riskassessment.has')}
                X
                {t('riskassessment.conflicts')}
                <strong> B1.4 Dokumentliste.xlsx </strong>
              </td>
            </tr>

            <tr>
              <td className="table-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td className="table-type">
                <i className="far fa-clone" />
              </td>
              <td className="table-name">
                <strong> B1.1 Generell.pdf </strong>
                {t('riskassessment.has')}
                X
                {t('riskassessment.conflicts')}
                <strong> B1.4 Dokumentliste.xlsx </strong>
              </td>
            </tr>

            {/* Disagreement */}
            {/* Disagreement */}
            {/* Disagreement */}
            <tr>
              <td className="table-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td className="table-type">
                <i className="fas fa-exclamation-circle " />
              </td>
              <td className="table-name">
                <strong> B1.1 Generell.pdf </strong>
                {t('riskassessment.has')}
                X
                {t('riskassessment.conflicts')}
                <strong> B1.4 Dokumentliste.xlsx </strong>
              </td>
            </tr>

            <tr>
              <td className="table-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td className="table-type">
                <i className="fas fa-exclamation-circle " />
              </td>
              <td className="table-name">
                <strong> B1.1 Generell.pdf </strong>
                {t('riskassessment.has')}
                X
                {t('riskassessment.conflicts')}
                <strong> B1.4 Dokumentliste.xlsx </strong>
              </td>
            </tr>

            <tr>
              <td className="table-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td className="table-type">
                <i className="fas fa-exclamation-circle " />
              </td>
              <td className="table-name">
                <strong> B1.1 Generell.pdf </strong>
                {t('riskassessment.has')}
                X
                {t('riskassessment.conflicts')}
                <strong> B1.4 Dokumentliste.xlsx </strong>
              </td>
            </tr>

            <tr>
              <td className="table-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td className="table-type">
                <i className="fas fa-exclamation-circle " />
              </td>
              <td className="table-name">
                <strong> B1.1 Generell.pdf </strong>
                {t('riskassessment.has')}
                X
                {t('riskassessment.conflicts')}
                <strong> B1.4 Dokumentliste.xlsx </strong>
              </td>
            </tr>

            {/* Costly solution */}
            {/* Costly solution */}
            {/* Costly solution */}
            <tr>
              <td className="table-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td className="table-type">
                <i className="fas fa-dollar-sign" />
              </td>
              <td className="table-name">
                <strong> B1.1 Generell.pdf </strong>
                {t('riskassessment.has')}
                X
                {t('riskassessment.conflicts')}
                <strong> B1.4 Dokumentliste.xlsx </strong>
              </td>
            </tr>

            <tr>
              <td className="table-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td className="table-type">
                <i className="fas fa-dollar-sign" />
              </td>
              <td className="table-name">
                <strong> B1.1 Generell.pdf </strong>
                {t('riskassessment.has')}
                X
                {t('riskassessment.conflicts')}
                <strong> B1.4 Dokumentliste.xlsx </strong>
              </td>
            </tr>

            <tr>
              <td className="table-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td className="table-type">
                <i className="fas fa-dollar-sign" />
              </td>
              <td className="table-name">
                <strong> B1.1 Generell.pdf </strong>
                {t('riskassessment.has')}
                X
                {t('riskassessment.conflicts')}
                <strong> B1.4 Dokumentliste.xlsx </strong>
              </td>
            </tr>

            <tr>
              <td className="table-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td className="table-type">
                <i className="fas fa-dollar-sign" />
              </td>
              <td className="table-name">
                <strong> B1.1 Generell.pdf </strong>
                {t('riskassessment.has')}
                X
                {t('riskassessment.conflicts')}
                <strong> B1.4 Dokumentliste.xlsx </strong>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <div className="level">
        <div className="level-lef">
          <p className="level-item">
            <button type="button" className="btn">Fjerne</button>
          </p>
        </div>
        <div className="level-right">
          <p className="level-item"><button type="button" className="btn">Avbryt</button></p>
          <p className="level-item"><button type="button" className="btn">Opprett project</button></p>
        </div>

      </div>
    </section>
  );
}

export default Overview;
