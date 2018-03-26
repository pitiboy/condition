import React from 'react';
import PropTypes from 'prop-types';
import { RenderContainer } from '../../../src/components/conditional-render';

export default class IntervalExample extends React.Component {
  static propTypes = {
    renderAllValid: PropTypes.bool,
    renderAllOther: PropTypes.bool,
    rendererComponent: PropTypes.func,
  }
  //
  // static defaultProps = {
  // }

  componentDidMount() {
    setInterval(() => this.timer(), 1000);
  }

  timer() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <RenderContainer
        renderAllValid={this.props.renderAllValid}
        renderAllOther={this.props.renderAllOther}
        rendererComponent={this.props.rendererComponent}
      >
        <h5 renderIfNoValid>ELSE: first match!</h5>

        <h4 condition={2 > 0} renderIfNoValid={false}>What day is today?</h4>
        <div condition={new Date().getDay() === 0}>It&acute;s a Sunday</div>
        <div condition={new Date().getDay() === 1}>It&acute;s a Monday</div>
        <div condition={new Date().getDay() === 2}>It&acute;s a Tuesday</div>
        <div condition={new Date().getDay() === 3}>It&acute;s a Wednesday</div>
        <div condition={new Date().getDay() === 4}>It&acute;s a Thursday</div>
        <div condition={new Date().getDay() === 5}>It&acute;s a Friday</div>
        <div condition={new Date().getDay() === 6}>It&acute;s a Saturday</div>

        <h5 condition renderIfNoValid={true || false}>ELSE2: to demonstrate that <b>renderIfNoValid</b> is stronger thant <b>condition</b>!</h5>

        <h6 condition>Time is: {new Date().toString().match(/\d+:\d+:\d+/)}</h6>
        <div condition={new Date().getSeconds() % 2 === 1}>having <b>odd</b> second</div>
        <div condition={new Date().getSeconds() % 2 === 0}>having <b>even</b> second</div>

        <h5 renderIfNoValid>ELSE3: last else!</h5>
      </RenderContainer>
    );
  }
}
