import React from 'react';
import { render } from 'react-dom';

import App from './App';

// const stores = storeFactory(actions);

window.addEventListener('load', () => {
  window.app = {
    render() {
      render(
        <App />,
        document.getElementById('root'));
    },
  };

  window.app.render();
});
