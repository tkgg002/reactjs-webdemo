/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../css/GlobalNavigation.css';
import { useTranslation } from 'react-i18next';
import TranslationComponent from './TranslationComponent';
import UserSettingsComponent from './UserSettingsComponent';

/**
 * This component uses the Bulma design for a navbar.
 * @returns a navbar that lets you select language, and go to user profile and home page
 */
function GlobalNavigation() {
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">

      {/* Add onclick to the div when you know what to do */}
      <div className="navbar-brand column is-3" style={{ cursor: 'pointer' }} onClick={() => window.location.href = ''} onKeyDown={() => window.location.href = ''}>
        <a className="navbar-item" href="/">
          <p className="consigliLogo">
            CONSIGLI
          </p>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <span className="navbar-item">
            {t('anbudsunderlag')}
          </span>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <TranslationComponent />
              <UserSettingsComponent />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default GlobalNavigation;
