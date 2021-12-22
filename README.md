<h2>Motivation</h2>
Show perforamce problem and solution using useMemo

<h2>ParentProblem</h2>
This component has two child components .Each component render a different counter. The parent has the counters as states, but each state change cause all children to render even if their props has not changed

<h2>ParentSolution</h2>
Its the same as ParentProblem but using useMemo per counter cause child render only when its prop has changed

<h2>Setup</h2>
<p>npm i</h2>
<p>npm run dev</h2>
