import React from 'react';
import { Container } from 'react-bootstrap';
import { Header,Sidebar } from '.';

import './styles/styles.css';

const Layout = ({ children }) =>
  <div>
    <Header className="header"/>
    <div className="layout">
      <aside className="aside">
        <Sidebar />
      </aside>
      <Container className="main">
        {children}
      </Container>
    </div>
  </div>
;

export default Layout;
