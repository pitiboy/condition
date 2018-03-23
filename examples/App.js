import React from 'react';

import ExampleContainer from './components/examples/ExampleContainer';

export default function App() {
  return (
    <div>

      <h1>{ENV.application.title}</h1>

      <p>
        See Project at Github: <a href="https://github.com/pitiboy/react-conditional-render" target="_blank" rel="noopener noreferrer">https://github.com/pitiboy/react-conditional-render</a>
      </p>

      <ExampleContainer />
      {/*

      <h3>renderIfNoValid && renderAllOther = false</h3>
      <p><i>displaying only 1 renderIfNoValid:</i></p>
      <RenderContainer>
        <div condition={false}>IF</div>
        <h5 renderIfNoValid>ELSE!</h5>
        <div condition={false}>second</div>
        <h5 renderIfNoValid>ELSE2!</h5>
        <div condition={'2'===2}>third</div>
        <div condition={null}>fourth</div>
        <h5 renderIfNoValid>ELSE3!</h5>
      </RenderContainer>

      <h3>renderIfNoValid && renderAllOther = true</h3>
      <p><i>displaying all renderIfNoValid:</i></p>
      <RenderContainer renderAllOther rendererComponent={FadingRenderer}>
        <h5 renderIfNoValid>ELSE!</h5>
        <div condition={false}>IF</div>
        <div condition={false}>second</div>
        <h5 renderIfNoValid>ELSE2!</h5>
        <div condition={'2'===2}>third</div>
        <div condition={null}>fourth</div>
        <h5 renderIfNoValid>ELSE3!</h5>
      </RenderContainer> */}


    </div>

  );
}
