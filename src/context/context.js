import React from 'react';

const appContext = React.createContext({
   header: 'Context Header',
   content: 'Child Context Property',
   appObject: [
      'one',
      'two',
      'three'
   ]
})

export default appContext;