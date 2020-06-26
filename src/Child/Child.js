import React, { Component } from 'react';
import appContext from '../appContext/appContext'

export default class Child extends Component {
   static contextType = appContext;
   render() {
      return (
         <div className='child-container'>
            <p>{this.context.content}</p>
         </div>
   )}
}