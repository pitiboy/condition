import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-bootstrap';

import styles from './RenderSettings.scss';

export default class ChildrenSettings extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  }

  static defaultProps = {
  }

  render() {
    const conditionalCheckboxes = this.props.items.filter(item => typeof item.renderIfNoValid === 'undefined').map((item, index) => ({
      id: index,
      label: item.label,
      checked: item.condition,
      value: index,
      onChange: e => this.props.onChange({ id: index, value: e.target.checked }),
    }));

    return (
      <div className={styles.component}>
        {conditionalCheckboxes.map((checkbox, index) => (
          <Checkbox key={index} {...checkbox}>{checkbox.label}</Checkbox>
        ))}
      </div>
    );
  }
}
