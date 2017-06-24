/**
 * Main component
 */

import React, {Component} from 'react';
import  BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import './app.scss';

/* eslint-disable no-console */

export default class App extends Component {
  render() {
    return(
      <div>
        <BookList/>
        <BookDetail/>
      </div>
    );
  }
}
