export const C11_MANAGING_DATA = [
  {
    problem: `what is the lightweight to share data throughout the app?
    what is the equivalent of plugin in React?
    `,
    title: "Context API",
    desc: `
    <p>The Context API allows you to share data between components without having to pass a prop to every child component.</p><p>It's also super useful when you want to separate your application from you data and do all the fetching in there.</p><p>There are multiple uses for the Context API, which can also be used for theming or to pass functions; it all depends on your application.</p><p><br></p><pre class="ql-syntax" spellcheck="false">// Create a context
    import { FC, createContext, useState, useEffect, ReactElement, useCallback } from 'react';
    import axios from 'axios';


    // Declare interfaces
    export type Issue = {
      number: number
      title: string
      url: string
      state: string
    }
    interface Issue_Context {
      issues: Issue[]
      url: string
    }
    interface Props {
      url: string
    }


    // Now, create a context using createContext function
    // and defining the value we want ot export
    export const IssueContext = createContext&lt;Issue_Context&gt;({ issues: [], url: '' });


    // Create a component where we can receive props, set states,
    // perform fetch by using useEffect and render IssueContext.Provider
    const IssueProvider: FC&lt;Props&gt; = ({ children, url }) =&gt; {
      // State
      const [issues, setIssues] = useState&lt;Issue[]&gt;([]);
      const fetchIssues = useCallback(async () =&gt; {
        const response = await axios(url);
        if (response) {
          setIssues(response.data);
        }
      }, [url])


      // Effects
      useEffect(() =&gt; {
        // GOOD PRACTICE:
        // everytime we use function inside useEffect,
        // we need to wrap function in useCallback hook
        // good practice if we use async/await to have it in a
        // separate function and not directly in useEffect.
        fetchIssues();
      }, [fetchIssues]);


      // NOTE:
      // once we perform fetch and get data in issues state,
      // we add all values to export as context,
      const context = {
        issues,
        url,
      }


      // NOTE:
      // when we render IssueContext.Provider, we will pass
      // the context on value prop,
      // and finally, render children of component.
      return (
        &lt;IssueContext.Provider value={context}&gt;
          {children}
        &lt;/IssueContext.Provider&gt;
      )
    }
    export default IssueProvider;
</pre>
    `
  },
  {
    problem: "how do we make Context available to our components?",
    title: "Wrapping our components with the provider",
    desc: `
    <p>Continuing with previous topic, this code will be added to main component of app (normally, all providers are defined in parent components)</p><p><br></p><pre class="ql-syntax" spellcheck="false">// Import the IssueProvider component
    // Providers
    import IssueProvider from '../contexts/Issue';
    // Components
    import Issues from './Issues';

    const App = () =&gt; {

      // NOTE:
      // we wrap Issues component with IssueProvider.
      // if we forget to wrap components with the provider,
      // we won't be able to access context within them.
      // the challenging aspect is that, we might not receive an error message;
      // instead, you will encounter undefined data.
      return (
        &lt;IssueProvider url="https://api.github.com/repos/ContentAPI/issues"&gt;
          &lt;Issues /&gt;
        &lt;/IssueProvider&gt;
      )
    }
    export default App;
</pre>
    `
  },
  {
    problem: "how do we consume Context using hook?",
    title: "Consuming context with useContext",
    desc: `This step will require us to wrap our main component with the provider.`,
    sample: `
    <p>This step will require us to wrap our main component with the provider.</p><p><br></p><pre class="ql-syntax" spellcheck="false">// Dependencies
    import { FC, useContext } from 'react';
    // Contexts
    import { IssueContext, Issue } from '../contexts/Issue';


    const Issues: FC = () =&gt; {
      // Here you consume your Context, and you can grab the issues value.
      const { issues, url } = useContext&lt;Issue&gt;(IssueContext);


      return (
        &lt;&gt;
          &lt;h1&gt;Issues&lt;/h1&gt;
          {issues.map((issue: Issue) =&gt; (
            &lt;p key={issue.number}&gt;
              &lt;a href={issue.url}&gt;{issue.title}&lt;/a&gt;
            &lt;/p&gt;
          ))}
        &lt;/&gt;
      )
    }
    export default Issues;
</pre>
    `
  },
  {
    problem: "",
    title: "React Suspense with SWR",
    desc: ``,
    sample: ``
  },
  {
    problem: "",
    title: "Redux Toolkit: a modern approach to Redux",
    desc: ``,
    sample: ``
  }
];

export default C11_MANAGING_DATA;
