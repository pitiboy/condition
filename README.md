# condition

<h2>How to apply If-Else condition in React/JSX?</h2>

<p>
  There are many ways to do so.
  For instance, I were inspired by the blog this entry:
  <a href="https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e" target="blank">https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e</a>
  This is a comprehensive guidance. I valued the ‘If component’ and ‘Higher-order components’ section the most, as it gave new knowledge for me.
</p>

<p
  However if found these solutions to be a bit weird to React JSX notation.
  So I was about to find even more robust, beautiful and JSX-like solution to my eye for conditional.
  Especially I were interested in an IF - [ELSEIF]* - ELSE closure.
  This is how this project came along, based on a friendly discussion with a colleague, and a very simple idea.
</p>

<h3>Demo</h3>
<p>
You can find a very basic demo at <a href="https://react-conditional-render.surge.sh" target="blank">https://react-conditional-render.surge.sh</a>
</p>


<h3>The idea</h3>
<p>
  Here is my different version of if-else closure:
  <ul>
    <li>To apply a new governance component, called RenderContainer,</li>
    <li>pass all conditional if-else React as components / DOM entries</li>
    <li>add a new specific props entry, called condition, to the children act as logical operator </li>
    <li>let the governance component evaluate if the actual child needs to be rendered based on the condition</li>
  </ul>

  It appplies 1 'hack' compare to all other logical operator based described in above article, it inserts 2 additional <div> DOM element to the DOM.
  <ul>
    <li>1 element to the RenderContainer</li>
    <li>+1 element to contain the appearing Children</li>
  </ul>
  This might sound, but serves as additional feature, to have embedded the children into a container, which might have some further actions, like animated appear/disappear mechanism. This I found even a very strong feature :)
</p>


<h3>How to use</h3>
<p>
  you can pass the following properties to RenderContainer
  <ul>
    <li><strong><code>renderAllValid</code></strong>: bool, default  is <code>false</code>. This enforces the if-elseif-else behavior by default, other than all valid items are displayed</li>
  </ul>

  you can pass the following properties to Child objects
  <ul>
    <li><strong><code>condition</code></strong>: bool, default is <code>false</code>. This is the evaluator if a child is to be displayed or not </li>
    <li><strong><code>renderIfNoValid</code></strong>: bool, default is <code>false</code> please note multiple renderIfNoValid could be applied</li>
  </ul>
</p>

<h3>Todos to be coming:</h3>
<ul>
  <li>Create additional wrapper helper / HOC components to apply other actions on condition change (like animation)</li>
  <li>Make the test even more interactive, and 'responsive' to user, by thicking checkboxes near all lines for render condition status change </li>

  <li>Apply different loop to check renderIfNoValid Children after evaluating all IFs</li>
  <li>remove annoying 'internal' variables from the children components before rendering</li>
  <li>apply warning on having multiple renderIfNoValid items</li>
  <li>proper unit testing</li>
</ul>
