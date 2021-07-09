/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../css/App.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';

/**
 * This component uses the Bulma design for a dropdown button.
 * @returns a dropdown where you can select which language the app should be in
 */
function UserSettingsComponent() {
  return (
    <div className="translationComponent" style={{ marginRight: '30px' }}>

      {/* Language selector dropdown */}
      <div className="dropdown is-hoverable is-right" data-testid="language">

        {/* First visible element in dropdown */}
        <div className="dropdown-trigger">
          {/* eslint-disable-next-line react/button-has-type */}
          <button className="button is-white" aria-haspopup="true" aria-controls="dropdown-menu3">
            <span className="icon">
              <i className="far fa-user-circle fa-lg" />
            </span>
          </button>
        </div>

        {/* Elements that appear when you hover dropdown menu */}
        <div className="dropdown-menu" id="dropdown-menu3" role="menu">
          <div className="dropdown-content">

            <div className="dropdown-item">
              <p id="dropdownText">Brukerprofil</p>
            </div>
            <hr className="dropdown-divider" />

            <a href="#" className="dropdown-item">
              Bruker
            </a>

            <a href="#" className="dropdown-item">
              Innstillinger
            </a>

          </div>
        </div>

      </div>

    </div>
  );
}

export default UserSettingsComponent;
