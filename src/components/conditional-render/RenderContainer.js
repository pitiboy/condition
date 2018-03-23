import React from 'react';
import PropTypes from 'prop-types';
import { oneOrManyChildElements } from '../../prop-types';

const BasicRenderer = props => (props.isDisplaying ? <div className="BasicRenderer_component">{props.children}</div> : null);
BasicRenderer.propTypes = {
  children: oneOrManyChildElements,
  isDisplaying: PropTypes.bool,
};
BasicRenderer.defaultProps = {
  isDisplaying: true,
};


export default class RenderContainer extends React.Component {
  static propTypes = {
    children: oneOrManyChildElements,
    renderAllValid: PropTypes.bool,
    renderAllOther: PropTypes.bool,
    rendererComponent: PropTypes.func,
  }

  static defaultProps = {
    renderAllValid: false, // NOTE: this enforces the if-elseif-else behaviour by default
    renderAllOther: false, // NOTE: this let mutliple ELSEs to be displayed, disabled by default
  }


  get getConditionalChildrenList() {
    // NOTE: this condition restricts children, not having any of our required property, such as comments, or objects with no propTypes
     // every comment to be displayed should be '!child.props || !child.props.renderIfNoValid'
    return this._getChildrenList.filter(child => child.props && !child.props.renderIfNoValid);
  }
  get getOtherChildrenList() {
    return this.props.children.filter(child => child.props && child.props.renderIfNoValid);
  }
  get _getChildrenList() {
    return this.props.children;
  }

  get _rendererComponent() {
    return this.props.rendererComponent || BasicRenderer;
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

    // TODO: remove these only for some basic child.types!

    const newChild = child.props ? (<child.type {...otherProps}>{child.props.children}</child.type>) : null;
    // console.debug('replaced props from ', child.props, 'to', newChild.props);
    return newChild;
  }

  foundComponentToRender(child) {
    this.foundRenderedComponent = child;
  }
  cleanComponentToRender() {
    this.foundRenderedComponent = null;
  }

  isToBeRendered(props) {
    if (!props) return false;
    const { condition, renderIfNoValid } = props;
    const _renderIfNoValid = typeof renderIfNoValid !== 'undefined' && renderIfNoValid;
    const shallRender = (this.props.renderAllValid && condition && !_renderIfNoValid)
       || (this.foundRenderedComponent === null && condition && !_renderIfNoValid)
       || (this.foundRenderedComponent === null && !condition && _renderIfNoValid) // TODO: Apply different loop to check renderIfNoValid Children after evaluating all IFs
      ;
    // console.debug('isToBeRendered ', shallRender, '=== (', this.props.renderAllValid, ' && ', condition, ') || (2nd)', this.foundRenderedComponent === null, (this.foundRenderedComponent === null && condition), '|| (3rd)', renderIfNoValid);
    return shallRender;
  }

  _removeSpecialChildProps = {
    condition: true,
    renderIfNoValid: true,
  }

  foundRenderedComponent = null;

  doRenderComponent({ child, index }) {
    return (
      <this._rendererComponent key={index} isDisplaying={this.isToBeRendered(child.props)}>
        {this.cleanUpChild(child)}
      </this._rendererComponent>
    );
  }


  render() {
    this.cleanComponentToRender();

    return (
      <div className="RenderContainer_component">
        {React.Children.map(this.getConditionalChildrenList, (child, index) => {
          const r = this.doRenderComponent({ child, index });

          // TODO: might be better with callback passed to doRenderComponent
          if (this.isToBeRendered(child.props)) {
            this.foundComponentToRender(child);
          }

          return r;
        })}

        {React.Children.map(this.getOtherChildrenList, (child, index) => {
          const r = this.doRenderComponent({ child, index });

          // TODO: might be better with callback passed to doRenderComponent
          if (this.isToBeRendered(child.props)) {
            if (!this.props.renderAllOther) this.foundComponentToRender(child);
          }

          return r;
        })}
      </div>
    );
  }
}
