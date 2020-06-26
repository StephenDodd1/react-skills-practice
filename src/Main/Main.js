import React, { Component } from 'react';
import appContext from '../appContext/appContext';

export default class Main extends Component {
   state = {
      newIndex: this.context.newIndex
   }
   static contextType = appContext;

   changeNum = () => {
      this.setState((previousState)=>{
         return {newIndex: previousState.newIndex + 1}
   })}
   
   render() {
      const contextValue = {
         newIndex: this.state.newIndex
      }
      const a = this.context.appObject;
      const b = a.map((c) => c )
      return (
         <div className='main-container'>
            <appContext.Provider value={contextValue}>
               <button onClick={(e) => this.changeNum(e)} >{b[this.state.newIndex]}</button>
            </appContext.Provider>
         </div>
      )
   }
}