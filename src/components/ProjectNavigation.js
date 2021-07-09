/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import { Navigation } from 'react-minimal-side-navigation';
import PopupNewProject from './PopupNewProject';
import '../css/ProjectNavigation.css';
import '../i18n';

/**
 * This component uses the Bulma design for a dropdown button.
 * @returns a dropdown where you can select which language the app should be in
 */
function ProjectNavigation() {
  const { t } = useTranslation();
  const [newProjectOpen, setNewProjectOpen] = useState(false);
  const closeNewProjectOpenModal = () => setNewProjectOpen(false);

  return (
    <div className="wrapper">

      {/* <div className="testDiv">
        <span className="testSpan">
          react-minimal-side-navigation
        </span>
      </div>
 */}
      <>
        <Navigation
          // you can use your own router's api to get pathname
          activeItemId="/"
          onSelect={({ itemId }) => {
            // maybe push to the route
            if (itemId === '/newproject') {
              setNewProjectOpen(true);
            } else if (itemId !== '/') {
              window.location.href = itemId;
            }
          }}
          items={[
            {
              title: t('landingpage.newproject'),
              itemId: '/newproject',
              // you can use your own custom Icon component as well
              // icon is optional
              elemBefore: () => <i className="fas fa-plus-circle" />,
            },
            {
              title: t('landingpage.recent'),
              itemId: '/',
              elemBefore: () => <i className="far fa-clock" />,
              subNav: [
                // TODO: Make this process dynamic
                {
                  title: t('landingpage.projecttitle'),
                  itemId: '/riskassessment/largelist',
                },
                {
                  title: t('landingpage.projecttitle'),
                  itemId: '/placeholder1',
                },
                {
                  title: t('landingpage.projecttitle'),
                  itemId: '/placeholder2',
                },
                {
                  title: t('landingpage.projecttitle'),
                  itemId: '/placeholder3',
                },
              ],
            },
          ]}
        />
      </>
      <PopupNewProject open={newProjectOpen} onClose={closeNewProjectOpenModal} />
    </div>
  );
}

export default ProjectNavigation;
