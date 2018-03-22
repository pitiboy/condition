import React from 'react';

// import './theme/app.global.scss';

import funcs from '../src/components/conditional-render';
import SampleComponent from './components/SampleComponent';

const { RenderContainer, version } = funcs;
console.log('TODO: smarter import for RenderContainer', funcs, version);

export default function App() {
  return (
    <div>
      <h1>Examples</h1>

      <h2>renderAllValid = true</h2>
      <RenderContainer renderAllValid>
        <div condition={false}>first</div>
        <div condition>second</div>
        <div condition={'2'===2}>third</div>
        <div condition={null}>fourth</div>

        <div condition={new Date().getDay() === 0}>It&acute;s Sunday</div>
        <div condition={new Date().getDay() === 1}>It&acute;s Monday</div>
        <div condition={new Date().getDay() === 2}>It&acute;s Tuesday</div>
        <div condition={new Date().getDay() === 3}>It&acute;s Wednesday</div>
        <div condition={new Date().getDay() === 4}>It&acute;s Thursday</div>
        <div condition={new Date().getDay() === 5}>It&acute;s Friday</div>
        <div condition={new Date().getDay() === 6}>It&acute;s Saturday</div>

        <SampleComponent condition>Text Content to be applied</SampleComponent>
        <SampleComponent condition text="This is a title" />
        <SampleComponent condition>
          <SampleComponent>
            <div style={{ backgroundColor: '#f8f8f8' }}>
              <SampleComponent text="More complex object" />
              <div style={{ display: 'flex' }}>
                <li>Which</li><li>has</li><li>some</li><li>structure</li>
              </div>
            </div>
          </SampleComponent>
        </SampleComponent>

        <div renderIfNoValid>ELSE!</div>
      </RenderContainer>


      <h2>renderAllValid = false</h2>
      <RenderContainer>
        <div condition={false}>first</div>
        <div condition>second</div>
        <div condition={'2'===2}>third</div>
        <div condition={null}>fourth</div>

        <div condition={new Date().getDay() === 0}>It&acute;s Sunday</div>
        <div condition={new Date().getDay() === 1}>It&acute;s Monday</div>
        <div condition={new Date().getDay() === 2}>It&acute;s Tuesday</div>
        <div condition={new Date().getDay() === 3}>It&acute;s Wednesday</div>
        <div condition={new Date().getDay() === 4}>It&acute;s Thursday</div>
        <div condition={new Date().getDay() === 5}>It&acute;s Friday</div>
        <div condition={new Date().getDay() === 6}>It&acute;s Saturday</div>

        <SampleComponent condition>Text Content to be applied</SampleComponent>
        <SampleComponent condition text="This is a title" />
        <SampleComponent condition>
          <SampleComponent>
            <div style={{ backgroundColor: '#f8f8f8' }}>
              <SampleComponent text="More complex object" />
              <div style={{ display: 'flex' }}>
                <li>Which</li><li>has</li><li>some</li><li>structure</li>
              </div>
            </div>
          </SampleComponent>
        </SampleComponent>

        <div renderIfNoValid>ELSE!</div>
      </RenderContainer>


      <h2>renderAllValid = false</h2>
      <RenderContainer>
        <div condition={false}>IF</div>
        <div condition={false}>second</div>
        <div condition={'2'===2}>third</div>
        <div condition={null}>fourth</div>
        <div renderIfNoValid>ELSE!</div>
      </RenderContainer>
    </div>
  );
}
