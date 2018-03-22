import React from 'react';
// import classnames from 'classnames';

import { oneOrManyChildElements } from '../../prop-types';

export default class RenderContainer extends React.Component {
  static propTypes = {
    children: oneOrManyChildElements,
  }

  static defaultProps = {
  }

  state = {
    renderedComponent: null,
  }

  // TODO: remove condition from child's props

  render() {
    return (
      <div>
        {React.Children.map(this.props.children, (child, index) => {
          if (child.props.condition) {
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
