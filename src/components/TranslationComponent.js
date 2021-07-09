/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/App.css';
import '../../node_modules/bulma/css/bulma.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../i18n';

/**
 * This component uses the Bulma design for a dropdown button.
 * @returns a dropdown where you can select which language the app should be in
 */
function TranslationComponent() {
  const { t, i18n } = useTranslation();

  return (
    <div className="translationComponent">

      {/* Language selector dropdown */}
      <div className="dropdown is-hoverable is-right" data-testid="language">

        {/* First visible element in dropdown */}
        <div className="dropdown-trigger">
          {/* eslint-disable-next-line react/button-has-type */}
          <button className="button is-white" aria-haspopup="true" aria-controls="dropdown-menu3">
            <span className="icon">
              <i className="fas fa-globe fa-lg" id="globe" />
            </span>
          </button>
        </div>

        {/* Elements that appear when you hover dropdown menu */}
        <div className="dropdown-menu" id="dropdown-menu3" role="menu">
          <div className="dropdown-content">

            <div className="dropdown-item">
              <p id="dropdownText">{t('language')}</p>
            </div>
            <hr className="dropdown-divider" />

            <a data-testid="norsk" href="#" onClick={() => i18n.changeLanguage('no')} className={i18n.language === 'no' ? 'dropdown-item is-active' : 'dropdown-item'}>
              Norsk
            </a>

            <a data-testid="english" href="#" onClick={() => i18n.changeLanguage('en')} className={i18n.language === 'en' ? 'dropdown-item is-active' : 'dropdown-item'}>
              English
            </a>

          </div>
        </div>

      </div>

    </div>
  );
}

export default TranslationComponent;
