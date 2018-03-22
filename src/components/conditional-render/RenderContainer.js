import React from 'react';
import PropTypes from 'prop-types';
import { oneOrManyChildElements } from '../../prop-types';

export default class RenderContainer extends React.Component {
  static propTypes = {
    children: oneOrManyChildElements,
    renderAllValid: PropTypes.bool,
  }

  static defaultProps = {
    renderAllValid: false, // NOTE: this enforces the if-elseif-else by default
  }


  _removeSpecialChildProps = {
    condition: true,
    renderIfNoValid: true,
  }

  firstRenderedComponent = null;

  isToBeRendered({ condition, renderIfNoValid }) {
    console.log('isToBeRendered (', this.props.renderAllValid, ' && ', condition, ') ||', (this.firstRenderedComponent === null && condition), '|| ', renderIfNoValid);
    return (this.props.renderAllValid && condition)
       || (this.firstRenderedComponent === null && condition)
       || (this.firstRenderedComponent === null && renderIfNoValid) // TODO: Apply different loop to check renderIfNoValid Children after evaluating all IFs
      ;
  }

  foundFirstToRender(child) {
    this.firstRenderedComponent = child;
  }

  // TODO: remove condition from child's props

  render() {
    const {
      children,
    } = this.props;

    return (
      <div>
        {React.Children.map(children, (child, index) => {
          if (this.isToBeRendered(child.props)) {
            this.foundFirstToRender(child);

            return (
              <div key={index}>
                {child}
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }
}
