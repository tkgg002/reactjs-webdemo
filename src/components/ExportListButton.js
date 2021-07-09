import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * A simple button with some inline styling.
 * For exporting lists.
 * @returns button with background color and no border radius
 */
function ExportListButton() {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      className="button"
      style={{
        backgroundColor: '#272B4A',
        color: 'white',
        borderRadius: 0,
        border: 'none',
        marginLeft: 'auto',
        marginTop: '20px',
      }}
    >
      {t('riskassessment.exportlist')}
    </button>
  );
}

export default ExportListButton;
