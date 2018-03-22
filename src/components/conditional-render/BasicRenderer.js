import React from 'react';
// import PropTypes from 'prop-types';
import { oneOrManyChildElements } from '../../prop-types';

export default class BasicRenderer extends React.Component {
  static propTypes = {
    children: oneOrManyChildElements,
  }

  static defaultProps = {
  }


  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
