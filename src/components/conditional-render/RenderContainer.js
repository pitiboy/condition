import React from 'react';
import PropTypes from 'prop-types';
import { oneOrManyChildElements } from '../../prop-types';

export default class RenderContainer extends React.Component {
  static propTypes = {
    children: oneOrManyChildElements,
    renderAllValid: PropTypes.bool,
  }

  static defaultProps = {
    renderAllValid: false, // NOTE: this enforces the if-elseif-else behaviour by default
  }

  get getChildrenList() {
    return this.props.children;
  }

  cleanUpChild(child) {
    // NOTE: removing restricted props, like 'condition' from child's props
    // const { condition, renderIfNoValid, ...otherProps } = child.props; // TODO: required newer babel config to transpile this spread operation.
    const otherProps = Object.assign({}, child.props);
    // delete otherProps.condition;
    // delete otherProps.renderIfNoValid;
    Object.keys(this._removeSpecialChildProps).forEach((item) => { if (this._removeSpecialChildProps[item]) delete otherProps[item]; });

    // NOTE: cloneElement() only merges otherProps, doesn't remove old props
    // const newChild = React.cloneElement(child, otherProps);

    // TODO: remove these only for some basic child.types.

    const newChild = (<child.type {...otherProps}>{child.props.children}</child.type>);
    // console.debug('replaced props from ', child.props, 'to', newChild.props);
    return newChild;
  }

  foundFirstToRender(child) {
    this.firstRenderedComponent = child;
  }

  isToBeRendered({ condition, renderIfNoValid }) {
    // console.debug('isToBeRendered (', this.props.renderAllValid, ' && ', condition, ') ||', (this.firstRenderedComponent === null && condition), '|| ', renderIfNoValid);
    return (this.props.renderAllValid && condition)
       || (this.firstRenderedComponent === null && condition)
       || (this.firstRenderedComponent === null && renderIfNoValid) // TODO: Apply different loop to check renderIfNoValid Children after evaluating all IFs
      ;
  }

  _removeSpecialChildProps = {
    condition: true,
    renderIfNoValid: true,
  }

  firstRenderedComponent = null;


  render() {
    return (
      <div>
        {React.Children.map(this.getChildrenList, (child, index) => {
          if (this.isToBeRendered(child.props)) {
            this.foundFirstToRender(child);

            return (
              <div key={index}>
                {this.cleanUpChild(child)}
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }
}
