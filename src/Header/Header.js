import React, { Component } from 'react';
import appContext from '../appContext/appContext';

export default class Header extends Component {
   constructor(props) {
      super(props);
   }
   static contextType = appContext;

   render() {
      return(
         <header className="App-header">
            <h1 >{this.context.header}</h1>
         </header>
      )
   }
}
