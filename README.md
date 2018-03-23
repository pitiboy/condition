# react-conditional-render

[version](https://github.com/pitiboy/react-conditional-render/blob/master/package.json)

## How to apply If-Else condition in React (with JSX)?

There are many ways to do so.
- I personally favour to use the logical operation triggered by a boolean value `{true && (<JSX/>)}` as much as possible for having the most simple expressions. Of course this is the easiest thing to do, and there are a lot more other nice or less nice solutions.
- The other solution I used to use, to create an additional *factory* component to serve as the if-else engine. I'm not keen on seeing such solution more than one per project, as that might result additional effort and same code patterns in multiple places  :)

Recently, I were inspired by the blog [this entry](https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e).
This is a comprehensive guidance to enlist 7 more design patterns. I valued the ‘If component’ and ‘Higher-order components’ section the most, as it gave new knowledge for me.
Somehow I find majority of these solutions with complex code to be a bit weird against standard React JSX notation, and also it doesn't really solves the ELSE problem, which remains still a big need.

So I was about to find even more robust, beautiful and JSX-like solution to my eye for conditional rendering.
Especially I were interested in a multiple IF - [ELSEIF]* - [ELSE]* closure.
This is how this project came along, based on a friendly discussion with a colleague, and a very simple idea, as follows.

### Demo
You can find a very basic [demo here](https://react-conditional-render.surge.sh)


### The idea
Here is my different version of if-else closure:
- To apply a new governance component, called RenderContainer,
- pass all conditional if-else React as components / DOM entries
- add a new specific props entry, called *`condition`*, to the children act as logical operator
- let the governance component evaluate if the actual child needs to be rendered based on the *`condition`*

It applies 1 'hack' compare to all other logical operator based described in above article, it inserts 2 additional *`div`* DOM element to the DOM.
- 1 element to the RenderContainer
- +1 element to contain the appearing Children
  This might sound overkill, but serves as additional feature, to have embedded the children into a container, which might have some further actions, like animated appear/disappear mechanism. This I found even a very strong feature :)


### How to use?
#### How to add to your project:

currently there is no npm package exists, you need to download, and add manually to your local source folder, then import to your React App:
```js
import { RenderContainer } from '../src/components/conditional-render';
```
... or if you want to use our *(to be implemented)* renderer components, you can import them as well
```js
import { RenderContainer, FadingRenderer } from '../src/components/conditional-render';
```

#### Props / Config Options:
you can pass the following properties to *`RenderContainer`*
- **`renderAllValid`** is `PropTypes.bool`, default  is `false`. This enforces the if-elseif-else behavior by default, other than all valid items are displayed
- **`renderAllOther`** is `PropTypes.bool`, default  is `false` means disabled. This let multiple ELSEs to be displayed if there were no *`condition`* to be found = `true`
- **`rendererComponent`** is a component of type `PropTypes.func`, default is `BasicRenderer`, which is a self-component used for displaying the child embedded in a `<div>`. You can add your own custom renderer Component. Later you might use `FadingRenderer` *(to be implemented)* which mimics fadingIn with CSS transition.

you can pass the following properties to *Child* objects
- **`condition`** is `PropTypes.bool`, default is `false`. This is the evaluator if a child is to be displayed or not
- **`renderIfNoValid`** is `PropTypes.bool`, default is `false` please note multiple renderIfNoValid could be applied
#### dependencies:
- see [package.json](https://github.com/pitiboy/react-conditional-render/blob/master/package.json) for details

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
- Implement wrapper helper components, like `FadingRenderer`, to apply other actions on condition changes (such as fading animation)

- apply warning on having multiple renderIfNoValid items
- proper unit testing
