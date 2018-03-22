import React from 'react';
import PropTypes from 'prop-types';
import { oneOrManyChildElements } from '../../src/prop-types';

export default class SampleComponent extends React.Component {
  static propTypes = {
    children: oneOrManyChildElements,
    text: PropTypes.string,
  }

  static defaultProps = {
  }

  render() {
    const { text, children } = this.props;
    return (
      <div style={{ border: 'solid 1px gray', margin: '10px', padding: '10px' }}>
        {text && (
          <h1>{text}</h1>
        )}
        {children && (
          <div>
            {children}
          </div>
        )}
      </div>
    );
  }
}
