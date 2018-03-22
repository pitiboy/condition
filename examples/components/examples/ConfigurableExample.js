import React from 'react';
import PropTypes from 'prop-types';
import { RenderContainer, FadingRenderer } from '../../../src/components/conditional-render';

import SampleComponent from '../sample/SampleComponent';
import Settings from '../settings/Settings';

console.log('TODO: use FadingRenderer', FadingRenderer);

export default class ConfigurableExample extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  }

  static defaultProps = {
  }

  state = {
    renderAllValid: false,
    renderAllOther: false,
    rendererComponent: '',
    items: [
      // floors:
      { condition: true, label: 'Component#Where do you ' },
      { condition: null, label: 'basement' },
      { condition: '2'===2, label: 'ground floor' },
      { condition: true, label: 'first floor' },
      { condition: false, label: 'second floor' },
      { condition: true, label: 'third floor' },
      // components
      { condition: true, label: 'Component#title' },
      { condition: false, label: 'Component#subtitle' },
      { condition: true, label: 'Component#complex' },
      // ELSEs
      { renderIfNoValid: true, label: 'Component#Else1' },
      { renderIfNoValid: true, label: 'Component#Else2' },
      { renderIfNoValid: true, label: 'Component#Else3' },
    ],
  }

  get getRendererComponent() {
    switch (this.state.rendererComponent) {
    case 'FadingRenderer': return FadingRenderer;
    case '#FadingRenderer': return FadingRenderer;
    default: return this.state.rendererComponent;
    }
  }

  setContainerParameter({ id, value }) {
    this.setState({ [`${id}`]: value });
  }

  render() {
    // console.log('state', this.state);
    return (
      <div>
        <div style={{ float: 'right', width: '30vw' }}>
          <Settings
            renderAllValid={this.state.renderAllValid}
            renderAllOther={this.state.renderAllOther}
            rendererComponent={this.state.rendererComponent}
            setContainerParameter={e => this.setContainerParameter(e)}
            items={this.state.items}
            // updateItem={() => this.updateItem()}
          />
        </div>

        <div style={{ float: 'left', width: '70vw' }}>
          <RenderContainer
            renderAllValid={this.state.renderAllValid}
            renderAllOther={this.state.renderAllOther}
            rendererComponent={this.getRendererComponent}
          >
            <h5 renderIfNoValid={this.state.items[9].renderIfNoValid}>ELSE: first match!</h5>

            <SampleComponent condition={this.state.items[0].condition}>Where do you spend most of your time?</SampleComponent>
            <div condition={this.state.items[1].condition}>basement</div>
            <div condition={this.state.items[2].condition}>ground floor</div>
            <div condition={this.state.items[3].condition}>first floor</div>
            <div condition={this.state.items[4].condition}>second floor</div>
            <div condition={this.state.items[5].condition}>third floor</div>

            <h5 condition renderIfNoValid={this.state.items[9].renderIfNoValid}>ELSE2: to demonstrate that <b>renderIfNoValid</b> is stronger thant <b>condition</b>!</h5>

            <SampleComponent condition={this.state.items[6].condition} text="This is a big title" />
            <SampleComponent condition={this.state.items[7].condition}>This is subtitle</SampleComponent>
            <SampleComponent condition={this.state.items[8].condition}>
              <SampleComponent>
                <div style={{ backgroundColor: '#f8f8f8' }}>
                  <SampleComponent text="More complex object" />
                  <div style={{ display: 'flex' }}>
                    <li>Which</li><li>has</li><li>some</li><li>structure</li>
                  </div>
                </div>
              </SampleComponent>
            </SampleComponent>

            <h5 renderIfNoValid={this.state.items[9].renderIfNoValid}>ELSE3: last else!</h5>
          </RenderContainer>
        </div>
      </div>

    );
  }
}
