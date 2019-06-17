import React from 'react';
import Helmet from 'react-helmet';
import hoistNonReactStatic from 'hoist-non-react-statics';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { rhythm } from './typography';
import 'prismjs/themes/prism.css';
import 'katex/dist/katex.min.css';
import './theme.css';

export const layoutCss = {
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: `0 ${rhythm(0.5)}`,
  maxWidth: rhythm(32),
};

const Layout = ({ children, fluid = false }) => (
  <section>
    <Helmet>
      <html lang="zh-hant"/>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Helmet>
    <Header />
    <div style={fluid ? {} : layoutCss}>
    { children }
    </div>
    <Footer />
  </section>
)

export const withLayout = (Component) => {
  const C = (props) => (
    <Layout>
      <Component {...props} />
    </Layout>
  )
  C.dispalyName = `withLayout(${Component.displayName || Component.name})`;
  C.WrappedComponent = Component;

  return hoistNonReactStatic(C, Component);
}

export default Layout;
