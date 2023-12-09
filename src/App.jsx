// import React from 'react'
// import UseState from './Components/UseState'
// import UseEffect from './Components/UseEffect'

// function App() {
//   return (
//     <div>
//       <UseState />
//       <UseEffect />
//     </div>
//   )
// }

// export default App

import React from 'react'
import { useState } from 'react';
import './App.css';
import UseContext from './Components/UseContext';


export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext />
    </ToggleTheme.Provider>
  );
}

export default App;

