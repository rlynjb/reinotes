export const C3_CLEANING_CODE = [
  {
    problem: "default root wrapper for elements",
    title: 'React.Fragment',
    desc: `
    <p>New feature that works as a special wrapper for elements. It can be specified as React.Fragment or as an empty tag(&lt;&gt;&lt;/&gt;).</p>
    <p><br></p>
    <pre class="ql-syntax" spellcheck="false">
    return (
      &lt;&gt;
        &lt;ChildA /&gt;
        &lt;ChildB /&gt;
      &lt;/&gt;
    )
    </pre>
    `
  },
  {
    problem: "how to define spaces in JSX",
    title: 'Spaces',
    desc: `
    <p>JSX handles the spaces between text and elements differently from HTML.</p>
    <p><br></p>
    <pre class="ql-syntax" spellcheck="false">
    &lt;div&gt;
      &lt;span&gt;My&lt;/span&gt;
      {' '}
      name is
      {' '}
      &lt;span&gt;Rein&lt;/span&gt;
    &lt;/div&gt;
    </pre>
    `,
  },
  {
    problem: "how JSX handles boolean attributes",
    title: 'Boolean attributes',
    desc: 'If you set an attribute without a value, JSX assumes that its value is true, ff. the same behavior as the HTML diabled attribute.',
  },
  {
    problem: "what is good practice to pass down attributes to children",
    title: 'Spread attributes',
    desc: `
    <p>A common practice that leads to fewer bugs is not to pass entire JS objects down to children by reference, but to use primitive values, which can be easily validated, making components more robust and error-proof.</p>
    <p><br></p>
    <pre class="ql-syntax" spellcheck="false">
    const attrs = { name: 'Rein', age: 25 }
    return &lt;div {...attrs} /&gt;
    </pre>
    `
  },
  {
    problem: "what is good practice for clean JSX code",
    title: 'Multiline',
    desc: `
    <p>whenever we have nested elements, we should always go multiline.</p>
    <p><br></p>
    <pre class="ql-syntax" spellcheck="false">
    &lt;div&gt;
      &lt;Header /&gt;
      &lt;div&gt;
        &lt;Main content={...} /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    </pre>
    `
  },
  {
    problem: "what is good practice for clean component attributes definition",
    title: 'Multi-properties',
    desc: `
    <p>A common solution is to write each attribute on a new line, with one level of indentation, and then align the closing bracket with the opening tag.</p>
    <p><br></p>
    <pre class="ql-syntax" spellcheck="false">
    &lt;button
      foo="bar"
      veryLongPropertyName="baz"
      onSomething={this.handleSomething}
    /&gt;
    </pre>
    `
  },
  {
    problem: "how to do basic if else in JSX",
    title: 'Conditionals #1 - Classic if...else statement',
    desc: `
    <p>Classic if...else statement</p>
    <p><br></p>
    <pre class="ql-syntax" spellcheck="false">
    let button

    if (isLoggedIn) {
      button = &lt;LogoutButton /&gt;
    } else {
      button = &lt;LoginButton /&gt;
    }

    return &lt;div&gt;{button}&lt;/div&gt;
    </pre>
    `
  },
  {
    problem: "how to do a inline if condition in JSX",
    title: 'Conditionals #2 - Inline condition',
    desc: `
    <p>Inline condition</p>
    <pre class="ql-syntax" spellcheck="false">
    return &lt;div&gt;
      {isLoggedIn &amp;&amp; &lt;LoginButton /&gt;}
    &lt;/div&gt;
    </pre>
    `
  },
  {
    problem: "how to do a inline if else condition in JSX",
    title: 'Conditionals #3 - Ternary condition',
    desc: `
    <p>It is used in popular repositories, such as Redux real-world examples where ternary is used to show a Loading label if the component is fetching the data or Load More inside a button depending on the value of the isFetching variable.</p>
    <p><br></p>
    <pre class="ql-syntax" spellcheck="false">
    return &lt;div&gt;
      {isLoggedIn ? &lt;LogoutButton /&gt; : &lt;LoginButton /&gt;}
    &lt;/div&gt;
    </pre>
    `
  },
  {
    problem: "what is a good practice to keep complicated conditions clean in JSX",
    title: 'Conditionals #4 - Helper function',
    desc: `
    <p>We can create a helper function inside our component and use it in JSX to verify the condition. This is a good practice to keep the JSX clean and easy to read.</p>
    <p><br></p>
    <pre class="ql-syntax" spellcheck="false">
    // using inline condition is a good solution, but readability is strongly impacted.
    &lt;div&gt;
      {dataIsReady &amp;&amp; (isAdmin || userHasPermissions) &amp;&amp; &lt;SecretData /&gt;}
    &lt;/div&gt;

    // Help function to the rescue!!
    const MyComponent = ({ dataIsReady, isAdmin, userHasPermissions }) =&gt; {
    const canShowSecretData = () =&gt; {
      return dataIsReady &amp;&amp; (isAdmin || userHasPermissions)
    }

    return (
      &lt;div&gt;
        {canShowSecretData() &amp;&amp; &lt;SecretData /&gt;}
      &lt;/div&gt;
    )
    }
    </pre>
    `
  },
  {
    problem: "how to keep computed properties clean in JSX",
    title: 'Conditionals #5 - Helper Function for computed properties',
    desc: `
    <p>This is better because it is isolated and can be tested independently.</p>
    <p><br></p>
    <pre class="ql-syntax" spellcheck="false">
    const MyComponent = ({ currency, value }) =&gt; {
      const getPrice = () =&gt; {
        return currency + value
      }
    
      return &lt;div&gt;{getPrice()}&lt;/div&gt;
    }
    </pre>
    `
  },
  {
    problem: "how can we make conditionals reusable",
    title: 'Conditionals #6 - RenderIf component',
    desc: `
    <p>We can create a custom component and call it RenderIf to render our compoenents conditionally.</p><p><br></p><pre class="ql-syntax" spellcheck="false">// RenderIf.tsx
import React, { FC, ReactElement } from "react";

interface Props {
  children: ReactElement | string
  isTrue?: Boolean
  isFalse?: Boolean
}

const RenderIf: FC&lt;Props&gt; = ({ children, isTrue, isFalse }) =&gt; {
  if (isTrue === true) {
    return &lt;&gt;{children}&lt;/&gt;
  }
  if (isFalse === false) {
    return &lt;&gt;{children}&lt;/&gt;
  }
  return null
}

export default RenderIf


// ComponentProject.tsx
import RenderIf from './RenderIf'

const MyComponent = ({ dataIsReady, isAdmin, userHasPermissions }) =&gt; {
  return (
    &lt;RenderIf isTrue={dataIsReady &amp;&amp; (isAdmin || userHasPermissions)}&gt;
      &lt;SecretData /&gt;
    &lt;/RenderIf&gt;
  )
}
</pre>
    `
  },
  {
    title: 'Loops',
    desc: `
    <p>The most common way to generate an array of elements, given an array of objects, is to use map.</p><p><br></p><pre class="ql-syntax" spellcheck="false">&lt;ul&gt;
  {users.map(user =&gt; &lt;li&gt;{user.name}&lt;/li&gt;)}
&lt;/ul&gt;
</pre>
    `
  },
  {
    problem: "how can we make our component small, clean, and easy to read",
    title: 'Sub-rendering (Sub-render method)',
    desc: `
    <p>We always want to keep our components very small and our render methods very clean and simple. One solution is to split it into smaller functions in a way that lets up keep all the logic in the same component. In Redix real-world exampls, a sub-render method is used to render the load more button.</p><p><br></p><pre class="ql-syntax" spellcheck="false">const renderUserMenu = () =&gt; {
      // JSX for user menu
    }
    
    
    const renderAdminMenu = () =&gt; {
      // JSX for admin menu
    }
    
    
    return (
      &lt;div&gt;
        &lt;h1&gt;Welcome back!&lt;/h1&gt;
        {userExists &amp;&amp; renderUserMenu()}
        {userIsAdmin &amp;&amp; renderAdminMenu()}
      &lt;/div&gt;
    )
    </pre>
    `
  },
  {
    problem: "what is the core founcation of React",
    title: 'Functional Programming',
    desc: `
    <p>Besides following best practices and using linter to catch errors and enforce consistency, another way to clean up our code is to adopt an FP style. We can write more declarative and less imperative code, maing our components easier to read and reason about.</p><p><br></p><p>FP principles:</p><p>    - Immutability</p><p>    - Pure functions</p><p>    - Higher-order functions</p><p>    - and more...</p><p><br></p>
    `
  },
  {
    title: 'First-class functions (HOF or HOC)',
    desc: `
    <p>JavaScript has first-class functions because they are treated like any other variable, meaning you can pass a function as a parameter to other functions, or it can be returned by another function and be assigned as a value to a variable.</p><p><br></p><pre class="ql-syntax" spellcheck="false">// Higher-Order Functions are functions that take a function as a parameter,
// and optionally some other params, and return a function.
// The returned function is usually enhanced with some special behaviors.

const add = (x, y) =&gt; x + y
const log = fn =&gt; (...args) =&gt; {
  return fn(...args)
}
const logAdd = log(add)
</pre>
    `
  },
  {
    problem: "We can use this to wrap 3rd party components for presentation logic only.",
    title: 'Purity',
    desc: `
    <p>A function is pure when there are no side effects, which means that the function does not change anything that is not local to the function itself. Meanwhile, A function that changes the state of an application/modifies variables defined in the upperscope, or a function that touches external entities (DOM) is considered impure. Impure functions are harder to debug, and mose of the time it is not possible to apply them multiple times and expect to get the same result.</p><p><br></p><pre class="ql-syntax" spellcheck="false">// Pure function
const add = (x, y) =&gt; x + y

// Impure function
let x = 0
const add = y =&gt; (x = x + y)
</pre>
    `
  },
  {
    title: 'Immutability',
    desc: `
    <p>An immutable value is a value that cannot be changed.</p><p><br></p><pre class="ql-syntax" spellcheck="false">// Doesn't follow immutability
const add3 = arr =&gt; arr.push(3)
const myArr = [1, 2]
add3(myArr) // [1, 2, 3]
add3(myArr) // [1, 2, 3, 3]

// Follows immutability
const add3 = arr -&gt; arr.concat(3)
const myArr = [1, 2]
const result1 = add3(myArr) // [1, 2, 3]
const result2 = add3(myArr) // [1, 2, 3]
</pre>
    `
  },
  {
    title: 'Currying',
    desc: `
    <p>A common technique in FP is currying, which is the process of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.</p><p><br></p><pre class="ql-syntax" spellcheck="false">// sample, we have the ff. code:
const add = (x, y) =&gt; x + y

// we can instead define it as:
const add = x =&gt; y =&gt; x + y

// we use it in the ff. way:
const add1 = add(1)
add1(2) // 3
add1(3) // 4

// this is a pretty convenient wat of writing functions,
// since the first value is stored after the application
// of the first param, we can resue the second function multiple times.
</pre>
    `
  },
  {
    title: 'Composition',
    desc: `
    <p>Important concept in FP to be applied in React. Functions (and components) can be combined to produce new functions with more advanced features and properties.</p><p><br></p><pre class="ql-syntax" spellcheck="false">const add = (x, y) =&gt; x + y
const square = x =&gt; x * x

// these functions can be composed together to create a new function
const addAndSquare = (x, y) =&gt; square(add(x, y))

// we end up with small, simple, testable pure functions that can be combined
</pre>
    `
  }
]

export default C3_CLEANING_CODE;
