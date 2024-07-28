export const C4_POPULAR_COMPOSITION = [
  {
    title: 'Communicating components',
    desc: `
    <p>Small components with a clean interface can be composed together to create complex applications that are powerful and maintainable at the same time. This way, we can produce new parts of the user interface very quickly, writing only a few lines of code.</p><p><br></p><pre class="ql-syntax" spellcheck="false">const Profile = () =&gt; {
      return (
        &lt;div&gt;
          &lt;Avatar avatarImageUrl={user.profileImageUrl} /&gt;
          &lt;Username name={user.name} screenName={user.screenName} /&gt;
        &lt;/div&gt;
      );
    }
    </pre>
    `
  },
  {
    title: 'Exploring the Container and Presentational Patterns',
    desc: `
    <p>React components typically contain a mix of logic and presentation. By logic, we refer to anything that is unrelated to the UI, such as API calls, data manipulation, and event handlers. The presentation is the part of the render where we create the elements to be displayed on the UI.</p><p><br></p>
Editor.tsx:22 <p>React components typically contain a mix of logic and presentation. By logic, we refer to anything that is unrelated to the UI, such as API calls, data manipulation, and event handlers. The presentation is the part of the render where we create the elements to be displayed on the UI.</p><p><br></p><p><br></p>
Editor.tsx:22 <p>React components typically contain a mix of logic and presentation. By logic, we refer to anything that is unrelated to the UI, such as API calls, data manipulation, and event handlers. The presentation is the part of the render where we create the elements to be displayed on the UI.</p><p><br></p><p>Functional components are an incredibly elegant way to define UIs.</p><p>    They are pure functions that, given a state, return the elements of it.</p><p><br></p><p>    The ff. are the characteristics of conttainer components:</p><p>    - They are more concerned with behavior.</p><p>    - They render their presentational components.</p><p>    - They make API calls and manipulate data.</p><p>    - They define event handlers.</p><p><br></p><p>    The ff. are the characteristics of presentational components:</p><p>    - They are more concerned with the visual representation.</p><p>    - They render the HTML markup (or other components).</p><p>    - They receive data from the parents in the form of props.</p><p>    - They are often written as stateless functional components.</p>
    `
  },
  {
    title: 'Understanding HOCs',
    desc: `
    <p>HOCs are functions that take a component as input and return an enhanced component as output. By using HOCs, we avoid polluting any state and don't require the component to implement any function. This means the component and HOC are not coupled, and both can be resued throughout the application. Some common HOCs are connect from Redux and createFragmentContianer from Relay.</p><p><br></p><pre class="ql-syntax" spellcheck="false">// Ex. you need to attach the same className property
// to every components. You could manually add the
// className property to each render method, or
// you could write an HOC like this:


const withClassName = Component =&gt; props =&gt; {
  return (
    &lt;Component {...props} className="my-class" /&gt;
  )
}

// It's common to use the with prefix for HOCs.

// Usage:
const MyComponentWithClassName = withClassName(MyComponent)
</pre>
    `
  },
  {
    title: "Understanding FunctionAsChild",
    desc: `
    <p>the FunctionAsChild is a component with a children property defined as a function. Instead of being used as a JSX expression, it gets called.</p><p><br></p><pre class="ql-syntax" spellcheck="false">const FunctionAsChild = ({ children }) =&gt; children()


// Usage:
&lt;FunctionAsChild&gt;
  {() =&gt; &lt;div&gt;Hello World&lt;/div&gt;}
&lt;/FunctionAsChild&gt;


// The primary advantage is the ability to encapsulate components,
// delivering variables dynamically, as opposed to
// utilizing static properties, which is a common practice with HOCs.
// A goood example is a Fetch component, designed to retrieve data
// from a specific API endpoint and sunsequently return it to its child function


// Usage:
&lt;Fetch url="https://api.example.com"&gt;
  { data =&gt; &lt;List data={data} /&gt; }
&lt;/Fetch&gt;
</pre>
    `
  }
];

export default C4_POPULAR_COMPOSITION;
