export const C10_REACT_18_NEW_FEATURES = [
  {
    problem: 'How can we allow React to work on multiple tasks simultaneously?',
    title: "Concurrent Mode",
    desc: `
    <p>In traditional React, the rendering process is synchronous, which means that React updates the user interfaces in a single pass. This can sometimes lead to performance issues, especially when rendering large, complex applications or handling realtime updates.</p><p><br></p><p>Concurrent mode allows React to split the rendering process into smaller units of work that can be executed independently and in parallel. This means React can prioritize certain tasks, such as updating the user interface, while still allowing other tasks to run in the background, such as handling user input or fetching data.</p><p><br></p><p><strong>Key Features of Concurrent Mode:</strong></p><p>- Time slicing</p><p>- Suspense</p><p>- Concurrent rendering</p><p><br></p><pre class="ql-syntax" spellcheck="false">// Usage:
import React, { useState } from 'react'


const Counter = () =&gt; {
  const [count, setCount] = useState&lt;number&gt;(0)


  const handleClick = () =&gt; {
    setCount(count + 1)
  }


  return (
    &lt;button onClick={handleClick}&gt;
      {count}
    &lt;/button&gt;
  )
}


const App = () =&gt; {
  return (
    &lt;React.Suspense fallback={
      &lt;div&gt;Loading...&lt;/div&gt;
    }&gt;
      &lt;Counter /&gt;
    &lt;/React.Suspense&gt;
  )
}


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(&lt;App /&gt;)
</pre>
    `
  },
  {
    problem: "How can React process multiple updates in one single pass?",
    title: "Automatic Batching",
    desc: `
    <p>In traditional React, updates to the UI are typically processed synchronously, which means Each triggers a new render pass.</p><p><br></p><p>This can be inefficient, especially when multiple updates occur in rapid succession. Automatic batching solves this problem by grouping multiple updates together and processing them in a single render pass.</p><p><br></p><p>This can result in significant performance improvements, especially when handling user input or realtime updates.</p><p><br></p><pre class="ql-syntax" spellcheck="false">// Usage:
function MyComponent() {
  const [count, setCount] = useState(0)


  function handleClick() {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }


  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={handleClick}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  )
}
</pre>
    `
  },
  {
    problem: "",
    title: "Transitions",
    desc: ``,
    sample: ``
  },
  {
    problem: "",
    title: "Suspense on the server",
    desc: ``,
    sample: ``
  },
  {
    problem: "",
    title: "createRoot",
    desc: ``,
    sample: ``
  },
  {
    problem: "How do we render a fully functional Client Conponents on initial page load in SSR?",
    title: "hydrateRoot",
    desc: `
    a new feature that works in conjunction with createRoot. <br>
    in SSR, react can render the initial HTML on the server and send it to the client, which can then "hydrate" <br>
    the HTML into a fully functional React app.
    `,
    sample: ``
  },
  {
    problem: "",
    title: "renderToPipeableStream",
    desc: ``,
    sample: ``
  },
  {
    problem: "",
    title: "userId",
    desc: ``,
    sample: ``
  },
  {
    problem: "",
    title: "useTransition",
    desc: ``,
    sample: ``
  },
  {
    problem: "",
    title: "useDeferredValue",
    desc: ``,
    sample: ``
  },
  {
    problem: "",
    title: "useInsertionEffect",
    desc: ``,
    sample: ``
  },
  {
    problem: "",
    title: "Strict mode",
    desc: ``,
    sample: ``
  },
];

export default C10_REACT_18_NEW_FEATURES;
