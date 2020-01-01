import React from 'react';
import ReactDOM from 'react-dom';

// Your top level component
import App from './App';

// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== 'undefined') {
  const target = document.getElementById('root');

  const renderMethod =
    target && target.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;

  const render = (Component: Function) => {
    renderMethod(<Component />, target);
  };

  // Render!
  render(App);

  // Hot Module Replacement

  /* 
    For some reason the module.hot is failing typechecking even though
    the recommend solutions online are being followed: namely installing the 
    @types/node and @types/webpack-env packages. Using the 'any' hack below to
    work around things
  */

  /* eslint-disable @typescript-eslint/no-explicit-any */
  if (module && (module as any).hot) {
    (module as any).hot.accept('./App', () => {
      render(App);
    });
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */
}
