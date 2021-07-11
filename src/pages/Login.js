import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import TranslationComponent from '../components/TranslationComponent';
import '../css/login.css';

function Login() {
  let formRef = null;
  const [email, setEmail] = useState('');
  const [cookies, setCookie] = useCookies(['isLogin', 'email']);

  console.log(formRef);
  const submitForm = () => {
    setCookie('isLogin', '1', { path: '/' });
    setCookie('email', email, { path: '/' });
    console.log(cookies);
  };

  return (
    <div className="login-page">
      <div className="translation">
        <TranslationComponent />
      </div>
      <section className="main">
        <section className="hero">
          <div className="hero-body">
            <h1 className="title">
              CONSIGLI
            </h1>
            <p className="subtitle">
              Anbudsunderlagssjekker
            </p>
          </div>
        </section>
        <form className="login-form" ref={(ref) => { formRef = ref; }} action="/landing">
          <input className="epost" name="email" type="text" placeholder=" Skriv inn epost" value={email} onInput={(e) => setEmail(e.target.value)} />
          <br />
          <input className="button" type="submit" value="Tilgang" onClick={() => submitForm()} />
        </form>
      </section>
    </div>
  );
}

export default Login;
