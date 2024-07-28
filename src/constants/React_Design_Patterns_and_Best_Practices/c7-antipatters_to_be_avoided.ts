export const C7_ANTIPATTERNS_TO_BE_AVOIDED = [
  {
    problem: "how do we avoid duplicate props pass down to child and state",
    title: "Initializing the state using properties",
    desc: `
    <p>It's best pracitce to make it explicit and give the property a name that makes you intentions clear, such as initialCount.</p><p><br></p><pre class="ql-syntax" spellcheck="false">type Props = {
      initialCount: number
    }
    
    
    const Counter: FC&lt;Props&gt; = ({ initialCount }) =&gt; {
      const [count, setCount] = useState(initialCount)
    }
    
    
    // Usage:
    &lt;Counter initialCount={1} /&gt;
    </pre>
    `
  },
  {
    title: "Using indexes as a key",
    desc: `
    <p>The key must be unique and stable, identifying one, and only one, item.</p><p><br></p><pre class="ql-syntax" spellcheck="false">{
      items.map((item, index) =&gt; (
        &lt;li key={item.id}&gt;{item}&lt;/li&gt;
      ))
    }
    </pre>
    `
  },
  {
    title: "Spreading properties on DOM elements",
    desc: `
    <p>We usually spread the proerties to the elements to avoid writing every single one mannually</p><p><br></p><pre class="ql-syntax" spellcheck="false">&lt;Component {...props} /&gt;

// when we spread properties into a DOM element, we run
// the risk of adding unknown HTML attributes


// One solution we can use to solve this problem is to create a
// property called domProps that we can spread safely to the
// compoenent because we are explicitly saying that it contains
// valid DOM properties


const Spread = props =&gt; &lt;div {...props.domProps} /&gt;


// Usage:
&lt;Spead foo="bar" domProps={{ id: 'foo', className: 'bar' }} /&gt;
</pre>
    `
  }
]

export default C7_ANTIPATTERNS_TO_BE_AVOIDED
