import React from 'react';
// import PropTypes from 'prop-types';
import { oneOrManyChildElements } from '../../prop-types';

export default class FadingRenderer extends React.Component {
  static propTypes = {
    children: oneOrManyChildElements,
  }

  static defaultProps = {
  }


  render() {
    return (
      <div style={{ opacity: '0.5', display: 'flex' }}>
        <div style={{ flex: '0.1', fontSize: '10px' }}>TODO fading correctly!</div>
        <div style={{ flex: '1' }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
