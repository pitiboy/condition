import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { oneOrManyChildElements } from '../../prop-types';

import styles from './FadingRenderer.scss';

export default class FadingRenderer extends React.Component {
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
        className={classnames(styles.component, {
          [`${styles.display}`]: this.props.isDisplaying,
        })}
      >
        <div className={styles.children}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
