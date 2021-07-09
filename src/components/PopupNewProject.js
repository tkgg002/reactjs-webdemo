import React from 'react';
import Popup from 'reactjs-popup';
import { useTranslation } from 'react-i18next';
import 'reactjs-popup/dist/index.css';
import '../css/PopupNewProject.css';

function PopupNewProject(props) {
  const { t } = useTranslation();
  const { open = false, onClose = null } = props || {};

  let formRef = null;

  const submitForm = () => {
    formRef.submit();
  };

  return (
    <Popup open={open} modal onClose={onClose}>
      {(close) => (
        <div className="popup-modal popup-modal-new-project">
          <button type="button" className="close" onClick={close}>
            &times;
          </button>
          <div className="header">{t('landingpage.newproject')}</div>
          <div className="content">
            <form
              action="/newproject"
              ref={(ref) => { formRef = ref; }}
            >
              <input type="text" name="name" placeholder="New project" required />
            </form>
          </div>
          <div className="actions">
            <button
              type="button"
              className="button"
              onClick={() => {
                close();
                submitForm();
              }}
            >
              New project
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default PopupNewProject;
