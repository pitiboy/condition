# react-conditional-render

## How to apply If-Else condition in React/JSX?

There are many ways to do so.
For instance, I were inspired by the blog [this entry](https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e)
This is a comprehensive guidance. I valued the ‘If component’ and ‘Higher-order components’ section the most, as it gave new knowledge for me.

However if found these solutions to be a bit weird to React JSX notation.
So I was about to find even more robust, beautiful and JSX-like solution to my eye for conditional.
Especially I were interested in an IF - [ELSEIF]* - ELSE closure.
This is how this project came along, based on a friendly discussion with a colleague, and a very simple idea.

### Demo
You can find a very basic [demo here](https://react-conditional-render.surge.sh)


### The idea
Here is my different version of if-else closure:
- To apply a new governance component, called RenderContainer,
- pass all conditional if-else React as components / DOM entries
- add a new specific props entry, called condition, to the children act as logical operator
- let the governance component evaluate if the actual child needs to be rendered based on the condition

It applies 1 'hack' compare to all other logical operator based described in above article, it inserts 2 additional <div> DOM element to the DOM.
- 1 element to the RenderContainer
- +1 element to contain the appearing Children
  This might sound, but serves as additional feature, to have embedded the children into a container, which might have some further actions, like animated appear/disappear mechanism. This I found even a very strong feature :)


### How to use
you can pass the following properties to `RenderContainer`
- **`renderAllValid`** is `bool`, default  is `false`. This enforces the if-elseif-else behavior by default, other than all valid items are displayed

you can pass the following properties to *Child* objects
- **`condition`** is `bool`, default is `false`. This is the evaluator if a child is to be displayed or not
- **`renderIfNoValid`** is `bool`, default is `false` please note multiple renderIfNoValid could be applied
</p>

### Example:
Check the full example file [source code here](https://github.com/pitiboy/react-conditional-render/blob/master/examples/App.js)

```jsx
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
```

### Todos to be coming:
- Create additional wrapper helper / HOC components to apply other actions on condition change (like animation)

- Make the test even more interactive, and 'responsive' to user, by thicking checkboxes near all lines for render condition status change

- apply warning on having multiple renderIfNoValid items
- proper unit testing
