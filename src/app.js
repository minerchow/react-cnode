import React, { Component } from 'react';
import { render } from 'react-dom';
import Index from '../src/components/index/index';
import { Router, Route, hashHistory } from 'react-router';
import './common.less';
render((
  <Router history={hashHistory}>
    <Route path="/" component={Index}/>
    
  </Router>
), document.getElementById('react-app'))
