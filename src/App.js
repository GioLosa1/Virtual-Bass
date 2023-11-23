

import React, { Suspense, lazy } from 'react';

const Bassneck = lazy(() => import('./components/Bass-neck'));

function App() {
  return (
    <div className="App">
      <div className="img-div">
        <img className="img-head" src= {process.env.PUBLIC_URL + "/sterling.png"}
         />
      
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Bassneck />
      </Suspense>
    </div>
  );
}

export default App;