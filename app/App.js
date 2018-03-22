import React from 'react';

// import './theme/app.global.scss';

import funcs from './components/conditional-render';

const { RenderContainer, version } = funcs;
console.log('TODO: smarter import for RenderContainer', funcs, version);


export default function App() {
  return (
    <div>
      <h1>Examples</h1>
      <RenderContainer>
        <div condition={false}>first</div>
        <div condition>second</div>
        <div condition={'2'===2}>third</div>
        <div condition={new Date().getDay() === 0}>Sunday</div>
        <div condition={new Date().getDay() === 1}>Monday</div>
        <div condition={new Date().getDay() === 2}>Tuesday</div>
        <div condition={new Date().getDay() === 3}>Wednesday</div>
        <div condition={new Date().getDay() === 4}>Thursday</div>
        <div condition={new Date().getDay() === 5}>Friday</div>
        <div condition={new Date().getDay() === 6}>Saturday</div>
        <div else>Saturday</div>
      </RenderContainer>
    </div>
  );
}
