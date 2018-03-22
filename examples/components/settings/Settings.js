import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, Checkbox, FormControl, HelpBlock } from 'react-bootstrap';
import { oneOrManyChildElements, functionOrStringText } from '../../../src/prop-types';

import styles from './Settings.scss';

const SelectRenderer = props => (
  <FormGroup controlId={props.id}>
    <ControlLabel>{props.label}</ControlLabel>
    <FormControl componentClass="select" placeholder="select" value={props.value} onChange={props.onChange}>
      {props.children}
    </FormControl>
    {props.help && <HelpBlock>{props.help}</HelpBlock>}
  </FormGroup>
);
SelectRenderer.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: functionOrStringText,
  help: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: oneOrManyChildElements,
};

export default class Settings extends React.Component {
  static propTypes = {
    // children: oneOrManyChildElements,
    setContainerParameter: PropTypes.func.isRequired,
    renderAllValid: PropTypes.bool.isRequired,
    renderAllOther: PropTypes.bool.isRequired,
    rendererComponent: functionOrStringText,
    // items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  }

  static defaultProps = {
  }

  render() {
    const {
      renderAllValid,
      renderAllOther,
      rendererComponent,
    } = this.props;


    const containerCheckboxes = [
      { id: 'renderAllValid', label: 'renderAllValid', checked: renderAllValid, onChange: e => this.props.setContainerParameter({ id: 'renderAllValid', value: e.target.checked }) },
      { id: 'renderAllOther', label: 'renderAllOther', checked: renderAllOther, onChange: e => this.props.setContainerParameter({ id: 'renderAllOther', value: e.target.checked }) },
    ];

    return (
      <div className={styles.component}>
        {containerCheckboxes.map((checkbox, index) => (
          <Checkbox key={index} {...checkbox}>{checkbox.label}</Checkbox>
        ))}
        <SelectRenderer
          id="rendererComponent"
          label="rendererComponent"
          value={rendererComponent}
          onChange={e => this.props.setContainerParameter({ id: 'rendererComponent', value: e.target.value })}
        >
          <option value="">BasicRenderer</option>
          <option value="FadingRenderer">FadingRenderer</option>
          <option value="EveryRenderer">EveryRenderer</option>
        </SelectRenderer>
      </div>
    );
  }
}
