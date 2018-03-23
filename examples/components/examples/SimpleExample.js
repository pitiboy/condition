import React from 'react';
import { RenderContainer, FadingRenderer } from '../../../src/components/conditional-render';

export default class StaticExample extends React.Component {

  render() {
    return (
      <RenderContainer rendererComponent={FadingRenderer} >
        <div condition={'23' === 2}>alpha</div> {/* not rendered, as condition is false */}
        <span condition={new Date().getDay() === 11}>beta</span> {/* not rendered, as condition is false */}
        <p condition={isNaN('not a number!')}>gamma</p> {/* rendered! */}
        <div condition>delta</div> {/* rendered only if container has renderAllValid */}
        <h5 renderIfNoValid>omega</h5> {/* not rendered, as we have true conditions */}
      </RenderContainer>
    );
  }
}
