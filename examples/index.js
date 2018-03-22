import React from 'react';
import { render } from 'react-dom';

import App from './App';

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
