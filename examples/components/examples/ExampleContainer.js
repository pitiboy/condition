import React from 'react';

import SimpleExample from './SimpleExample';
import StaticExample from './StaticExample';
import IntervalExample from './IntervalExample';
import ConfigurableExample from './ConfigurableExample';
import RenderSettings from '../settings/RenderSettings';
import { FadingRenderer } from '../../../src/components/conditional-render';

import styles from './ExampleContainer.scss';

export default class ExampleContainer extends React.Component {

  state = {
    renderAllValid: true,
    renderAllOther: false,
    rendererComponent: null,
  }

  get getRendererComponent() {
    switch (this.state.rendererComponent) {
    case '': return null;
    case 'FadingRenderer': return FadingRenderer;
    case '#FadingRenderer': return FadingRenderer;
    default: return this.state.rendererComponent;
    }
  }

  setContainerParameter({ id, value }) {
    this.setState({ [`${id}`]: value });
  }

  render() {
    return (
      <div className={styles.component}>
        <h2>Examples</h2>

        <h3>Static example</h3>
        <SimpleExample
          renderAllValid={this.state.renderAllValid}
          renderAllOther={this.state.renderAllOther}
          rendererComponent={this.getRendererComponent}
        />
        <div className={styles.placeHolder} style={{ clear: 'both' }} />

        <div>
          <div style={{ float: 'left', width: '70vw' }}>

            <h3>Automatic example</h3>
            <IntervalExample
              renderAllValid={this.state.renderAllValid}
              renderAllOther={this.state.renderAllOther}
              rendererComponent={this.getRendererComponent}
            />
          </div>

          <div style={{ float: 'right', width: '25vw' }}>
            <h4>Renderer Settings:</h4>
            <RenderSettings
              renderAllValid={this.state.renderAllValid}
              renderAllOther={this.state.renderAllOther}
              rendererComponent={this.state.rendererComponent}
              setContainerParameter={e => this.setContainerParameter(e)}
              items={this.state.items}
              // updateItem={() => this.updateItem()}
            />
          </div>
        </div>
        <div className={styles.placeHolder} style={{ clear: 'both' }} />


        <h3>Example having multiple ELSEs </h3>
        <StaticExample
          renderAllValid={this.state.renderAllValid}
          renderAllOther={this.state.renderAllOther}
          rendererComponent={this.getRendererComponent}
        >
          <div condition={'23' === 2}>if? alpha</div> {/* not rendered, as condition is false */}
          <span condition={new Date().getDay() === 11}>if? beta</span> {/* not rendered, as condition is false */}
          <p condition={isNaN('999')}>if? gamma</p> {/* not rendered, as condition is false */}
          <div condition={false}>if? delta</div> {/* not rendered, as condition is false */}
          <div>phi</div> {/* not rendered, as condition is false */}
          <h5 renderIfNoValid>else: upsilon</h5> {/* rendered, as the first ELSE */}
          <h5 renderIfNoValid>else: phi</h5> {/* rendered, only if renderAllOther is true */}
          <h5 renderIfNoValid>else: chi</h5> {/* rendered, only if renderAllOther is true */}
          <h5 renderIfNoValid>else: psi</h5> {/* rendered, only if renderAllOther is true */}
          <h5 renderIfNoValid>else: omega</h5> {/* rendered, only if renderAllOther is true */}
        </StaticExample>
        <div className={styles.placeHolder} style={{ clear: 'both' }} />


        <ConfigurableExample
          renderAllValid={this.state.renderAllValid}
          renderAllOther={this.state.renderAllOther}
          rendererComponent={this.getRendererComponent}
        />
        <div className={styles.placeHolder} style={{ clear: 'both' }} />

      </div>
    );
  }
}
