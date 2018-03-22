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

<h3>Example:</h3>
<p>
  Check the full example file source code at <a href="https://github.com/pitiboy/react-conditional-render/blob/master/examples/App.js" target="blank">https://github.com/pitiboy/react-conditional-render/blob/master/examples/App.js</a>
</p>
<pre>
<span class="pl-k">&lt;</span>RenderContainer renderAllValid<span class="pl-k">&gt;</span><br />
<span class="pl-k">&lt;</span>div condition<span class="pl-k">=</span>{<span class="pl-c1">false</span>}<span class="pl-k">&gt;</span>first<span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span><br />
<span class="pl-k">&lt;</span>div condition<span class="pl-k">&gt;</span>second<span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span><br />
<span class="pl-k">&lt;</span>div condition<span class="pl-k">=</span>{<span class="pl-s"><span class="pl-pds">'</span>2<span class="pl-pds">'</span></span><span class="pl-k">===</span><span class="pl-c1">2</span>}<span class="pl-k">&gt;</span>third<span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span><br />
<span class="pl-k">&lt;</span>div condition<span class="pl-k">=</span>{<span class="pl-c1">null</span>}<span class="pl-k">&gt;</span>fourth<span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span><br />
<span class="pl-k">&lt;</span>div condition<span class="pl-k">=</span>{<span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getDay</span>() <span class="pl-k">===</span> <span class="pl-c1">0</span>}<span class="pl-k">&gt;</span>It<span class="pl-k">&amp;</span>acute;s Sunday<span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span><br />
<span class="pl-k">&lt;</span>div condition<span class="pl-k">=</span>{<span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getDay</span>() <span class="pl-k">===</span> <span class="pl-c1">1</span>}<span class="pl-k">&gt;</span>It<span class="pl-k">&amp;</span>acute;s Monday<span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span><br />
<span class="pl-k">&lt;</span>div condition<span class="pl-k">=</span>{<span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getDay</span>() <span class="pl-k">===</span> <span class="pl-c1">2</span>}<span class="pl-k">&gt;</span>It<span class="pl-k">&amp;</span>acute;s Tuesday<span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span><br />
<span class="pl-k">&lt;</span>div condition<span class="pl-k">=</span>{<span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getDay</span>() <span class="pl-k">===</span> <span class="pl-c1">3</span>}<span class="pl-k">&gt;</span>It<span class="pl-k">&amp;</span>acute;s Wednesday<span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span><br />
<span class="pl-k">&lt;</span>div condition<span class="pl-k">=</span>{<span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getDay</span>() <span class="pl-k">===</span> <span class="pl-c1">4</span>}<span class="pl-k">&gt;</span>It<span class="pl-k">&amp;</span>acute;s Thursday<span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span><br />
<span class="pl-k">&lt;</span>div condition<span class="pl-k">=</span>{<span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getDay</span>() <span class="pl-k">===</span> <span class="pl-c1">5</span>}<span class="pl-k">&gt;</span>It<span class="pl-k">&amp;</span>acute;s Friday<span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span><br />
<span class="pl-k">&lt;</span>div condition<span class="pl-k">=</span>{<span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getDay</span>() <span class="pl-k">===</span> <span class="pl-c1">6</span>}<span class="pl-k">&gt;</span>It<span class="pl-k">&amp;</span>acute;s Saturday<span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span><br />
<span class="pl-k">&lt;</span>SampleComponent condition<span class="pl-k">&gt;</span><span class="pl-c1">Text</span> Content to be applied<span class="pl-k">&lt;</span><span class="pl-k">/</span>SampleComponent<span class="pl-k">&gt;</span><br />
<span class="pl-k">&lt;</span>SampleComponent condition text<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>This is a title<span class="pl-pds">"</span></span> <span class="pl-k">/</span><span class="pl-k">&gt;</span><br />
<span class="pl-k">&lt;</span>SampleComponent condition<span class="pl-k">&gt;</span><br />
  <span class="pl-k">&lt;</span>SampleComponent<span class="pl-k">&gt;</span><br />
    <span class="pl-k">&lt;</span>div style<span class="pl-k">=</span>{{ backgroundColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>#f8f8f8<span class="pl-pds">'</span></span> }}<span class="pl-k">&gt;</span><br />
      <span class="pl-k">&lt;</span>SampleComponent text<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>More complex object<span class="pl-pds">"</span></span> <span class="pl-k">/</span><span class="pl-k">&gt;</span><br />
      <span class="pl-k">&lt;</span>div style<span class="pl-k">=</span>{{ display<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>flex<span class="pl-pds">'</span></span> }}<span class="pl-k">&gt;</span><br />
        <span class="pl-k">&lt;</span>li<span class="pl-k">&gt;</span>Which<span class="pl-k">&lt;</span><span class="pl-k">/</span>li<span class="pl-k">&gt;&lt;</span>li<span class="pl-k">&gt;</span>has<span class="pl-k">&lt;</span><span class="pl-k">/</span>li<span class="pl-k">&gt;&lt;</span>li<span class="pl-k">&gt;</span>some<span class="pl-k">&lt;</span><span class="pl-k">/</span>li<span class="pl-k">&gt;&lt;</span>li<span class="pl-k">&gt;</span>structure<span class="pl-k">&lt;</span><span class="pl-k">/</span>li<span class="pl-k">&gt;</span><br />
      <span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span><br />
    <span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span><br />
  <span class="pl-k">&lt;</span><span class="pl-k">/</span>SampleComponent<span class="pl-k">&gt;</span><br />
<span class="pl-k">&lt;</span><span class="pl-k">/</span>SampleComponent<span class="pl-k">&gt;</span><br />
<span class="pl-k">&lt;</span>div renderIfNoValid<span class="pl-k">&gt;</span><span class="pl-c1">ELSE</span><span class="pl-k">!</span><span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span><br />
<span class="pl-k">&lt;</span><span class="pl-k">/</span>RenderContainer<span class="pl-k">&gt;</span>
</pre>

<h3>Todos to be coming:</h3>
<ul>
  <li>Create additional wrapper helper / HOC components to apply other actions on condition change (like animation)</li>
  <li>Make the test even more interactive, and 'responsive' to user, by thicking checkboxes near all lines for render condition status change </li>

  <li>Apply different loop to check renderIfNoValid Children after evaluating all IFs</li>
  <li>remove annoying 'internal' variables from the children components before rendering</li>
  <li>apply warning on having multiple renderIfNoValid items</li>
  <li>proper unit testing</li>
</ul>
