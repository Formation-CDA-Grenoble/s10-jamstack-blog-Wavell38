import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ArticlePage, HomePage, CategoryPage, SearchPage, CategoriesPage } from './pages';

const App = () =>
  <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/article/:slug' component={ArticlePage} />
        <Route exact path='/category/:slug' component={CategoryPage} />
        <Route exact path='/search/:argument' component={SearchPage} />
        <Route exact path='/categories/' component={CategoriesPage} />
      </Switch>
  </BrowserRouter>
;

export default App;
