import React from 'react';
import Popup from 'reactjs-popup';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';
import 'reactjs-popup/dist/index.css';
import '../css/PopupNewProject.css';

function PopupNewProject(props) {
  const { t } = useTranslation();
  const { open = false, onClose = null } = props || {};
  const [cookies, setCookie, removeCookie] = useCookies(['isCreateProject']);
  let formRef = null;

  const submitForm = () => {
    setCookie('isCreateProject', '1', { path: '/' });
    console.log(cookies);
    formRef.submit();
  };
  const resetPage = () => {
    removeCookie('isCreateProject', { path: '/' });
    console.log(cookies);
    formRef.submit();
  };
  if (cookies.isCreateProject) {
    return (
      <Popup open={open} modal onClose={onClose}>
        {(close) => (
          <div className="popup-modal popup-modal-new-project">
            <button type="button" className="close" onClick={close}>
              &times;
            </button>
            <div className="header">{t('landingpage.projectexistence')}</div>
            <div className="content">
              <form
                action="/"
                ref={(ref) => { formRef = ref; }}
              >
                <div className="actions">
                  <button
                    type="button"
                    className="button"
                    onClick={() => {
                      close();
                      resetPage();
                    }}
                  >
                    Exit Page
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Popup>
    );
  }
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
