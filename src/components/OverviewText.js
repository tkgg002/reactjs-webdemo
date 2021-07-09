/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';

import '../css/App.css';
import '../css/RiskAssessmentTable.css';
import '../../node_modules/bulma/css/bulma.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';

/**
 * This component uses the Bulma design for a navbar.
 * @returns a navbar that lets you select list size, and search for documents.
 */
function ProjectTitleComponent() {
  const { t } = useTranslation();

  return (
    <div id="overviewText">
      <h4 className="title is-4">{t('createproject.overview')}</h4>
    </div>
  );
}

export default ProjectTitleComponent;
