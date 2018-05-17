import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import { injectGlobal } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import 'prismjs/themes/prism-okaidia.css';

injectGlobal`
  body {
    font-family: 'Libre Baskerville', serif !important;
  }
`

export default ({ children }) => (
  <div>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville" rel="stylesheet" />
    </Helmet>
    <Header />
    { children() }
  </div>
)
