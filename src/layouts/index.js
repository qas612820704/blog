import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { injectGlobal } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import 'prismjs/themes/prism-okaidia.css';
import 'katex/dist/katex.min.css';

injectGlobal`
  body {
    font-family: 'Libre Baskerville', serif !important;
  }
`

export default ({ children }) => (
  <div>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville" rel="stylesheet" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Helmet>
    <Header />
    { children() }
    <Footer />
  </div>
)
