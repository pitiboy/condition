import React from 'react';
import PropTypes from 'prop-types';
import { RenderContainer } from '../../../src/components/conditional-render';

import { oneOrManyChildElements } from '../../../src/prop-types';

export default class StaticExample extends React.Component {
  static propTypes = {
    children: oneOrManyChildElements,
    renderAllValid: PropTypes.bool,
    renderAllOther: PropTypes.bool,
    rendererComponent: PropTypes.func,
  }

  render() {
    return (
      <RenderContainer
        renderAllValid={this.props.renderAllValid}
        renderAllOther={this.props.renderAllOther}
        rendererComponent={this.props.rendererComponent}
      >
        {this.props.children}
      </RenderContainer>
    );
  }
}
