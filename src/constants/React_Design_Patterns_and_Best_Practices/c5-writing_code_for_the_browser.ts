export const C5_WRITING_CODE_FOR_THE_BROWSER = [
  {
    title: "Uncontrolled Components",
    desc: `
    <p>Uncontrolled components are like regular HTML form inputs for which you will not be able to manage the value yourself but instead, the DOM will take care of handling the value and you can get this value by using a React ref.</p><p><br></p><pre class="ql-syntax" spellcheck="false">An example of an uncontrolled component,
where we do not set the value of the input field,
but we let the component manage its own internal state.

import { FC, useState, ChangeEvent, MouseEvent } from 'react'

const Uncontrolled: FC = () =&gt; {
  const [value, setValue] = useState&lt;string&gt;('')

  return (
    &lt;form&gt;
      &lt;input type="text" /&gt;
      &lt;button&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  )
}
</pre>
    `
  },
  {
    title: "Controlled components",
    desc: `
    <p>A controlled component is a React component that controls the values of input elements in a form by using the component state.</p><p><br></p><pre class="ql-syntax" spellcheck="false">import { useState } from 'react'


const Controlled = () =&gt; {
  return (
    &lt;form&gt;
      &lt;input type="text" defaultValue="Hello" /&gt;
      &lt;button&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  )
}


// When the state changes, React re-renders the component
// and uses it again to relfect the current values of the input fields.
// We now have full control over the values of input fields.
</pre>
    `
  },
  {
    problem: "how to define events in JSX and how to pass down events to child components",
    title: "Handling events",
    desc: `
    <pre class="ql-syntax" spellcheck="false">return (
      // to define event
      &lt;button onClick={handleClick}&gt;Click me&lt;/button&gt;
    
    
      // to pass down event to child
      &lt;ChildComponent onClick={handleClick} /&gt;
    
    
      // ChildComponent.tsx
      import { ReactNode, FC } from "react";
    
    
      interface Props {
        children?: ReactNode,
        onClick?: () =&gt; void,
      }
    
    
      export const Button: FC&lt;Props&gt; = ({children, onClick}) =&gt; {
        return (
          &lt;button
            className="btn rounded-none w-full"
            onClick={onClick}
          &gt;
            {children}
          &lt;/button&gt;
        )
      }
    
    
      export default Button;
    )
    </pre>
    `
  },
  {
    title: "Exploring refs",
    desc: `
    <p>React is declarative, but there are some cases where you need to access underlying DOM nodes to perform some imperative operations. This should be avoided.</p><p><br></p><pre class="ql-syntax" spellcheck="false">import { useRef } from 'react'


const Focus = () =&gt; {
  const inputRef = useRef(null)

  const handleClick = () =&gt; {
    inputRef.current.focus()
  }

  return (
    &lt;&gt;
      &lt;input
        type="text"
        ref={inputRef}
      /&gt;
      &lt;button onClick={handleClick}&gt;Focus&lt;/button&gt;
    &lt;/&gt;
  )
}
export default Focus
</pre>
    `
  },
  {
    problem: "how do we access a child component's DOM element (ref) from the parent component",
    title: "Understanding forwardRef",
    desc: `
    <p>react.forwardRef is a HOC that allows you to pass a ref down to a child component. This is useful when you need to access the child component's DOM elements of instance from the parent component.</p><p><br></p><pre class="ql-syntax" spellcheck="false">import React from 'react'


const TextInputWithRef = React.forwardRef((props, ref)) =&gt; {
  return (
    &lt;input
      type="text"
      ref={ref}
      {...props}
    /&gt;
  )
}
export default TextInputWithRef


// Usage:
import React, { useRef } from 'react'
import TextInputWithRef from './TextInputWithRef'


function App() {
  const inptRef = useRef()
  const handleClick = () =&gt; {
    inputRef.current.focus()
  }
  
  
  return (
    &lt;div&gt;
      &lt;TextInputWithRef ref={inputRef} /&gt;
      &lt;button onClick={handleClick}&gt;Focus on input&lt;/button&gt;
    &lt;/div&gt;
  )
}
</pre>
    `
  },
  {
    title: "Implementing animations",
    desc: `
    <p>React comes with an add-on called react-transition-group, which is a component that helps us build animations in a declarative way.</p><p><br></p><pre class="ql-syntax" spellcheck="false">npm install --save react-transition-group @types/react-transition-group


// Once we have done that, we can import
import { TransitionGroup } from 'react-transition-group'


// then we just wrap component to which we want to apply the animation
const Transition = () =&gt; {
  return (
    &lt;TransitionGroup
      transitionName="fade"
      transitionAppear
      transitionAppearTimeout={500}
    &gt;
      &lt;div&gt;Item 1&lt;/div&gt;
      &lt;div&gt;Item 2&lt;/div&gt;
      &lt;div&gt;Item 3&lt;/div&gt;
    &lt;/TransitionGroup&gt;
  )
}
</pre>
    `
  },
  {
    problem: "what is the proper way to create icon components",
    title: "Exploring SVG",
    desc: `
    <p>A common way to create SVG in a web app with React is to wrap our vectors into a React component and use that props to define their dynamic values.</p><p><br></p><pre class="ql-syntax" spellcheck="false">const Circle = ({x, y, radius, fill}) =&gt; {
      return (
        &lt;svg&gt;
          &lt;circle cx={x} cy={y} r={radius} fill={fill} /&gt;
        &lt;/svg&gt;
      )
    }
    </pre>
    `
  }
]

export default C5_WRITING_CODE_FOR_THE_BROWSER
