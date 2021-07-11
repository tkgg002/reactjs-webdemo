/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import qs from 'qs';
import '../css/Uploading.css';

function Uploading(props) {
  const { location = { search: '?' } } = props || {};
  const { name = '' } = qs.parse(location.search.length ? location.search.substring(1) : '') || {};
  let fileInputRef = null;

  const onUpload = () => {
    fileInputRef.click();
  };

  const onInputFileChanged = () => {
    if (fileInputRef && fileInputRef.files && fileInputRef.files.length) {
      const file = fileInputRef.files[0];
      // eslint-disable-next-line no-alert
      alert(`"${file.name}" has been uploaded`);
      window.location.href = '/newproject/overview';
    }
  };

  return (
    <section>
      <h1 className="column title"><span>{name}</span></h1>
      <div className="container">
        <div className="upload" onClick={onUpload}>
          <i className="fas fa-download" />
          <br />
          <span>Slipp filer her</span>
        </div>
        <form encType="multipart/form-data">
          <input ref={(ref) => { fileInputRef = ref; }} onChange={onInputFileChanged} type="file" name="file" />
          <input onClick={onUpload} className="button" type="button" value="Last opp filer" />
        </form>
      </div>
    </section>
  );
}

export default Uploading;
