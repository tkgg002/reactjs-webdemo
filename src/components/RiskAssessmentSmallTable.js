/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import '../css/RiskAssessmentTable.css';

function RiskAssessmentSmallTable() {
  const { t } = useTranslation();

  function updateState() {
    const [value, setValue] = useState(0);

    return () => setValue(!value);
  }

  function selectAllCheckbox() {
    const checkboxes = document.getElementsByClassName('table-checkbox');

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

  /** First flip arrow, and flip other arrows so that only one points down
   * TODO: Sort in backend and retrieve
   */
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

  /** First flip arrow, and flip other arrows so that only one points down
   * TODO: Sort in backend and retrieve
  */
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

    // Flips arrow according to if it points upwards or downwards
    sortArrow.className = arrowIsUp ? 'fas fa-sort-down' : 'fas fa-sort-up';
  }

  /** First flip arrow, and flip other arrows so that only one points down
   * TODO: Sort in backend and retrieve
  */
  function sortByStatus() {
    const sortArrow = document.getElementById('sortStatus');
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

  return (
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
            <th className="table-status">
              <a href="#" onClick={() => sortByStatus()}>
                {t('riskassessment.status')}
                <i className="fas fa-sort-up" id="sortStatus" />
              </a>
            </th>
            <th className="table-display"> </th>
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
              <i className="fas fa-sync" />
            </td>
            <td className="table-name">
              <strong> B1.1 Generell.pdf </strong>
              {t('riskassessment.has')}
              X
              {t('riskassessment.conflicts')}
              <strong> B1.4 Dokumentliste.xlsx </strong>

            </td>
            <td className="table-status">
              <label className="table-status-active">
                <i className="fas fa-circle" />
                {' '}
                {t('riskassessment.states.active')}
              </label>
            </td>
            <td className="table-display">
              <i className="fas fa-ellipsis-h" />
            </td>
          </tr>

          <tr>
            <td className="table-checkbox">
              <label className="checkbox">
                <input type="checkbox" />
              </label>
            </td>
            <td className="table-type">
              <i className="fas fa-sync" />
            </td>
            <td className="table-name">
              <strong> B1.1 Generell.pdf </strong>
              {t('riskassessment.has')}
              X
              {t('riskassessment.conflicts')}
              <strong> B1.4 Dokumentliste.xlsx </strong>

            </td>
            <td className="table-status">
              <label className="table-status-active">
                <i className="fas fa-circle" />
                {' '}
                {t('riskassessment.states.active')}
              </label>
            </td>
            <td className="table-display">
              <i className="fas fa-ellipsis-h" />
            </td>
          </tr>

          <tr>
            <td className="table-checkbox">
              <label className="checkbox">
                <input type="checkbox" />
              </label>
            </td>
            <td className="table-type">
              <i className="fas fa-sync" />
            </td>
            <td className="table-name">
              <strong> B1.1 Generell.pdf </strong>
              {t('riskassessment.has')}
              X
              {t('riskassessment.conflicts')}
              <strong> B1.4 Dokumentliste.xlsx </strong>

            </td>
            <td className="table-status">
              <label className="table-status-active">
                <i className="fas fa-circle" />
                {' '}
                {t('riskassessment.states.active')}
              </label>
            </td>
            <td className="table-display">
              <i className="fas fa-ellipsis-h" />
            </td>
          </tr>

          <tr>
            <td className="table-checkbox">
              <label className="checkbox">
                <input type="checkbox" />
              </label>
            </td>
            <td className="table-type">
              <i className="fas fa-sync" />
            </td>
            <td className="table-name">
              <strong> B1.1 Generell.pdf </strong>
              {t('riskassessment.has')}
              X
              {t('riskassessment.conflicts')}
              <strong> B1.4 Dokumentliste.xlsx </strong>

            </td>
            <td className="table-status">
              <label className="table-status-active">
                <i className="fas fa-circle" />
                {' '}
                {t('riskassessment.states.active')}
              </label>
            </td>
            <td className="table-display">
              <i className="fas fa-ellipsis-h" />
            </td>
          </tr>

          <tr>
            <td className="table-checkbox">
              <label className="checkbox">
                <input type="checkbox" />
              </label>
            </td>
            <td className="table-type">
              <i className="fas fa-sync" />
            </td>
            <td className="table-name">
              <strong> B1.1 Generell.pdf </strong>
              {t('riskassessment.has')}
              X
              {t('riskassessment.conflicts')}
              <strong> B1.4 Dokumentliste.xlsx </strong>
            </td>
            <td className="table-status">
              <label className="table-status-active">
                <i className="fas fa-circle" />
                {' '}
                {t('riskassessment.states.active')}
              </label>
            </td>
            <td className="table-display">
              <i className="fas fa-ellipsis-h" />
            </td>
          </tr>

          <tr>
            <td className="table-checkbox">
              <label className="checkbox">
                <input type="checkbox" />
              </label>
            </td>
            <td className="table-type">
              <i className="fas fa-sync" />
            </td>
            <td className="table-name">
              <strong> B1.1 Generell.pdf </strong>
              {t('riskassessment.has')}
              X
              {t('riskassessment.conflicts')}
              <strong> B1.4 Dokumentliste.xlsx </strong>
            </td>
            <td className="table-status">
              <label className="table-status-active">
                <i className="fas fa-circle" />
                {' '}
                {t('riskassessment.states.active')}
              </label>
            </td>
            <td className="table-display">
              <i className="fas fa-ellipsis-h" />
            </td>
          </tr>

          <tr>
            <td className="table-checkbox">
              <label className="checkbox">
                <input type="checkbox" />
              </label>
            </td>
            <td className="table-type">
              <i className="fas fa-sync" />
            </td>
            <td className="table-name">
              <strong> B1.1 Generell.pdf </strong>
              {t('riskassessment.has')}
              X
              {t('riskassessment.conflicts')}
              <strong> B1.4 Dokumentliste.xlsx </strong>
            </td>
            <td className="table-status">
              <label className="table-status-active">
                <i className="fas fa-circle" />
                {' '}
                {t('riskassessment.states.active')}
              </label>
            </td>
            <td className="table-display">
              <i className="fas fa-ellipsis-h" />
            </td>
          </tr>

          <tr>
            <td className="table-checkbox">
              <label className="checkbox">
                <input type="checkbox" />
              </label>
            </td>
            <td className="table-type">
              <i className="fas fa-sync" />
            </td>
            <td className="table-name">
              <strong> B1.1 Generell.pdf </strong>
              {t('riskassessment.has')}
              X
              {t('riskassessment.conflicts')}
              <strong> B1.4 Dokumentliste.xlsx </strong>
            </td>
            <td className="table-status">
              <label className="table-status-waiting">
                <i className="fas fa-circle" />
                {' '}
                {t('riskassessment.states.waiting')}
              </label>
            </td>
            <td className="table-display">
              <i className="fas fa-ellipsis-h" />
            </td>
          </tr>

          <tr>
            <td className="table-checkbox">
              <label className="checkbox">
                <input type="checkbox" />
              </label>
            </td>
            <td className="table-type">
              <i className="fas fa-sync" />
            </td>
            <td className="table-name">
              <strong> B1.1 Generell.pdf </strong>
              {t('riskassessment.has')}
              X
              {t('riskassessment.conflicts')}
              <strong> B1.4 Dokumentliste.xlsx </strong>
            </td>
            <td className="table-status">
              <label className="table-status-waiting">
                <i className="fas fa-circle" />
                {' '}
                {t('riskassessment.states.waiting')}
              </label>
            </td>
            <td className="table-display">
              <i className="fas fa-ellipsis-h" />
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
            <td className="table-status">
              <label className="table-status-active">
                <i className="fas fa-circle" />
                {' '}
                {t('riskassessment.states.active')}
              </label>
            </td>
            <td className="table-display">
              <i className="fas fa-ellipsis-h" />
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
            <td className="table-status">
              <label className="table-status-active">
                <i className="fas fa-circle" />
                {' '}
                {t('riskassessment.states.active')}
              </label>
            </td>
            <td className="table-display">
              <i className="fas fa-ellipsis-h" />
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
            <td className="table-status">
              <label className="table-status-active">
                <i className="fas fa-circle" />
                {' '}
                {t('riskassessment.states.active')}
              </label>
            </td>
            <td className="table-display">
              <i className="fas fa-ellipsis-h" />
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
            <td className="table-status">
              <label className="table-status-active">
                <i className="fas fa-circle" />
                {' '}
                {t('riskassessment.states.active')}
              </label>
            </td>
            <td className="table-display">
              <i className="fas fa-ellipsis-h" />
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
            <td className="table-status">
              <label className="table-status-active">
                <i className="fas fa-circle" />
                {' '}
                {t('riskassessment.states.active')}
              </label>
            </td>
            <td className="table-display">
              <i className="fas fa-ellipsis-h" />
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
            <td className="table-status">
              <label className="table-status-active">
                <i className="fas fa-circle" />
                {' '}
                {t('riskassessment.states.active')}
              </label>
            </td>
            <td className="table-display">
              <i className="fas fa-ellipsis-h" />
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
            <td className="table-status">
              <label className="table-status-active">
                <i className="fas fa-circle" />
                {' '}
                {t('riskassessment.states.active')}
              </label>
            </td>
            <td className="table-display">
              <i className="fas fa-ellipsis-h" />
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
            <td className="table-status">
              <label className="table-status-waiting">
                <i className="fas fa-circle" />
                {' '}
                {t('riskassessment.states.waiting')}
              </label>
            </td>
            <td className="table-display">
              <i className="fas fa-ellipsis-h" />
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default RiskAssessmentSmallTable;
