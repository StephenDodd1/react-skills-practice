import React from 'react';

const appContext = React.createContext({
   header: 'Context Header',
   content: 'Child Context Property',
   newIndex: 0,
   appObject: [
      {name: 'one'},
      {name: 'two'},
      {name: 'three'}
   ]
})

export default appContext;