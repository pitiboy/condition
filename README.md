# condition

<h2>How to apply If-Else condition in React/JSX?</h2>

<p>
  There are many ways to do so.
  For instance, I were inspired by the blog this entry:
  <a href="https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e" target="blank">https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e</a>
  This is a comprehensive guidance. I valued the ‘If component’ and ‘Higher-order components’ section the more, as it contained new information for me.
</p>

<p
  However if found these solutions to be a bit weird to React JSX notation.
  So I was about to find even more robust, beautiful and JSX-like solution to my eye for conditional.
  Especially I were intersted in an IF - [ELSEIF]* - ELSE closure.
  This is how this project came along, based on a friendly discussion with a colleague, and a very simple idea.
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
</p>

<h3>Todos to be coming:</h3>
<ul>
  <li>Add support for else</li>
  <li>Make additional helper / HOC components to apply other actions on condition change (like animation)</li>
  <li>Add support for multipe/single render amongst children</li>
  <li>remove annoying 'internal' variables from the children components before rendering</li>
</ul>
