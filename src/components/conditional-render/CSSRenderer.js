import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { oneOrManyChildElements } from '../../prop-types';

export default class CSSRenderer extends React.Component {
  static propTypes = {
    children: oneOrManyChildElements,
    isDisplaying: PropTypes.bool,
  }

  static defaultProps = {
    isDisplaying: true,
  }

  render() {
    return (
      <div
        className={classnames(this.stylesComponent, {
          [`${this.stylesDisplay}`]: this.props.isDisplaying,
        })}
      >
        <div className={this.stylesChildren}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
