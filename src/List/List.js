import React, { Component } from 'react';
import appContext from '../appContext/appContext';
import Main from '../Main/Main';

export default class List extends Component {
   static contextType = appContext;

   render() {
      const arr = this.context.appObject;
      const obj = arr.map((item, i) => <li key={`'${i}'`} >{item}</li>
      );
      return (
         <div className='list-container'>
            <ul>
               {obj}
               <Main object={obj}/>
            </ul>
         </div>
      )
   }
}