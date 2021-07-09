/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';

import '../css/App.css';
import '../css/ProjectTitleComponent.css';
import '../../node_modules/bulma/css/bulma.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
/**
 * This component uses the Bulma design for a navbar.
 * @returns a navbar that lets you select list size, and search for documents.
 */
function ProjectTitleComponent() {
  const { t } = useTranslation();
  let fileInputRef = null;

  const onUpload = () => {
    fileInputRef.click();
  };

  const onInputFileChanged = () => {
    if (fileInputRef && fileInputRef.files && fileInputRef.files.length) {
      const file = fileInputRef.files[0];
      // eslint-disable-next-line no-alert
      alert(`"${file.name}" has been uploaded`);
      window.location.href = '/riskassessment/largelist';
    }
  };
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">

      <div className="navbar-brand column is-3">
        <p className="projectTitle">{t('landingpage.projecttitle')}</p>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <span className="navbar-item" />
          <form encType="multipart/form-data" className="Uploading">
            <input ref={(ref) => { fileInputRef = ref; }} onChange={onInputFileChanged} type="file" name="file" />
            <button onClick={onUpload} type="button" className="button btn-download" aria-haspopup="true" aria-controls="dropdown-menu3">
              <i className="fas fa-download" />
              Last opp filer
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default ProjectTitleComponent;
