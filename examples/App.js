import React from 'react';

import { RenderContainer } from '../src/components/conditional-render';
import SampleComponent from './components/SampleComponent';

export default function App() {
  return (
    <div>
      <h1>Examples</h1>

      <h3>renderAllValid = true</h3>
      <RenderContainer renderAllValid>
        <h5 renderIfNoValid>ELSE!</h5>
        <div condition={new Date().getDay() === 0}>It&acute;s Sunday</div>
        <div condition={new Date().getDay() === 1}>It&acute;s Monday</div>
        <div condition={new Date().getDay() === 2}>It&acute;s Tuesday</div>
        <div condition={new Date().getDay() === 3}>It&acute;s Wednesday</div>
        <div condition={new Date().getDay() === 4}>It&acute;s Thursday</div>
        <div condition={new Date().getDay() === 5}>It&acute;s Friday</div>
        <div condition={new Date().getDay() === 6}>It&acute;s Saturday</div>

        <SampleComponent condition>Text Content to be applied</SampleComponent>

        <div condition={false}>first condition</div>
        <div condition>second condition</div>
        <div condition={'2'===2}>third condition</div>
        <div condition={null}>fourth condition</div>

        <SampleComponent condition text="This is a big title" />
        <SampleComponent text="This is subtitle, and is hidden" />
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

        <h5 renderIfNoValid>ELSE!</h5>
      </RenderContainer>


      <h3>renderAllValid = false</h3>
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

        <h5 renderIfNoValid>ELSE!</h5>
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

        <h5 renderIfNoValid>ELSE!</h5>
      </RenderContainer>


      <h3>renderIfNoValid && renderAllOther = false</h3>
      <p><i>displaying only 1 renderIfNoValid:</i></p>
      <RenderContainer>
        <div condition={false}>IF</div>
        <h5 renderIfNoValid>ELSE!</h5>
        <div condition={false}>second</div>
        <h5 renderIfNoValid>ELSE2!</h5>
        <div condition={'2'===2}>third</div>
        <div condition={null}>fourth</div>
        <h5 renderIfNoValid>ELSE3!</h5>
      </RenderContainer>

      <h3>renderIfNoValid && renderAllOther = true</h3>
      <p><i>displaying all renderIfNoValid:</i></p>
      <RenderContainer renderAllOther>
        <h5 renderIfNoValid>ELSE!</h5>
        <div condition={false}>IF</div>
        <div condition={false}>second</div>
        <h5 renderIfNoValid>ELSE2!</h5>
        <div condition={'2'===2}>third</div>
        <div condition={null}>fourth</div>
        <h5 renderIfNoValid>ELSE3!</h5>
      </RenderContainer>
    </div>
  );
}
